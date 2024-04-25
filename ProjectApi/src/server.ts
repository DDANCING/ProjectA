import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider } from "fastify-type-provider-zod";
import { getMusicPerformance } from './routes/get-music-score';
import { getUserRouteHandler } from './routes/get-users';
import { getScoreboard } from './routes/get-Scoreboard';
import { postUserRouteHandler } from "./routes/post-users";
import { errorHandler } from "./utils/error-handler";
import { fastifyCors } from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { getMusicList } from './routes/get-music-list';
import { postMusic } from './routes/post-music';
import { createOrUpdatePerformance } from './routes/post-performance';
import { updateMusic } from './routes/put-music';
import { updateUserRouteHandler } from './routes/put-user';

import { ready } from './routes/ready';
import { getTokenRouteHandler } from './routes/get-token';
import { logoutRouteHandler } from './routes/post-logout';


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
app.register(getMusicPerformance);

// Music list
app.register(getMusicList);

// Add a new music
app.register(postMusic);

// Add a new Performance/score
app.register(createOrUpdatePerformance);

// Update a music
app.register(updateMusic);

app.register(getTokenRouteHandler);

// User login
app.register(getUserRouteHandler);

// User logout
app.register(logoutRouteHandler);

// update
app.register(updateUserRouteHandler);

// Scoreboard
app.register(getScoreboard);

// Add a new user route
app.register(postUserRouteHandler);


app.register(ready);

app.setErrorHandler(errorHandler) 

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log("HTTP server running in localhost:3333");
});
