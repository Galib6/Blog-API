import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::test.test",
  ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async customAction(ctx) {
      try {
        // Custom logic here
        const users = await strapi.entityService.findMany(
          "plugin::users-permissions.user",
          {
            fields: ["id", "username", "email"], // Assuming `username` is the field name for the user's name
          }
        );
        const createdEntries = await Promise.all(
          users.map((user: any) =>
            strapi.entityService.create("api::test.test", {
              data: {
                name: user.username,
                email: user.email,
                amount: "0", // Assuming a default value for `amount`
                publishedAt: new Date(),
              },
            })
          )
        );

        // Send an email to each user using Strapi's email plugin
        await Promise.all(
          users.map((user: any) =>
            strapi
              .plugin("email")
              .service("email")
              .send({
                to: user.email,
                subject: "Hello",
                text: `Hi ${user.username},\n\nWe are excited to have you with us.`,
                html: `<p>Hi ${user.username},</p><p>We are excited to have you with us.</p>`,
                headers: {
                  "X-Mailer": "Strapi Email Plugin",
                  "X-Priority": "3 (Normal)",
                },
              })
          )
        );

        ctx.body = createdEntries;
      } catch (err) {
        ctx.body = err;
      }
    },

    // Method 2: Wrapping a core action (e.g., find)
    async find(ctx) {
      // Some custom logic here
      ctx.query = { ...ctx.query, local: "en" };

      // Calling the default core action
      const { data, meta } = await super.find(ctx);

      // Some more custom logic
      meta.custom = "This is some custom meta data";

      return { data, meta };
    },
  })
);
