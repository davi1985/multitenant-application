import Fastify from "fastify";

const fastify = Fastify();

fastify
  .listen({ port: 3001 })
  .then(() => {
    console.log("Server started at http://localhost:3001");
  })
  .catch((err) => {
    fastify.log.error(err);
    process.exit(1);
  });
