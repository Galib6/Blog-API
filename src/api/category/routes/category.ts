export default {
  routes: [
    {
      method: "GET",
      path: "/categories/count-articles",
      handler: "category.countArticles",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Other existing routes
    {
      method: "POST",
      path: "/categories",
      handler: "category.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/categories/:id",
      handler: "category.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/categories",
      handler: "category.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/categories/:id",
      handler: "category.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/categories/:id",
      handler: "category.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
