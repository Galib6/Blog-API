export default {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  myJob: {
    task: async ({ strapi }) => {
      try {
        // Fetch the list of users with only `id`, `username`, and `email` fields
        const users = await strapi.entityService.findMany(
          "plugin::users-permissions.user",
          {
            fields: ["id", "username", "email"], // Assuming `username` is the field name for the user's name
          }
        );

        // Create entries in the `test` collection with the fetched user data and publish them
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

        // Log the result
        strapi.log.info(
          "Cron job completed successfully at " + new Date().toISOString()
        );
      } catch (err) {
        strapi.log.error(
          "Cron job failed at " + new Date().toISOString() + ":",
          err
        );
      }
    },
    options: {
      rule: "*/10 * * * *", // Run every 10 minutes
    },
  },
};
