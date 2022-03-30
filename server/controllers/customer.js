"use strict";

/**
 * Customer.js controller
 *
 * @description: A set of functions called "actions" for managing `Customer`.
 */

const _ = require("lodash");
const utils = require("@strapi/utils");
const { getService } = require("../utils");
const { validateCreateCustomerBody, validateUpdateCustomerBody } = require("./validation/customer");
const customer = require("../content-types/customer/customer");

const { sanitize } = utils;
const { ApplicationError, ValidationError } = utils.errors;

const sanitizeOutput = (customer, ctx) => {
  const schema = strapi.getModel("plugin::katsu-commerce.customer");
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(customer, schema, { auth });
};

module.exports = {
  /**
   * Create a/an customer record.
   * @return {Object}
   */
  async create(ctx) {
    const advanced = await strapi
      .store({ type: "plugin", name: "users-permissions", key: "advanced" })
      .get();

    await validateCreateCustomerBody(ctx.request.body);

    const { email, username, role } = ctx.request.body;

    const userWithSameUsername = await strapi
      .query("plugin::katsu-commerce.customer")
      .findOne({ where: { username } });

    if (userWithSameUsername) {
      if (!email) throw new ApplicationError("Username already taken");
    }

    if (advanced.unique_email) {
      const userWithSameEmail = await strapi
        .query("plugin::katsu-commerce.customer")
        .findOne({ where: { email: email.toLowerCase() } });

      if (userWithSameEmail) {
        throw new ApplicationError("Email already taken");
      }
    }

    const customer = {
      ...ctx.request.body,
      provider: "local",
    };

    customer.email = _.toLower(customer.email);

    if (!role) {
      const defaultRole = await strapi
        .query("plugin::users-permissions.role")
        .findOne({ where: { type: advanced.default_role } });

      customer.role = defaultRole.id;
    }

    try {
      const data = await getService("customer").add(customer);
      const sanitizedData = await sanitizeOutput(data, ctx);

      ctx.created(sanitizedData);
    } catch (error) {
      throw new ApplicationError(error.message);
    }
  },

  /**
   * Update a/an user record.
   * @return {Object}
   */
  async update(ctx) {
    const advancedConfigs = await strapi
      .store({ type: "plugin", name: "users-permissions", key: "advanced" })
      .get();

    const { id } = ctx.params;
    const { email, username, password } = ctx.request.body;

    const user = await getService("customer").fetch({ id });

    await validateUpdateCustomerBody(ctx.request.body);

    if (customer.provider === "local" && _.has(ctx.request.body, "password") && !password) {
      throw new ValidationError("password.notNull");
    }

    if (_.has(ctx.request.body, "username")) {
      const customerWithSameUsername = await strapi
        .query("plugin::katsu-commerce.customer")
        .findOne({ where: { username } });

      if (customerWithSameUsername && customerWithSameUsername.id != id) {
        throw new ApplicationError("Username already taken");
      }
    }

    if (_.has(ctx.request.body, "email") && advancedConfigs.unique_email) {
      const customerWithSameEmail = await strapi
        .query("plugin::katsu-commerce.customer")
        .findOne({ where: { email: email.toLowerCase() } });

      if (customerWithSameEmail && customerWithSameEmail.id != id) {
        throw new ApplicationError("Email already taken");
      }
      ctx.request.body.email = ctx.request.body.email.toLowerCase();
    }

    const updateData = {
      ...ctx.request.body,
    };

    const data = await getService("customer").edit(customer.id, updateData);
    const sanitizedData = await sanitizeOutput(data, ctx);

    ctx.send(sanitizedData);
  },

  /**
   * Retrieve user records.
   * @return {Object|Array}
   */
  async find(ctx, next, { populate } = {}) {
    const customers = await getService("user").fetchAll(ctx.query.filters, populate);

    ctx.body = await Promise.all(customers.map((customer) => sanitizeOutput(customer, ctx)));
  },

  /**
   * Retrieve a user record.
   * @return {Object}
   */
  async findOne(ctx) {
    const { id } = ctx.params;
    let data = await getService("customer").fetch({ id });

    if (data) {
      data = await sanitizeOutput(data, ctx);
    }

    ctx.body = data;
  },

  /**
   * Retrieve user count.
   * @return {Number}
   */
  async count(ctx) {
    ctx.body = await getService("customer").count(ctx.query);
  },

  /**
   * Destroy a/an user record.
   * @return {Object}
   */
  async destroy(ctx) {
    const { id } = ctx.params;

    const data = await getService("customer").remove({ id });
    const sanitizedUser = await sanitizeOutput(data, ctx);

    ctx.send(sanitizedUser);
  },

  /**
   * Retrieve authenticated user.
   * @return {Object|Array}
   */
  async me(ctx) {
    const { customer } = ctx.state;

    if (!customer) {
      return ctx.unauthorized();
    }

    ctx.body = await sanitizeOutput(customer, ctx);
  },
};
