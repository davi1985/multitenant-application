import Fastify from "fastify";
import { routes } from "./routes/index.js";
import { ZodError } from "zod";

const fastify = Fastify();

fastify.register(routes);
fastify.setErrorHandler((err, request, reply) => {
  if (err instanceof ZodError) {
    reply.status(400).send({ errors: err.issues });

    return;
  }

  console.log(err);
  reply.status(500).send({ error: "Internal Server Error" });
});
fastify
  .listen({ port: 3001 })
  .then(() => {
    console.log("Server started at http://localhost:3001");
  })
  .catch((err) => {
    fastify.log.error(err);
    process.exit(1);
  });
