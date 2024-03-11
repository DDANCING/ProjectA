// validation.js
const { z } = require('zod');

const createNewUser = z.object({
  nome: z.string(),
  email: z.string().email(),
  senha: z.string(),
});

module.exports = {
  createNewUser,
};
