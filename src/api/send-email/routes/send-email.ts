/**
 * send-email router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::send-email.send-email", {
  config: {
    delete: {},
    sendEmail: {
      auth: false,
      policies: ["global::is-creator"],
      middlewares: [],
    },
  },
});
