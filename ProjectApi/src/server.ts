import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';
import { GetMusic } from './routes/get-musics';
import { GetUsers } from './routes/get-users';
import { GetScoreboard } from './routes/get-Scoreboard';
import { postUserRouteHandler } from "./routes/post-user";

const app = fastify({ logger: true });
const port: number = 3333;

// Enable CORS
app.register(fastifyCors, { origin: '*' });

// Music list
app.register(GetMusic);

// User list
app.register(GetUsers);

// Scoreboard
app.register(GetScoreboard);

// Add a new user route
app.register(postUserRouteHandler);

app.listen(port, '0.0.0.0', (err: Error | null, address: string) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`API está rodando em http://localhost:${port}/`);
});