import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyFormbody from '@fastify/formbody';
import { GetMusic } from './routes/get-musics';
import { registerRoutes } from './routes/get-post-users';
import { GetScoreboard } from './routes/get-Scoreboard';

const app = fastify({ logger: true });

const config = { port: 3333 };

// Enable CORS
app.register(fastifyCors, { origin: '*' });

// Register body parser plugin
app.register(fastifyFormbody);

// Music list
app.register(GetMusic);

// User list
app.register(registerRoutes);

// Scoreboard
app.register(GetScoreboard);

// Add a new user route

app.listen(config, (err) => {
  if (err) throw err;
  console.log(`API está rodando em http://localhost:${config.port}/`);
});