"use strict";

module.exports = [
  {
    method: "GET",
    path: "/customers/count",
    handler: "customer.count",
    config: {
      prefix: "",
    },
  },
  {
    method: "GET",
    path: "/customers",
    handler: "customer.find",
    config: {
      auth: {},
      prefix: "",
    },
  },
  {
    method: "GET",
    path: "/customers/me",
    handler: "customer.me",
    config: {
      prefix: "",
    },
  },
  {
    method: "GET",
    path: "/customers/:id",
    handler: "customer.findOne",
    config: {
      prefix: "",
    },
  },
  {
    method: "POST",
    path: "/customers",
    handler: "customer.create",
    config: {
      prefix: "",
    },
  },
  {
    method: "PUT",
    path: "/customers/:id",
    handler: "customer.update",
    config: {
      prefix: "",
    },
  },
  {
    method: "DELETE",
    path: "/customers/:id",
    handler: "customer.destroy",
    config: {
      prefix: "",
    },
  },
];
