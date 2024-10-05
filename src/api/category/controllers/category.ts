/**
 * category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async countArticles(ctx) {
      try {
        const categories = await strapi.entityService.findMany(
          "api::category.category",
          {
            populate: {
              articles: {
                populate: "*",
              },
            },
          }
        );

        const result = categories.map((category) => ({
          attributes: {
            id: category.id,
            title: category.title,
            articleCount: category.articles.length,
            slug: category.slug,
            articles: category.articles.slice(0, 4).map((article) => {
              const { content, createdBy, updatedBy, ...rest } = article;
              return {
                attributes: {
                  ...rest,
                  categories: {
                    data: rest.categories,
                  },
                  thumb: {
                    data: {
                      attributes: rest.thumb,
                    },
                  },
                },
              };
            }),
          },
        }));

        ctx.send(result);
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
