export default {
  routes: [
    {
      method: "GET",
      path: "/tests/custom-action",
      handler: "test.customAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/tests",
      handler: "test.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
