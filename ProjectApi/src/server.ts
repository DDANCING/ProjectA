import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';

import { GetMusic } from './http/routes/get-musics';
import { GetUsers } from './http/routes/get-users';
import { GetScoreboard } from './http/routes/get-Scoreboard';
import { PostUsers } from './http/routes/post-user';



const app: FastifyInstance = fastify({ logger: true });
const port = 3333;
// Habilitando o CORS
app.register(fastifyCors, { origin: '*' });
//lista de musicas
app.register(GetMusic);
//lista de usuarios
app.register(GetUsers);
//scoreboard
app.register(GetScoreboard);
//adicionar um novo user
app.register(PostUsers);


app.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`API está rodando em http://localhost:${port}/`);
});
