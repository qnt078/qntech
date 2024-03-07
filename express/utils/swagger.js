const swaggerDocument = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",

      contact: {
        name: "QuocNguyen",
        email: "ntquoc.work@gmail.com",
      },
    },
  },

  apis: [
    "./routes/*.js",
  ],
 
};
export default swaggerDocument;
