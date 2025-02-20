const swaggerUI = require("swagger-ui-express");
const swaggerJSDocs = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WeTax OpenAPI Documentation",
      version: "1.4.0",
      description:
        "<em>Last updated: 06-09-2024</em>",
    },
    servers: [
      // {
      //   url: "https://dev.einvoicevn.com",
      //   description: "Dev internal server",
      // },
      {
        url: "https://apidev.wetax.com.vn",
      },
      {
        url: "https://apitest.wetax.com.vn",
      },
      {
        url: "https://api.wetax.com.vn",
      },
    ],
  },
  apis: ["./version/v120/*.yaml"],
};

const swaggerJS = swaggerJSDocs(options);

module.exports = {
  swaggerServe: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerJS, {
    customSiteTitle: "WeTax OpenAPI Documentation",
  }),
};

// 1. Development (SIT)
// -> https://dev.wetax.com.vn
// -> https://apidev.wetax.com.vn

// 2. Testing (UAT)
// -> https://test.wetax.com.vn
// -> https://apitest.wetax.com.vn

// 3. Production (Prod)
// -> https://wetax.com.vn
// -> https://api.wetax.com.vn
