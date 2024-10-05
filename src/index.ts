export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // async bootstrap({ strapi }) {
  //   strapi.db.lifecycles.subscribe({
  //     models: ["plugin::users-permissions.user"],

  //     async afterFindOne(event) {
  //       const { result } = event;
  //       let date = new Date();
  //       let day = String(date.getDate()).padStart(2, "0");
  //       let month = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  //       let year = date.getFullYear().toString().substr(-2);
  //       let hours = String(date.getHours()).padStart(2, "0");
  //       let minutes = String(date.getMinutes()).padStart(2, "0");
  //       let ampm = date.getHours() >= 12 ? "PM" : "AM";
  //       let formattedDate = `${day}-${month}-${year}/ ${hours}-${minutes}-${ampm}`;

  //       await strapi.plugins["email"].services.email.send({
  //         to: "asadullahalgalib81@gmail.com",
  //         from: `algalib1001@gmail.com`,
  //         subject: "One Login from your account",
  //         cc: "valid email address",
  //         bcc: "valid email address",
  //         replyTo: "valid email address",
  //         text: "${fieldName}", // Replace with a valid field ID
  //         html: `Time of login ${formattedDate} and user email is ${result.email}`,
  //       });
  //     },
  //   });
  // },
};
