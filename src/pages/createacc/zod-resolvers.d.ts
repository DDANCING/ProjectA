// Crie um arquivo chamado "zod-resolvers.d.ts" no seu projeto
declare module '@hookform/resolvers/zod' {
  import { FieldValues, Resolver } from 'react-hook-form'
  import { ZodObject } from 'zod'

  export const zodResolver: <TFieldValues extends FieldValues = FieldValues>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    schema: ZodObject<any, any>,
  ) => Resolver<TFieldValues>
}
