import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider } from "fastify-type-provider-zod";
import { GetMusic } from './routes/get-music-score';
import { getUserRouteHandler } from './routes/get-users';
import { GetScoreboard } from './routes/get-Scoreboard';
import { postUserRouteHandler } from "./routes/post-users";
import { errorHandler } from "./utils/error-handler";
import { fastifyCors } from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { GetMusicList } from './routes/get-music-list';
import { PostMusic } from './routes/post-music';
import { CreateOrUpdatePerformance } from './routes/post-performance';
import { UpdateMusic } from './routes/put-music';
import { updateUserRouteHandler } from './routes/put-user';
import { logoutUserRouteHandler } from './routes/user-logout';

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: "*",
})
app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'ProjectA',
      description: 'API for ProjectA application',
      version: '1.0.0'
    }, 
  },
  transform: jsonSchemaTransform
})
app.register(fastifySwaggerUI, {
  routePrefix: "/docs",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Music score id
app.register(GetMusic);

// Music list
app.register(GetMusicList);

// Add a new music
app.register(PostMusic);

// Add a new Performance/score
app.register(CreateOrUpdatePerformance);

// Update a music
app.register(UpdateMusic);

// User login
app.register(getUserRouteHandler);

// User logout
app.register(logoutUserRouteHandler);

// update
app.register(updateUserRouteHandler);

// Scoreboard
app.register(GetScoreboard);

// Add a new user route
app.register(postUserRouteHandler);

app.setErrorHandler(errorHandler) 

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log("HTTP server running in localhost:3333");
});
