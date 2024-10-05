/**
 * send-email controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::send-email.send-email",
  ({ strapi }) => ({
    async customAction(ctx) {
      try {
        // Custom logic here
        const { email, subject, message } = ctx.request.body;

        // Example: Send an email using Strapi's email plugin
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: email,
            from: "galib@gmail.com", // Replace with your verified email address
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
          });

        ctx.send({ message: "Email sent successfully" });
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
