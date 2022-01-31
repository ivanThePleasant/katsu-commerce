'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('katsu-commerce')
      .service('myService')
      .getWelcomeMessage();
  },
};
