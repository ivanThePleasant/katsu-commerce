module.exports = {
  collectionName: "customer",
  info: {
    tableName: "customer",
    singularName: "customer",
    pluralName: "customers",
    displayName: "Customer",
    description: "",
  },
  options: {
    draftAndPublish: false,
    timestamps: true,
  },
  pluginOptions: {
    "content-manager": {
      visible: false,
    },
    "content-type-builder": {
      visible: true,
    },
  },
  attributes: {
    firstName: {
      type: "string",
      minLength: 1,
      unique: false,
      configurable: false,
      required: true,
    },
    lastName: {
      type: "string",
      minLength: 1,
      unique: false,
      configurable: false,
      required: true,
    },
    email: {
      type: "email",
      minLength: 6,
      configurable: false,
      required: true,
    },
    provider: {
      type: "string",
      configurable: false,
    },
    password: {
      type: "password",
      minLength: 6,
      configurable: false,
      private: true,
    },
    resetPasswordToken: {
      type: "string",
      configurable: false,
      private: true,
    },
    confirmationToken: {
      type: "string",
      configurable: false,
      private: true,
    },
    confirmed: {
      type: "boolean",
      default: false,
      configurable: false,
    },
    blocked: {
      type: "boolean",
      default: false,
      configurable: false,
    },
    role: {
      type: "relation",
      relation: "manyToOne",
      target: "plugin::users-permissions.role",
      inversedBy: "customers",
    },
  },
  config: {
    resetPasswordToken: {
      hidden: true,
    },
    confirmationToken: {
      hidden: true,
    },
    provider: {
      hidden: true,
    },
  },
};