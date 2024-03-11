import { FastifyReply } from 'fastify';

declare module 'fastify' {
  interface FastifyReply {
    setCookie(
      name: string,
      value: string,
      options?: {
        domain?: string;
        path?: string;
        expires?: Date;
        httpOnly?: boolean;
        secure?: boolean;
        sameSite?: 'Strict' | 'Lax' | 'None';
        signed?: boolean;
        maxAge?: number; // Add maxAge property to the options
      },
    ): FastifyReply;
  }
}
