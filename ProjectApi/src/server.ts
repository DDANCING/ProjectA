import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider } from "fastify-type-provider-zod";
import { GetUserPerformance } from './routes/get-music-score';
import { getUserRouteHandler } from './routes/get-users';
import { GetScoreboard } from './routes/get-Scoreboard';
import { postUserRouteHandler } from "./routes/post-users";
import { errorHandler } from "./utils/error-handler";
import { fastifyCors } from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { CreateOrUpdatePerformance } from './routes/post-performance';
import { GetMusicList } from './routes/get-music-list';
import { PostMusic } from './routes/post-music';
import { UpdateMusic } from './routes/put-music';
import { updateUserRouteHandler } from './routes/put-user';


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

// validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Music list
app.register(GetMusicList);

// create music
app.register(PostMusic);

// update music
app.register(UpdateMusic);

// individual user performance
app.register(GetUserPerformance);

// post or update user performance
app.register(CreateOrUpdatePerformance);

// Scoreboard
app.register(GetScoreboard);

// login
app.register(getUserRouteHandler);

// update user 
app.register(updateUserRouteHandler);

// Add a new user 
app.register(postUserRouteHandler);

// Error handler
app.setErrorHandler(errorHandler) 

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log("HTTP server running in localhost:3333");
});