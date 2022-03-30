"use strict";

module.exports = ({ strapi }) => {
  strapi.contentType("plugin::users-permissions.role").attributes = {
    ...strapi.contentType("plugin::users-permissions.role").attributes,
    customers: {
      type: "relation",
      relation: "oneToMany",
      target: "plugin::katsu-commerce.customer",
      mappedBy: "role",
      configurable: false,
    },
  };
};
