import { fastify } from 'fastify'

const app = fastify()
 
app.get(`/`, () => {
  return `opa`
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('http server runing')
})