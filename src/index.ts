import fastify from "fastify";
import multiPart from "@fastify/multipart";
import cors from "@fastify/cors";

const server = fastify();
server.register(cors, {
  origin: "*",
});
server.register(multiPart, {
  attachFieldsToBody: "keyValues",
  limits: {
    fileSize: 2147483648, // ファイルサイズの制限 (50MB)
    fieldSize: 2147483648, // フィールドサイズの制限 (50MB)
  },
});

/*******************************************************
 * CREATE SERVER
 *******************************************************/
server.listen({ port: 8000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

// API
server.get("/test", async (request, reply) => {
  console.log("/test called");
  reply.send("/test called");
});
