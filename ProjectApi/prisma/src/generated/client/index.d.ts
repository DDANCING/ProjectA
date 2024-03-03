
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Musica
 * 
 */
export type Musica = $Result.DefaultSelection<Prisma.$MusicaPayload>
/**
 * Model Desempenho
 * 
 */
export type Desempenho = $Result.DefaultSelection<Prisma.$DesempenhoPayload>
/**
 * Model Scoreboard
 * 
 */
export type Scoreboard = $Result.DefaultSelection<Prisma.$ScoreboardPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.musica`: Exposes CRUD operations for the **Musica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Musicas
    * const musicas = await prisma.musica.findMany()
    * ```
    */
  get musica(): Prisma.MusicaDelegate<ExtArgs>;

  /**
   * `prisma.desempenho`: Exposes CRUD operations for the **Desempenho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Desempenhos
    * const desempenhos = await prisma.desempenho.findMany()
    * ```
    */
  get desempenho(): Prisma.DesempenhoDelegate<ExtArgs>;

  /**
   * `prisma.scoreboard`: Exposes CRUD operations for the **Scoreboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scoreboards
    * const scoreboards = await prisma.scoreboard.findMany()
    * ```
    */
  get scoreboard(): Prisma.ScoreboardDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Musica: 'Musica',
    Desempenho: 'Desempenho',
    Scoreboard: 'Scoreboard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'musica' | 'desempenho' | 'scoreboard'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Musica: {
        payload: Prisma.$MusicaPayload<ExtArgs>
        fields: Prisma.MusicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          findFirst: {
            args: Prisma.MusicaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          findMany: {
            args: Prisma.MusicaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>[]
          }
          create: {
            args: Prisma.MusicaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          createMany: {
            args: Prisma.MusicaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MusicaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          update: {
            args: Prisma.MusicaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          deleteMany: {
            args: Prisma.MusicaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MusicaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MusicaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          aggregate: {
            args: Prisma.MusicaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMusica>
          }
          groupBy: {
            args: Prisma.MusicaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MusicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicaCountArgs<ExtArgs>,
            result: $Utils.Optional<MusicaCountAggregateOutputType> | number
          }
        }
      }
      Desempenho: {
        payload: Prisma.$DesempenhoPayload<ExtArgs>
        fields: Prisma.DesempenhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesempenhoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesempenhoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload>
          }
          findFirst: {
            args: Prisma.DesempenhoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesempenhoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload>
          }
          findMany: {
            args: Prisma.DesempenhoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload>[]
          }
          create: {
            args: Prisma.DesempenhoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload>
          }
          createMany: {
            args: Prisma.DesempenhoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DesempenhoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload>
          }
          update: {
            args: Prisma.DesempenhoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload>
          }
          deleteMany: {
            args: Prisma.DesempenhoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DesempenhoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DesempenhoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesempenhoPayload>
          }
          aggregate: {
            args: Prisma.DesempenhoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDesempenho>
          }
          groupBy: {
            args: Prisma.DesempenhoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DesempenhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesempenhoCountArgs<ExtArgs>,
            result: $Utils.Optional<DesempenhoCountAggregateOutputType> | number
          }
        }
      }
      Scoreboard: {
        payload: Prisma.$ScoreboardPayload<ExtArgs>
        fields: Prisma.ScoreboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreboardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreboardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          findFirst: {
            args: Prisma.ScoreboardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreboardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          findMany: {
            args: Prisma.ScoreboardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>[]
          }
          create: {
            args: Prisma.ScoreboardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          createMany: {
            args: Prisma.ScoreboardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScoreboardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          update: {
            args: Prisma.ScoreboardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          deleteMany: {
            args: Prisma.ScoreboardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreboardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScoreboardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          aggregate: {
            args: Prisma.ScoreboardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScoreboard>
          }
          groupBy: {
            args: Prisma.ScoreboardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScoreboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreboardCountArgs<ExtArgs>,
            result: $Utils.Optional<ScoreboardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    desempenhos: number
    scoreboards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desempenhos?: boolean | UserCountOutputTypeCountDesempenhosArgs
    scoreboards?: boolean | UserCountOutputTypeCountScoreboardsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDesempenhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesempenhoWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScoreboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreboardWhereInput
  }



  /**
   * Count Type MusicaCountOutputType
   */

  export type MusicaCountOutputType = {
    desempenhos: number
    scoreboards: number
  }

  export type MusicaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desempenhos?: boolean | MusicaCountOutputTypeCountDesempenhosArgs
    scoreboards?: boolean | MusicaCountOutputTypeCountScoreboardsArgs
  }

  // Custom InputTypes

  /**
   * MusicaCountOutputType without action
   */
  export type MusicaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicaCountOutputType
     */
    select?: MusicaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MusicaCountOutputType without action
   */
  export type MusicaCountOutputTypeCountDesempenhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesempenhoWhereInput
  }


  /**
   * MusicaCountOutputType without action
   */
  export type MusicaCountOutputTypeCountScoreboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreboardWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    desempenhos?: boolean | User$desempenhosArgs<ExtArgs>
    scoreboards?: boolean | User$scoreboardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desempenhos?: boolean | User$desempenhosArgs<ExtArgs>
    scoreboards?: boolean | User$scoreboardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      desempenhos: Prisma.$DesempenhoPayload<ExtArgs>[]
      scoreboards: Prisma.$ScoreboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    desempenhos<T extends User$desempenhosArgs<ExtArgs> = {}>(args?: Subset<T, User$desempenhosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'findMany'> | Null>;

    scoreboards<T extends User$scoreboardsArgs<ExtArgs> = {}>(args?: Subset<T, User$scoreboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.desempenhos
   */
  export type User$desempenhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    where?: DesempenhoWhereInput
    orderBy?: DesempenhoOrderByWithRelationInput | DesempenhoOrderByWithRelationInput[]
    cursor?: DesempenhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesempenhoScalarFieldEnum | DesempenhoScalarFieldEnum[]
  }


  /**
   * User.scoreboards
   */
  export type User$scoreboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    where?: ScoreboardWhereInput
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    cursor?: ScoreboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Musica
   */

  export type AggregateMusica = {
    _count: MusicaCountAggregateOutputType | null
    _avg: MusicaAvgAggregateOutputType | null
    _sum: MusicaSumAggregateOutputType | null
    _min: MusicaMinAggregateOutputType | null
    _max: MusicaMaxAggregateOutputType | null
  }

  export type MusicaAvgAggregateOutputType = {
    id: number | null
  }

  export type MusicaSumAggregateOutputType = {
    id: number | null
  }

  export type MusicaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    artista: string | null
    linkYoutube: string | null
    tablatura: string | null
    capaAlbum: string | null
  }

  export type MusicaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    artista: string | null
    linkYoutube: string | null
    tablatura: string | null
    capaAlbum: string | null
  }

  export type MusicaCountAggregateOutputType = {
    id: number
    titulo: number
    artista: number
    linkYoutube: number
    tablatura: number
    capaAlbum: number
    _all: number
  }


  export type MusicaAvgAggregateInputType = {
    id?: true
  }

  export type MusicaSumAggregateInputType = {
    id?: true
  }

  export type MusicaMinAggregateInputType = {
    id?: true
    titulo?: true
    artista?: true
    linkYoutube?: true
    tablatura?: true
    capaAlbum?: true
  }

  export type MusicaMaxAggregateInputType = {
    id?: true
    titulo?: true
    artista?: true
    linkYoutube?: true
    tablatura?: true
    capaAlbum?: true
  }

  export type MusicaCountAggregateInputType = {
    id?: true
    titulo?: true
    artista?: true
    linkYoutube?: true
    tablatura?: true
    capaAlbum?: true
    _all?: true
  }

  export type MusicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Musica to aggregate.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Musicas
    **/
    _count?: true | MusicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicaMaxAggregateInputType
  }

  export type GetMusicaAggregateType<T extends MusicaAggregateArgs> = {
        [P in keyof T & keyof AggregateMusica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusica[P]>
      : GetScalarType<T[P], AggregateMusica[P]>
  }




  export type MusicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicaWhereInput
    orderBy?: MusicaOrderByWithAggregationInput | MusicaOrderByWithAggregationInput[]
    by: MusicaScalarFieldEnum[] | MusicaScalarFieldEnum
    having?: MusicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicaCountAggregateInputType | true
    _avg?: MusicaAvgAggregateInputType
    _sum?: MusicaSumAggregateInputType
    _min?: MusicaMinAggregateInputType
    _max?: MusicaMaxAggregateInputType
  }

  export type MusicaGroupByOutputType = {
    id: number
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
    _count: MusicaCountAggregateOutputType | null
    _avg: MusicaAvgAggregateOutputType | null
    _sum: MusicaSumAggregateOutputType | null
    _min: MusicaMinAggregateOutputType | null
    _max: MusicaMaxAggregateOutputType | null
  }

  type GetMusicaGroupByPayload<T extends MusicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicaGroupByOutputType[P]>
            : GetScalarType<T[P], MusicaGroupByOutputType[P]>
        }
      >
    >


  export type MusicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    artista?: boolean
    linkYoutube?: boolean
    tablatura?: boolean
    capaAlbum?: boolean
    desempenhos?: boolean | Musica$desempenhosArgs<ExtArgs>
    scoreboards?: boolean | Musica$scoreboardsArgs<ExtArgs>
    _count?: boolean | MusicaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musica"]>

  export type MusicaSelectScalar = {
    id?: boolean
    titulo?: boolean
    artista?: boolean
    linkYoutube?: boolean
    tablatura?: boolean
    capaAlbum?: boolean
  }

  export type MusicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desempenhos?: boolean | Musica$desempenhosArgs<ExtArgs>
    scoreboards?: boolean | Musica$scoreboardsArgs<ExtArgs>
    _count?: boolean | MusicaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MusicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Musica"
    objects: {
      desempenhos: Prisma.$DesempenhoPayload<ExtArgs>[]
      scoreboards: Prisma.$ScoreboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      artista: string
      linkYoutube: string
      tablatura: string
      capaAlbum: string
    }, ExtArgs["result"]["musica"]>
    composites: {}
  }


  type MusicaGetPayload<S extends boolean | null | undefined | MusicaDefaultArgs> = $Result.GetResult<Prisma.$MusicaPayload, S>

  type MusicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MusicaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MusicaCountAggregateInputType | true
    }

  export interface MusicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Musica'], meta: { name: 'Musica' } }
    /**
     * Find zero or one Musica that matches the filter.
     * @param {MusicaFindUniqueArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MusicaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MusicaFindUniqueArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Musica that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MusicaFindUniqueOrThrowArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MusicaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MusicaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Musica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaFindFirstArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MusicaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MusicaFindFirstArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Musica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaFindFirstOrThrowArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MusicaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MusicaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Musicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Musicas
     * const musicas = await prisma.musica.findMany()
     * 
     * // Get first 10 Musicas
     * const musicas = await prisma.musica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicaWithIdOnly = await prisma.musica.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MusicaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MusicaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Musica.
     * @param {MusicaCreateArgs} args - Arguments to create a Musica.
     * @example
     * // Create one Musica
     * const Musica = await prisma.musica.create({
     *   data: {
     *     // ... data to create a Musica
     *   }
     * })
     * 
    **/
    create<T extends MusicaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MusicaCreateArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Musicas.
     *     @param {MusicaCreateManyArgs} args - Arguments to create many Musicas.
     *     @example
     *     // Create many Musicas
     *     const musica = await prisma.musica.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MusicaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MusicaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Musica.
     * @param {MusicaDeleteArgs} args - Arguments to delete one Musica.
     * @example
     * // Delete one Musica
     * const Musica = await prisma.musica.delete({
     *   where: {
     *     // ... filter to delete one Musica
     *   }
     * })
     * 
    **/
    delete<T extends MusicaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MusicaDeleteArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Musica.
     * @param {MusicaUpdateArgs} args - Arguments to update one Musica.
     * @example
     * // Update one Musica
     * const musica = await prisma.musica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MusicaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MusicaUpdateArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Musicas.
     * @param {MusicaDeleteManyArgs} args - Arguments to filter Musicas to delete.
     * @example
     * // Delete a few Musicas
     * const { count } = await prisma.musica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MusicaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MusicaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Musicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Musicas
     * const musica = await prisma.musica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MusicaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MusicaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Musica.
     * @param {MusicaUpsertArgs} args - Arguments to update or create a Musica.
     * @example
     * // Update or create a Musica
     * const musica = await prisma.musica.upsert({
     *   create: {
     *     // ... data to create a Musica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Musica we want to update
     *   }
     * })
    **/
    upsert<T extends MusicaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MusicaUpsertArgs<ExtArgs>>
    ): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Musicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaCountArgs} args - Arguments to filter Musicas to count.
     * @example
     * // Count the number of Musicas
     * const count = await prisma.musica.count({
     *   where: {
     *     // ... the filter for the Musicas we want to count
     *   }
     * })
    **/
    count<T extends MusicaCountArgs>(
      args?: Subset<T, MusicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Musica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MusicaAggregateArgs>(args: Subset<T, MusicaAggregateArgs>): Prisma.PrismaPromise<GetMusicaAggregateType<T>>

    /**
     * Group by Musica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MusicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicaGroupByArgs['orderBy'] }
        : { orderBy?: MusicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MusicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Musica model
   */
  readonly fields: MusicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Musica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    desempenhos<T extends Musica$desempenhosArgs<ExtArgs> = {}>(args?: Subset<T, Musica$desempenhosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'findMany'> | Null>;

    scoreboards<T extends Musica$scoreboardsArgs<ExtArgs> = {}>(args?: Subset<T, Musica$scoreboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Musica model
   */ 
  interface MusicaFieldRefs {
    readonly id: FieldRef<"Musica", 'Int'>
    readonly titulo: FieldRef<"Musica", 'String'>
    readonly artista: FieldRef<"Musica", 'String'>
    readonly linkYoutube: FieldRef<"Musica", 'String'>
    readonly tablatura: FieldRef<"Musica", 'String'>
    readonly capaAlbum: FieldRef<"Musica", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Musica findUnique
   */
  export type MusicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where: MusicaWhereUniqueInput
  }


  /**
   * Musica findUniqueOrThrow
   */
  export type MusicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where: MusicaWhereUniqueInput
  }


  /**
   * Musica findFirst
   */
  export type MusicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Musicas.
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Musicas.
     */
    distinct?: MusicaScalarFieldEnum | MusicaScalarFieldEnum[]
  }


  /**
   * Musica findFirstOrThrow
   */
  export type MusicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Musicas.
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Musicas.
     */
    distinct?: MusicaScalarFieldEnum | MusicaScalarFieldEnum[]
  }


  /**
   * Musica findMany
   */
  export type MusicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musicas to fetch.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Musicas.
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    distinct?: MusicaScalarFieldEnum | MusicaScalarFieldEnum[]
  }


  /**
   * Musica create
   */
  export type MusicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * The data needed to create a Musica.
     */
    data: XOR<MusicaCreateInput, MusicaUncheckedCreateInput>
  }


  /**
   * Musica createMany
   */
  export type MusicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Musicas.
     */
    data: MusicaCreateManyInput | MusicaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Musica update
   */
  export type MusicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * The data needed to update a Musica.
     */
    data: XOR<MusicaUpdateInput, MusicaUncheckedUpdateInput>
    /**
     * Choose, which Musica to update.
     */
    where: MusicaWhereUniqueInput
  }


  /**
   * Musica updateMany
   */
  export type MusicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Musicas.
     */
    data: XOR<MusicaUpdateManyMutationInput, MusicaUncheckedUpdateManyInput>
    /**
     * Filter which Musicas to update
     */
    where?: MusicaWhereInput
  }


  /**
   * Musica upsert
   */
  export type MusicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * The filter to search for the Musica to update in case it exists.
     */
    where: MusicaWhereUniqueInput
    /**
     * In case the Musica found by the `where` argument doesn't exist, create a new Musica with this data.
     */
    create: XOR<MusicaCreateInput, MusicaUncheckedCreateInput>
    /**
     * In case the Musica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicaUpdateInput, MusicaUncheckedUpdateInput>
  }


  /**
   * Musica delete
   */
  export type MusicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter which Musica to delete.
     */
    where: MusicaWhereUniqueInput
  }


  /**
   * Musica deleteMany
   */
  export type MusicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Musicas to delete
     */
    where?: MusicaWhereInput
  }


  /**
   * Musica.desempenhos
   */
  export type Musica$desempenhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    where?: DesempenhoWhereInput
    orderBy?: DesempenhoOrderByWithRelationInput | DesempenhoOrderByWithRelationInput[]
    cursor?: DesempenhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesempenhoScalarFieldEnum | DesempenhoScalarFieldEnum[]
  }


  /**
   * Musica.scoreboards
   */
  export type Musica$scoreboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    where?: ScoreboardWhereInput
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    cursor?: ScoreboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }


  /**
   * Musica without action
   */
  export type MusicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MusicaInclude<ExtArgs> | null
  }



  /**
   * Model Desempenho
   */

  export type AggregateDesempenho = {
    _count: DesempenhoCountAggregateOutputType | null
    _avg: DesempenhoAvgAggregateOutputType | null
    _sum: DesempenhoSumAggregateOutputType | null
    _min: DesempenhoMinAggregateOutputType | null
    _max: DesempenhoMaxAggregateOutputType | null
  }

  export type DesempenhoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    musicaId: number | null
    pontuacaoIndiv: number | null
  }

  export type DesempenhoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    musicaId: number | null
    pontuacaoIndiv: number | null
  }

  export type DesempenhoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    musicaId: number | null
    pontuacaoIndiv: number | null
  }

  export type DesempenhoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    musicaId: number | null
    pontuacaoIndiv: number | null
  }

  export type DesempenhoCountAggregateOutputType = {
    id: number
    usuarioId: number
    musicaId: number
    pontuacaoIndiv: number
    _all: number
  }


  export type DesempenhoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    musicaId?: true
    pontuacaoIndiv?: true
  }

  export type DesempenhoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    musicaId?: true
    pontuacaoIndiv?: true
  }

  export type DesempenhoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    musicaId?: true
    pontuacaoIndiv?: true
  }

  export type DesempenhoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    musicaId?: true
    pontuacaoIndiv?: true
  }

  export type DesempenhoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    musicaId?: true
    pontuacaoIndiv?: true
    _all?: true
  }

  export type DesempenhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desempenho to aggregate.
     */
    where?: DesempenhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desempenhos to fetch.
     */
    orderBy?: DesempenhoOrderByWithRelationInput | DesempenhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesempenhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desempenhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desempenhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Desempenhos
    **/
    _count?: true | DesempenhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesempenhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesempenhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesempenhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesempenhoMaxAggregateInputType
  }

  export type GetDesempenhoAggregateType<T extends DesempenhoAggregateArgs> = {
        [P in keyof T & keyof AggregateDesempenho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesempenho[P]>
      : GetScalarType<T[P], AggregateDesempenho[P]>
  }




  export type DesempenhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesempenhoWhereInput
    orderBy?: DesempenhoOrderByWithAggregationInput | DesempenhoOrderByWithAggregationInput[]
    by: DesempenhoScalarFieldEnum[] | DesempenhoScalarFieldEnum
    having?: DesempenhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesempenhoCountAggregateInputType | true
    _avg?: DesempenhoAvgAggregateInputType
    _sum?: DesempenhoSumAggregateInputType
    _min?: DesempenhoMinAggregateInputType
    _max?: DesempenhoMaxAggregateInputType
  }

  export type DesempenhoGroupByOutputType = {
    id: number
    usuarioId: number
    musicaId: number
    pontuacaoIndiv: number
    _count: DesempenhoCountAggregateOutputType | null
    _avg: DesempenhoAvgAggregateOutputType | null
    _sum: DesempenhoSumAggregateOutputType | null
    _min: DesempenhoMinAggregateOutputType | null
    _max: DesempenhoMaxAggregateOutputType | null
  }

  type GetDesempenhoGroupByPayload<T extends DesempenhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesempenhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesempenhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesempenhoGroupByOutputType[P]>
            : GetScalarType<T[P], DesempenhoGroupByOutputType[P]>
        }
      >
    >


  export type DesempenhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    musicaId?: boolean
    pontuacaoIndiv?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desempenho"]>

  export type DesempenhoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    musicaId?: boolean
    pontuacaoIndiv?: boolean
  }

  export type DesempenhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }


  export type $DesempenhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Desempenho"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      musica: Prisma.$MusicaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      musicaId: number
      pontuacaoIndiv: number
    }, ExtArgs["result"]["desempenho"]>
    composites: {}
  }


  type DesempenhoGetPayload<S extends boolean | null | undefined | DesempenhoDefaultArgs> = $Result.GetResult<Prisma.$DesempenhoPayload, S>

  type DesempenhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DesempenhoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DesempenhoCountAggregateInputType | true
    }

  export interface DesempenhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Desempenho'], meta: { name: 'Desempenho' } }
    /**
     * Find zero or one Desempenho that matches the filter.
     * @param {DesempenhoFindUniqueArgs} args - Arguments to find a Desempenho
     * @example
     * // Get one Desempenho
     * const desempenho = await prisma.desempenho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DesempenhoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoFindUniqueArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Desempenho that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DesempenhoFindUniqueOrThrowArgs} args - Arguments to find a Desempenho
     * @example
     * // Get one Desempenho
     * const desempenho = await prisma.desempenho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DesempenhoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Desempenho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoFindFirstArgs} args - Arguments to find a Desempenho
     * @example
     * // Get one Desempenho
     * const desempenho = await prisma.desempenho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DesempenhoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoFindFirstArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Desempenho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoFindFirstOrThrowArgs} args - Arguments to find a Desempenho
     * @example
     * // Get one Desempenho
     * const desempenho = await prisma.desempenho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DesempenhoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Desempenhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Desempenhos
     * const desempenhos = await prisma.desempenho.findMany()
     * 
     * // Get first 10 Desempenhos
     * const desempenhos = await prisma.desempenho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const desempenhoWithIdOnly = await prisma.desempenho.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DesempenhoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Desempenho.
     * @param {DesempenhoCreateArgs} args - Arguments to create a Desempenho.
     * @example
     * // Create one Desempenho
     * const Desempenho = await prisma.desempenho.create({
     *   data: {
     *     // ... data to create a Desempenho
     *   }
     * })
     * 
    **/
    create<T extends DesempenhoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoCreateArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Desempenhos.
     *     @param {DesempenhoCreateManyArgs} args - Arguments to create many Desempenhos.
     *     @example
     *     // Create many Desempenhos
     *     const desempenho = await prisma.desempenho.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DesempenhoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Desempenho.
     * @param {DesempenhoDeleteArgs} args - Arguments to delete one Desempenho.
     * @example
     * // Delete one Desempenho
     * const Desempenho = await prisma.desempenho.delete({
     *   where: {
     *     // ... filter to delete one Desempenho
     *   }
     * })
     * 
    **/
    delete<T extends DesempenhoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoDeleteArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Desempenho.
     * @param {DesempenhoUpdateArgs} args - Arguments to update one Desempenho.
     * @example
     * // Update one Desempenho
     * const desempenho = await prisma.desempenho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DesempenhoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoUpdateArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Desempenhos.
     * @param {DesempenhoDeleteManyArgs} args - Arguments to filter Desempenhos to delete.
     * @example
     * // Delete a few Desempenhos
     * const { count } = await prisma.desempenho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DesempenhoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Desempenhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Desempenhos
     * const desempenho = await prisma.desempenho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DesempenhoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Desempenho.
     * @param {DesempenhoUpsertArgs} args - Arguments to update or create a Desempenho.
     * @example
     * // Update or create a Desempenho
     * const desempenho = await prisma.desempenho.upsert({
     *   create: {
     *     // ... data to create a Desempenho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Desempenho we want to update
     *   }
     * })
    **/
    upsert<T extends DesempenhoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoUpsertArgs<ExtArgs>>
    ): Prisma__DesempenhoClient<$Result.GetResult<Prisma.$DesempenhoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Desempenhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoCountArgs} args - Arguments to filter Desempenhos to count.
     * @example
     * // Count the number of Desempenhos
     * const count = await prisma.desempenho.count({
     *   where: {
     *     // ... the filter for the Desempenhos we want to count
     *   }
     * })
    **/
    count<T extends DesempenhoCountArgs>(
      args?: Subset<T, DesempenhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesempenhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Desempenho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DesempenhoAggregateArgs>(args: Subset<T, DesempenhoAggregateArgs>): Prisma.PrismaPromise<GetDesempenhoAggregateType<T>>

    /**
     * Group by Desempenho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DesempenhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesempenhoGroupByArgs['orderBy'] }
        : { orderBy?: DesempenhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DesempenhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesempenhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Desempenho model
   */
  readonly fields: DesempenhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Desempenho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesempenhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    musica<T extends MusicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicaDefaultArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Desempenho model
   */ 
  interface DesempenhoFieldRefs {
    readonly id: FieldRef<"Desempenho", 'Int'>
    readonly usuarioId: FieldRef<"Desempenho", 'Int'>
    readonly musicaId: FieldRef<"Desempenho", 'Int'>
    readonly pontuacaoIndiv: FieldRef<"Desempenho", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Desempenho findUnique
   */
  export type DesempenhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * Filter, which Desempenho to fetch.
     */
    where: DesempenhoWhereUniqueInput
  }


  /**
   * Desempenho findUniqueOrThrow
   */
  export type DesempenhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * Filter, which Desempenho to fetch.
     */
    where: DesempenhoWhereUniqueInput
  }


  /**
   * Desempenho findFirst
   */
  export type DesempenhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * Filter, which Desempenho to fetch.
     */
    where?: DesempenhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desempenhos to fetch.
     */
    orderBy?: DesempenhoOrderByWithRelationInput | DesempenhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desempenhos.
     */
    cursor?: DesempenhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desempenhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desempenhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desempenhos.
     */
    distinct?: DesempenhoScalarFieldEnum | DesempenhoScalarFieldEnum[]
  }


  /**
   * Desempenho findFirstOrThrow
   */
  export type DesempenhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * Filter, which Desempenho to fetch.
     */
    where?: DesempenhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desempenhos to fetch.
     */
    orderBy?: DesempenhoOrderByWithRelationInput | DesempenhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desempenhos.
     */
    cursor?: DesempenhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desempenhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desempenhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desempenhos.
     */
    distinct?: DesempenhoScalarFieldEnum | DesempenhoScalarFieldEnum[]
  }


  /**
   * Desempenho findMany
   */
  export type DesempenhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * Filter, which Desempenhos to fetch.
     */
    where?: DesempenhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desempenhos to fetch.
     */
    orderBy?: DesempenhoOrderByWithRelationInput | DesempenhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Desempenhos.
     */
    cursor?: DesempenhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desempenhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desempenhos.
     */
    skip?: number
    distinct?: DesempenhoScalarFieldEnum | DesempenhoScalarFieldEnum[]
  }


  /**
   * Desempenho create
   */
  export type DesempenhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * The data needed to create a Desempenho.
     */
    data: XOR<DesempenhoCreateInput, DesempenhoUncheckedCreateInput>
  }


  /**
   * Desempenho createMany
   */
  export type DesempenhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Desempenhos.
     */
    data: DesempenhoCreateManyInput | DesempenhoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Desempenho update
   */
  export type DesempenhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * The data needed to update a Desempenho.
     */
    data: XOR<DesempenhoUpdateInput, DesempenhoUncheckedUpdateInput>
    /**
     * Choose, which Desempenho to update.
     */
    where: DesempenhoWhereUniqueInput
  }


  /**
   * Desempenho updateMany
   */
  export type DesempenhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Desempenhos.
     */
    data: XOR<DesempenhoUpdateManyMutationInput, DesempenhoUncheckedUpdateManyInput>
    /**
     * Filter which Desempenhos to update
     */
    where?: DesempenhoWhereInput
  }


  /**
   * Desempenho upsert
   */
  export type DesempenhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * The filter to search for the Desempenho to update in case it exists.
     */
    where: DesempenhoWhereUniqueInput
    /**
     * In case the Desempenho found by the `where` argument doesn't exist, create a new Desempenho with this data.
     */
    create: XOR<DesempenhoCreateInput, DesempenhoUncheckedCreateInput>
    /**
     * In case the Desempenho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesempenhoUpdateInput, DesempenhoUncheckedUpdateInput>
  }


  /**
   * Desempenho delete
   */
  export type DesempenhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
    /**
     * Filter which Desempenho to delete.
     */
    where: DesempenhoWhereUniqueInput
  }


  /**
   * Desempenho deleteMany
   */
  export type DesempenhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desempenhos to delete
     */
    where?: DesempenhoWhereInput
  }


  /**
   * Desempenho without action
   */
  export type DesempenhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desempenho
     */
    select?: DesempenhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoInclude<ExtArgs> | null
  }



  /**
   * Model Scoreboard
   */

  export type AggregateScoreboard = {
    _count: ScoreboardCountAggregateOutputType | null
    _avg: ScoreboardAvgAggregateOutputType | null
    _sum: ScoreboardSumAggregateOutputType | null
    _min: ScoreboardMinAggregateOutputType | null
    _max: ScoreboardMaxAggregateOutputType | null
  }

  export type ScoreboardAvgAggregateOutputType = {
    id: number | null
    musicaId: number | null
    mediaPontuacao: number | null
    userId: number | null
  }

  export type ScoreboardSumAggregateOutputType = {
    id: number | null
    musicaId: number | null
    mediaPontuacao: number | null
    userId: number | null
  }

  export type ScoreboardMinAggregateOutputType = {
    id: number | null
    musicaId: number | null
    mediaPontuacao: number | null
    userId: number | null
  }

  export type ScoreboardMaxAggregateOutputType = {
    id: number | null
    musicaId: number | null
    mediaPontuacao: number | null
    userId: number | null
  }

  export type ScoreboardCountAggregateOutputType = {
    id: number
    musicaId: number
    mediaPontuacao: number
    userId: number
    _all: number
  }


  export type ScoreboardAvgAggregateInputType = {
    id?: true
    musicaId?: true
    mediaPontuacao?: true
    userId?: true
  }

  export type ScoreboardSumAggregateInputType = {
    id?: true
    musicaId?: true
    mediaPontuacao?: true
    userId?: true
  }

  export type ScoreboardMinAggregateInputType = {
    id?: true
    musicaId?: true
    mediaPontuacao?: true
    userId?: true
  }

  export type ScoreboardMaxAggregateInputType = {
    id?: true
    musicaId?: true
    mediaPontuacao?: true
    userId?: true
  }

  export type ScoreboardCountAggregateInputType = {
    id?: true
    musicaId?: true
    mediaPontuacao?: true
    userId?: true
    _all?: true
  }

  export type ScoreboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scoreboard to aggregate.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scoreboards
    **/
    _count?: true | ScoreboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreboardMaxAggregateInputType
  }

  export type GetScoreboardAggregateType<T extends ScoreboardAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreboard[P]>
      : GetScalarType<T[P], AggregateScoreboard[P]>
  }




  export type ScoreboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreboardWhereInput
    orderBy?: ScoreboardOrderByWithAggregationInput | ScoreboardOrderByWithAggregationInput[]
    by: ScoreboardScalarFieldEnum[] | ScoreboardScalarFieldEnum
    having?: ScoreboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreboardCountAggregateInputType | true
    _avg?: ScoreboardAvgAggregateInputType
    _sum?: ScoreboardSumAggregateInputType
    _min?: ScoreboardMinAggregateInputType
    _max?: ScoreboardMaxAggregateInputType
  }

  export type ScoreboardGroupByOutputType = {
    id: number
    musicaId: number
    mediaPontuacao: number
    userId: number | null
    _count: ScoreboardCountAggregateOutputType | null
    _avg: ScoreboardAvgAggregateOutputType | null
    _sum: ScoreboardSumAggregateOutputType | null
    _min: ScoreboardMinAggregateOutputType | null
    _max: ScoreboardMaxAggregateOutputType | null
  }

  type GetScoreboardGroupByPayload<T extends ScoreboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreboardGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreboardGroupByOutputType[P]>
        }
      >
    >


  export type ScoreboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    musicaId?: boolean
    mediaPontuacao?: boolean
    userId?: boolean
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
    User?: boolean | Scoreboard$UserArgs<ExtArgs>
  }, ExtArgs["result"]["scoreboard"]>

  export type ScoreboardSelectScalar = {
    id?: boolean
    musicaId?: boolean
    mediaPontuacao?: boolean
    userId?: boolean
  }

  export type ScoreboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
    User?: boolean | Scoreboard$UserArgs<ExtArgs>
  }


  export type $ScoreboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scoreboard"
    objects: {
      musica: Prisma.$MusicaPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      musicaId: number
      mediaPontuacao: number
      userId: number | null
    }, ExtArgs["result"]["scoreboard"]>
    composites: {}
  }


  type ScoreboardGetPayload<S extends boolean | null | undefined | ScoreboardDefaultArgs> = $Result.GetResult<Prisma.$ScoreboardPayload, S>

  type ScoreboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScoreboardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoreboardCountAggregateInputType | true
    }

  export interface ScoreboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scoreboard'], meta: { name: 'Scoreboard' } }
    /**
     * Find zero or one Scoreboard that matches the filter.
     * @param {ScoreboardFindUniqueArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScoreboardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreboardFindUniqueArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Scoreboard that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScoreboardFindUniqueOrThrowArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScoreboardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreboardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Scoreboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardFindFirstArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScoreboardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreboardFindFirstArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Scoreboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardFindFirstOrThrowArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScoreboardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreboardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Scoreboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scoreboards
     * const scoreboards = await prisma.scoreboard.findMany()
     * 
     * // Get first 10 Scoreboards
     * const scoreboards = await prisma.scoreboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreboardWithIdOnly = await prisma.scoreboard.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScoreboardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreboardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Scoreboard.
     * @param {ScoreboardCreateArgs} args - Arguments to create a Scoreboard.
     * @example
     * // Create one Scoreboard
     * const Scoreboard = await prisma.scoreboard.create({
     *   data: {
     *     // ... data to create a Scoreboard
     *   }
     * })
     * 
    **/
    create<T extends ScoreboardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreboardCreateArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Scoreboards.
     *     @param {ScoreboardCreateManyArgs} args - Arguments to create many Scoreboards.
     *     @example
     *     // Create many Scoreboards
     *     const scoreboard = await prisma.scoreboard.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScoreboardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreboardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scoreboard.
     * @param {ScoreboardDeleteArgs} args - Arguments to delete one Scoreboard.
     * @example
     * // Delete one Scoreboard
     * const Scoreboard = await prisma.scoreboard.delete({
     *   where: {
     *     // ... filter to delete one Scoreboard
     *   }
     * })
     * 
    **/
    delete<T extends ScoreboardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreboardDeleteArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Scoreboard.
     * @param {ScoreboardUpdateArgs} args - Arguments to update one Scoreboard.
     * @example
     * // Update one Scoreboard
     * const scoreboard = await prisma.scoreboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScoreboardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreboardUpdateArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Scoreboards.
     * @param {ScoreboardDeleteManyArgs} args - Arguments to filter Scoreboards to delete.
     * @example
     * // Delete a few Scoreboards
     * const { count } = await prisma.scoreboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScoreboardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreboardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scoreboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scoreboards
     * const scoreboard = await prisma.scoreboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScoreboardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreboardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scoreboard.
     * @param {ScoreboardUpsertArgs} args - Arguments to update or create a Scoreboard.
     * @example
     * // Update or create a Scoreboard
     * const scoreboard = await prisma.scoreboard.upsert({
     *   create: {
     *     // ... data to create a Scoreboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scoreboard we want to update
     *   }
     * })
    **/
    upsert<T extends ScoreboardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreboardUpsertArgs<ExtArgs>>
    ): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Scoreboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardCountArgs} args - Arguments to filter Scoreboards to count.
     * @example
     * // Count the number of Scoreboards
     * const count = await prisma.scoreboard.count({
     *   where: {
     *     // ... the filter for the Scoreboards we want to count
     *   }
     * })
    **/
    count<T extends ScoreboardCountArgs>(
      args?: Subset<T, ScoreboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scoreboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreboardAggregateArgs>(args: Subset<T, ScoreboardAggregateArgs>): Prisma.PrismaPromise<GetScoreboardAggregateType<T>>

    /**
     * Group by Scoreboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoreboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreboardGroupByArgs['orderBy'] }
        : { orderBy?: ScoreboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scoreboard model
   */
  readonly fields: ScoreboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scoreboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    musica<T extends MusicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicaDefaultArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends Scoreboard$UserArgs<ExtArgs> = {}>(args?: Subset<T, Scoreboard$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Scoreboard model
   */ 
  interface ScoreboardFieldRefs {
    readonly id: FieldRef<"Scoreboard", 'Int'>
    readonly musicaId: FieldRef<"Scoreboard", 'Int'>
    readonly mediaPontuacao: FieldRef<"Scoreboard", 'Int'>
    readonly userId: FieldRef<"Scoreboard", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Scoreboard findUnique
   */
  export type ScoreboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where: ScoreboardWhereUniqueInput
  }


  /**
   * Scoreboard findUniqueOrThrow
   */
  export type ScoreboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where: ScoreboardWhereUniqueInput
  }


  /**
   * Scoreboard findFirst
   */
  export type ScoreboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoreboards.
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoreboards.
     */
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }


  /**
   * Scoreboard findFirstOrThrow
   */
  export type ScoreboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoreboards.
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoreboards.
     */
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }


  /**
   * Scoreboard findMany
   */
  export type ScoreboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboards to fetch.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scoreboards.
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }


  /**
   * Scoreboard create
   */
  export type ScoreboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Scoreboard.
     */
    data: XOR<ScoreboardCreateInput, ScoreboardUncheckedCreateInput>
  }


  /**
   * Scoreboard createMany
   */
  export type ScoreboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scoreboards.
     */
    data: ScoreboardCreateManyInput | ScoreboardCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Scoreboard update
   */
  export type ScoreboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Scoreboard.
     */
    data: XOR<ScoreboardUpdateInput, ScoreboardUncheckedUpdateInput>
    /**
     * Choose, which Scoreboard to update.
     */
    where: ScoreboardWhereUniqueInput
  }


  /**
   * Scoreboard updateMany
   */
  export type ScoreboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scoreboards.
     */
    data: XOR<ScoreboardUpdateManyMutationInput, ScoreboardUncheckedUpdateManyInput>
    /**
     * Filter which Scoreboards to update
     */
    where?: ScoreboardWhereInput
  }


  /**
   * Scoreboard upsert
   */
  export type ScoreboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Scoreboard to update in case it exists.
     */
    where: ScoreboardWhereUniqueInput
    /**
     * In case the Scoreboard found by the `where` argument doesn't exist, create a new Scoreboard with this data.
     */
    create: XOR<ScoreboardCreateInput, ScoreboardUncheckedCreateInput>
    /**
     * In case the Scoreboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreboardUpdateInput, ScoreboardUncheckedUpdateInput>
  }


  /**
   * Scoreboard delete
   */
  export type ScoreboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter which Scoreboard to delete.
     */
    where: ScoreboardWhereUniqueInput
  }


  /**
   * Scoreboard deleteMany
   */
  export type ScoreboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scoreboards to delete
     */
    where?: ScoreboardWhereInput
  }


  /**
   * Scoreboard.User
   */
  export type Scoreboard$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Scoreboard without action
   */
  export type ScoreboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreboardInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MusicaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    artista: 'artista',
    linkYoutube: 'linkYoutube',
    tablatura: 'tablatura',
    capaAlbum: 'capaAlbum'
  };

  export type MusicaScalarFieldEnum = (typeof MusicaScalarFieldEnum)[keyof typeof MusicaScalarFieldEnum]


  export const DesempenhoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    musicaId: 'musicaId',
    pontuacaoIndiv: 'pontuacaoIndiv'
  };

  export type DesempenhoScalarFieldEnum = (typeof DesempenhoScalarFieldEnum)[keyof typeof DesempenhoScalarFieldEnum]


  export const ScoreboardScalarFieldEnum: {
    id: 'id',
    musicaId: 'musicaId',
    mediaPontuacao: 'mediaPontuacao',
    userId: 'userId'
  };

  export type ScoreboardScalarFieldEnum = (typeof ScoreboardScalarFieldEnum)[keyof typeof ScoreboardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    desempenhos?: DesempenhoListRelationFilter
    scoreboards?: ScoreboardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    desempenhos?: DesempenhoOrderByRelationAggregateInput
    scoreboards?: ScoreboardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    desempenhos?: DesempenhoListRelationFilter
    scoreboards?: ScoreboardListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
  }

  export type MusicaWhereInput = {
    AND?: MusicaWhereInput | MusicaWhereInput[]
    OR?: MusicaWhereInput[]
    NOT?: MusicaWhereInput | MusicaWhereInput[]
    id?: IntFilter<"Musica"> | number
    titulo?: StringFilter<"Musica"> | string
    artista?: StringFilter<"Musica"> | string
    linkYoutube?: StringFilter<"Musica"> | string
    tablatura?: StringFilter<"Musica"> | string
    capaAlbum?: StringFilter<"Musica"> | string
    desempenhos?: DesempenhoListRelationFilter
    scoreboards?: ScoreboardListRelationFilter
  }

  export type MusicaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    linkYoutube?: SortOrder
    tablatura?: SortOrder
    capaAlbum?: SortOrder
    desempenhos?: DesempenhoOrderByRelationAggregateInput
    scoreboards?: ScoreboardOrderByRelationAggregateInput
  }

  export type MusicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MusicaWhereInput | MusicaWhereInput[]
    OR?: MusicaWhereInput[]
    NOT?: MusicaWhereInput | MusicaWhereInput[]
    titulo?: StringFilter<"Musica"> | string
    artista?: StringFilter<"Musica"> | string
    linkYoutube?: StringFilter<"Musica"> | string
    tablatura?: StringFilter<"Musica"> | string
    capaAlbum?: StringFilter<"Musica"> | string
    desempenhos?: DesempenhoListRelationFilter
    scoreboards?: ScoreboardListRelationFilter
  }, "id">

  export type MusicaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    linkYoutube?: SortOrder
    tablatura?: SortOrder
    capaAlbum?: SortOrder
    _count?: MusicaCountOrderByAggregateInput
    _avg?: MusicaAvgOrderByAggregateInput
    _max?: MusicaMaxOrderByAggregateInput
    _min?: MusicaMinOrderByAggregateInput
    _sum?: MusicaSumOrderByAggregateInput
  }

  export type MusicaScalarWhereWithAggregatesInput = {
    AND?: MusicaScalarWhereWithAggregatesInput | MusicaScalarWhereWithAggregatesInput[]
    OR?: MusicaScalarWhereWithAggregatesInput[]
    NOT?: MusicaScalarWhereWithAggregatesInput | MusicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Musica"> | number
    titulo?: StringWithAggregatesFilter<"Musica"> | string
    artista?: StringWithAggregatesFilter<"Musica"> | string
    linkYoutube?: StringWithAggregatesFilter<"Musica"> | string
    tablatura?: StringWithAggregatesFilter<"Musica"> | string
    capaAlbum?: StringWithAggregatesFilter<"Musica"> | string
  }

  export type DesempenhoWhereInput = {
    AND?: DesempenhoWhereInput | DesempenhoWhereInput[]
    OR?: DesempenhoWhereInput[]
    NOT?: DesempenhoWhereInput | DesempenhoWhereInput[]
    id?: IntFilter<"Desempenho"> | number
    usuarioId?: IntFilter<"Desempenho"> | number
    musicaId?: IntFilter<"Desempenho"> | number
    pontuacaoIndiv?: IntFilter<"Desempenho"> | number
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    musica?: XOR<MusicaRelationFilter, MusicaWhereInput>
  }

  export type DesempenhoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    pontuacaoIndiv?: SortOrder
    usuario?: UserOrderByWithRelationInput
    musica?: MusicaOrderByWithRelationInput
  }

  export type DesempenhoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DesempenhoWhereInput | DesempenhoWhereInput[]
    OR?: DesempenhoWhereInput[]
    NOT?: DesempenhoWhereInput | DesempenhoWhereInput[]
    usuarioId?: IntFilter<"Desempenho"> | number
    musicaId?: IntFilter<"Desempenho"> | number
    pontuacaoIndiv?: IntFilter<"Desempenho"> | number
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    musica?: XOR<MusicaRelationFilter, MusicaWhereInput>
  }, "id">

  export type DesempenhoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    pontuacaoIndiv?: SortOrder
    _count?: DesempenhoCountOrderByAggregateInput
    _avg?: DesempenhoAvgOrderByAggregateInput
    _max?: DesempenhoMaxOrderByAggregateInput
    _min?: DesempenhoMinOrderByAggregateInput
    _sum?: DesempenhoSumOrderByAggregateInput
  }

  export type DesempenhoScalarWhereWithAggregatesInput = {
    AND?: DesempenhoScalarWhereWithAggregatesInput | DesempenhoScalarWhereWithAggregatesInput[]
    OR?: DesempenhoScalarWhereWithAggregatesInput[]
    NOT?: DesempenhoScalarWhereWithAggregatesInput | DesempenhoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Desempenho"> | number
    usuarioId?: IntWithAggregatesFilter<"Desempenho"> | number
    musicaId?: IntWithAggregatesFilter<"Desempenho"> | number
    pontuacaoIndiv?: IntWithAggregatesFilter<"Desempenho"> | number
  }

  export type ScoreboardWhereInput = {
    AND?: ScoreboardWhereInput | ScoreboardWhereInput[]
    OR?: ScoreboardWhereInput[]
    NOT?: ScoreboardWhereInput | ScoreboardWhereInput[]
    id?: IntFilter<"Scoreboard"> | number
    musicaId?: IntFilter<"Scoreboard"> | number
    mediaPontuacao?: IntFilter<"Scoreboard"> | number
    userId?: IntNullableFilter<"Scoreboard"> | number | null
    musica?: XOR<MusicaRelationFilter, MusicaWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ScoreboardOrderByWithRelationInput = {
    id?: SortOrder
    musicaId?: SortOrder
    mediaPontuacao?: SortOrder
    userId?: SortOrderInput | SortOrder
    musica?: MusicaOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ScoreboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScoreboardWhereInput | ScoreboardWhereInput[]
    OR?: ScoreboardWhereInput[]
    NOT?: ScoreboardWhereInput | ScoreboardWhereInput[]
    musicaId?: IntFilter<"Scoreboard"> | number
    mediaPontuacao?: IntFilter<"Scoreboard"> | number
    userId?: IntNullableFilter<"Scoreboard"> | number | null
    musica?: XOR<MusicaRelationFilter, MusicaWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ScoreboardOrderByWithAggregationInput = {
    id?: SortOrder
    musicaId?: SortOrder
    mediaPontuacao?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ScoreboardCountOrderByAggregateInput
    _avg?: ScoreboardAvgOrderByAggregateInput
    _max?: ScoreboardMaxOrderByAggregateInput
    _min?: ScoreboardMinOrderByAggregateInput
    _sum?: ScoreboardSumOrderByAggregateInput
  }

  export type ScoreboardScalarWhereWithAggregatesInput = {
    AND?: ScoreboardScalarWhereWithAggregatesInput | ScoreboardScalarWhereWithAggregatesInput[]
    OR?: ScoreboardScalarWhereWithAggregatesInput[]
    NOT?: ScoreboardScalarWhereWithAggregatesInput | ScoreboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scoreboard"> | number
    musicaId?: IntWithAggregatesFilter<"Scoreboard"> | number
    mediaPontuacao?: IntWithAggregatesFilter<"Scoreboard"> | number
    userId?: IntNullableWithAggregatesFilter<"Scoreboard"> | number | null
  }

  export type UserCreateInput = {
    nome: string
    email: string
    senha: string
    desempenhos?: DesempenhoCreateNestedManyWithoutUsuarioInput
    scoreboards?: ScoreboardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    desempenhos?: DesempenhoUncheckedCreateNestedManyWithoutUsuarioInput
    scoreboards?: ScoreboardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUpdateManyWithoutUsuarioNestedInput
    scoreboards?: ScoreboardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUncheckedUpdateManyWithoutUsuarioNestedInput
    scoreboards?: ScoreboardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
  }

  export type UserUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type MusicaCreateInput = {
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
    desempenhos?: DesempenhoCreateNestedManyWithoutMusicaInput
    scoreboards?: ScoreboardCreateNestedManyWithoutMusicaInput
  }

  export type MusicaUncheckedCreateInput = {
    id?: number
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
    desempenhos?: DesempenhoUncheckedCreateNestedManyWithoutMusicaInput
    scoreboards?: ScoreboardUncheckedCreateNestedManyWithoutMusicaInput
  }

  export type MusicaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUpdateManyWithoutMusicaNestedInput
    scoreboards?: ScoreboardUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUncheckedUpdateManyWithoutMusicaNestedInput
    scoreboards?: ScoreboardUncheckedUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaCreateManyInput = {
    id?: number
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
  }

  export type MusicaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
  }

  export type MusicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
  }

  export type DesempenhoCreateInput = {
    pontuacaoIndiv: number
    usuario: UserCreateNestedOneWithoutDesempenhosInput
    musica: MusicaCreateNestedOneWithoutDesempenhosInput
  }

  export type DesempenhoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    musicaId: number
    pontuacaoIndiv: number
  }

  export type DesempenhoUpdateInput = {
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
    usuario?: UserUpdateOneRequiredWithoutDesempenhosNestedInput
    musica?: MusicaUpdateOneRequiredWithoutDesempenhosNestedInput
  }

  export type DesempenhoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoCreateManyInput = {
    id?: number
    usuarioId: number
    musicaId: number
    pontuacaoIndiv: number
  }

  export type DesempenhoUpdateManyMutationInput = {
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreboardCreateInput = {
    mediaPontuacao: number
    musica: MusicaCreateNestedOneWithoutScoreboardsInput
    User?: UserCreateNestedOneWithoutScoreboardsInput
  }

  export type ScoreboardUncheckedCreateInput = {
    id?: number
    musicaId: number
    mediaPontuacao: number
    userId?: number | null
  }

  export type ScoreboardUpdateInput = {
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
    musica?: MusicaUpdateOneRequiredWithoutScoreboardsNestedInput
    User?: UserUpdateOneWithoutScoreboardsNestedInput
  }

  export type ScoreboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScoreboardCreateManyInput = {
    id?: number
    musicaId: number
    mediaPontuacao: number
    userId?: number | null
  }

  export type ScoreboardUpdateManyMutationInput = {
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DesempenhoListRelationFilter = {
    every?: DesempenhoWhereInput
    some?: DesempenhoWhereInput
    none?: DesempenhoWhereInput
  }

  export type ScoreboardListRelationFilter = {
    every?: ScoreboardWhereInput
    some?: ScoreboardWhereInput
    none?: ScoreboardWhereInput
  }

  export type DesempenhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MusicaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    linkYoutube?: SortOrder
    tablatura?: SortOrder
    capaAlbum?: SortOrder
  }

  export type MusicaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MusicaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    linkYoutube?: SortOrder
    tablatura?: SortOrder
    capaAlbum?: SortOrder
  }

  export type MusicaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    linkYoutube?: SortOrder
    tablatura?: SortOrder
    capaAlbum?: SortOrder
  }

  export type MusicaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MusicaRelationFilter = {
    is?: MusicaWhereInput
    isNot?: MusicaWhereInput
  }

  export type DesempenhoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    pontuacaoIndiv?: SortOrder
  }

  export type DesempenhoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    pontuacaoIndiv?: SortOrder
  }

  export type DesempenhoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    pontuacaoIndiv?: SortOrder
  }

  export type DesempenhoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    pontuacaoIndiv?: SortOrder
  }

  export type DesempenhoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    pontuacaoIndiv?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScoreboardCountOrderByAggregateInput = {
    id?: SortOrder
    musicaId?: SortOrder
    mediaPontuacao?: SortOrder
    userId?: SortOrder
  }

  export type ScoreboardAvgOrderByAggregateInput = {
    id?: SortOrder
    musicaId?: SortOrder
    mediaPontuacao?: SortOrder
    userId?: SortOrder
  }

  export type ScoreboardMaxOrderByAggregateInput = {
    id?: SortOrder
    musicaId?: SortOrder
    mediaPontuacao?: SortOrder
    userId?: SortOrder
  }

  export type ScoreboardMinOrderByAggregateInput = {
    id?: SortOrder
    musicaId?: SortOrder
    mediaPontuacao?: SortOrder
    userId?: SortOrder
  }

  export type ScoreboardSumOrderByAggregateInput = {
    id?: SortOrder
    musicaId?: SortOrder
    mediaPontuacao?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DesempenhoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DesempenhoCreateWithoutUsuarioInput, DesempenhoUncheckedCreateWithoutUsuarioInput> | DesempenhoCreateWithoutUsuarioInput[] | DesempenhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutUsuarioInput | DesempenhoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DesempenhoCreateManyUsuarioInputEnvelope
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
  }

  export type ScoreboardCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreboardCreateWithoutUserInput, ScoreboardUncheckedCreateWithoutUserInput> | ScoreboardCreateWithoutUserInput[] | ScoreboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutUserInput | ScoreboardCreateOrConnectWithoutUserInput[]
    createMany?: ScoreboardCreateManyUserInputEnvelope
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
  }

  export type DesempenhoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DesempenhoCreateWithoutUsuarioInput, DesempenhoUncheckedCreateWithoutUsuarioInput> | DesempenhoCreateWithoutUsuarioInput[] | DesempenhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutUsuarioInput | DesempenhoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DesempenhoCreateManyUsuarioInputEnvelope
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
  }

  export type ScoreboardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreboardCreateWithoutUserInput, ScoreboardUncheckedCreateWithoutUserInput> | ScoreboardCreateWithoutUserInput[] | ScoreboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutUserInput | ScoreboardCreateOrConnectWithoutUserInput[]
    createMany?: ScoreboardCreateManyUserInputEnvelope
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DesempenhoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DesempenhoCreateWithoutUsuarioInput, DesempenhoUncheckedCreateWithoutUsuarioInput> | DesempenhoCreateWithoutUsuarioInput[] | DesempenhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutUsuarioInput | DesempenhoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DesempenhoUpsertWithWhereUniqueWithoutUsuarioInput | DesempenhoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DesempenhoCreateManyUsuarioInputEnvelope
    set?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    disconnect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    delete?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    update?: DesempenhoUpdateWithWhereUniqueWithoutUsuarioInput | DesempenhoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DesempenhoUpdateManyWithWhereWithoutUsuarioInput | DesempenhoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DesempenhoScalarWhereInput | DesempenhoScalarWhereInput[]
  }

  export type ScoreboardUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreboardCreateWithoutUserInput, ScoreboardUncheckedCreateWithoutUserInput> | ScoreboardCreateWithoutUserInput[] | ScoreboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutUserInput | ScoreboardCreateOrConnectWithoutUserInput[]
    upsert?: ScoreboardUpsertWithWhereUniqueWithoutUserInput | ScoreboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreboardCreateManyUserInputEnvelope
    set?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    disconnect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    delete?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    update?: ScoreboardUpdateWithWhereUniqueWithoutUserInput | ScoreboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreboardUpdateManyWithWhereWithoutUserInput | ScoreboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DesempenhoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DesempenhoCreateWithoutUsuarioInput, DesempenhoUncheckedCreateWithoutUsuarioInput> | DesempenhoCreateWithoutUsuarioInput[] | DesempenhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutUsuarioInput | DesempenhoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DesempenhoUpsertWithWhereUniqueWithoutUsuarioInput | DesempenhoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DesempenhoCreateManyUsuarioInputEnvelope
    set?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    disconnect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    delete?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    update?: DesempenhoUpdateWithWhereUniqueWithoutUsuarioInput | DesempenhoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DesempenhoUpdateManyWithWhereWithoutUsuarioInput | DesempenhoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DesempenhoScalarWhereInput | DesempenhoScalarWhereInput[]
  }

  export type ScoreboardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreboardCreateWithoutUserInput, ScoreboardUncheckedCreateWithoutUserInput> | ScoreboardCreateWithoutUserInput[] | ScoreboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutUserInput | ScoreboardCreateOrConnectWithoutUserInput[]
    upsert?: ScoreboardUpsertWithWhereUniqueWithoutUserInput | ScoreboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreboardCreateManyUserInputEnvelope
    set?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    disconnect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    delete?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    update?: ScoreboardUpdateWithWhereUniqueWithoutUserInput | ScoreboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreboardUpdateManyWithWhereWithoutUserInput | ScoreboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
  }

  export type DesempenhoCreateNestedManyWithoutMusicaInput = {
    create?: XOR<DesempenhoCreateWithoutMusicaInput, DesempenhoUncheckedCreateWithoutMusicaInput> | DesempenhoCreateWithoutMusicaInput[] | DesempenhoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutMusicaInput | DesempenhoCreateOrConnectWithoutMusicaInput[]
    createMany?: DesempenhoCreateManyMusicaInputEnvelope
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
  }

  export type ScoreboardCreateNestedManyWithoutMusicaInput = {
    create?: XOR<ScoreboardCreateWithoutMusicaInput, ScoreboardUncheckedCreateWithoutMusicaInput> | ScoreboardCreateWithoutMusicaInput[] | ScoreboardUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutMusicaInput | ScoreboardCreateOrConnectWithoutMusicaInput[]
    createMany?: ScoreboardCreateManyMusicaInputEnvelope
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
  }

  export type DesempenhoUncheckedCreateNestedManyWithoutMusicaInput = {
    create?: XOR<DesempenhoCreateWithoutMusicaInput, DesempenhoUncheckedCreateWithoutMusicaInput> | DesempenhoCreateWithoutMusicaInput[] | DesempenhoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutMusicaInput | DesempenhoCreateOrConnectWithoutMusicaInput[]
    createMany?: DesempenhoCreateManyMusicaInputEnvelope
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
  }

  export type ScoreboardUncheckedCreateNestedManyWithoutMusicaInput = {
    create?: XOR<ScoreboardCreateWithoutMusicaInput, ScoreboardUncheckedCreateWithoutMusicaInput> | ScoreboardCreateWithoutMusicaInput[] | ScoreboardUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutMusicaInput | ScoreboardCreateOrConnectWithoutMusicaInput[]
    createMany?: ScoreboardCreateManyMusicaInputEnvelope
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
  }

  export type DesempenhoUpdateManyWithoutMusicaNestedInput = {
    create?: XOR<DesempenhoCreateWithoutMusicaInput, DesempenhoUncheckedCreateWithoutMusicaInput> | DesempenhoCreateWithoutMusicaInput[] | DesempenhoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutMusicaInput | DesempenhoCreateOrConnectWithoutMusicaInput[]
    upsert?: DesempenhoUpsertWithWhereUniqueWithoutMusicaInput | DesempenhoUpsertWithWhereUniqueWithoutMusicaInput[]
    createMany?: DesempenhoCreateManyMusicaInputEnvelope
    set?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    disconnect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    delete?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    update?: DesempenhoUpdateWithWhereUniqueWithoutMusicaInput | DesempenhoUpdateWithWhereUniqueWithoutMusicaInput[]
    updateMany?: DesempenhoUpdateManyWithWhereWithoutMusicaInput | DesempenhoUpdateManyWithWhereWithoutMusicaInput[]
    deleteMany?: DesempenhoScalarWhereInput | DesempenhoScalarWhereInput[]
  }

  export type ScoreboardUpdateManyWithoutMusicaNestedInput = {
    create?: XOR<ScoreboardCreateWithoutMusicaInput, ScoreboardUncheckedCreateWithoutMusicaInput> | ScoreboardCreateWithoutMusicaInput[] | ScoreboardUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutMusicaInput | ScoreboardCreateOrConnectWithoutMusicaInput[]
    upsert?: ScoreboardUpsertWithWhereUniqueWithoutMusicaInput | ScoreboardUpsertWithWhereUniqueWithoutMusicaInput[]
    createMany?: ScoreboardCreateManyMusicaInputEnvelope
    set?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    disconnect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    delete?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    update?: ScoreboardUpdateWithWhereUniqueWithoutMusicaInput | ScoreboardUpdateWithWhereUniqueWithoutMusicaInput[]
    updateMany?: ScoreboardUpdateManyWithWhereWithoutMusicaInput | ScoreboardUpdateManyWithWhereWithoutMusicaInput[]
    deleteMany?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
  }

  export type DesempenhoUncheckedUpdateManyWithoutMusicaNestedInput = {
    create?: XOR<DesempenhoCreateWithoutMusicaInput, DesempenhoUncheckedCreateWithoutMusicaInput> | DesempenhoCreateWithoutMusicaInput[] | DesempenhoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: DesempenhoCreateOrConnectWithoutMusicaInput | DesempenhoCreateOrConnectWithoutMusicaInput[]
    upsert?: DesempenhoUpsertWithWhereUniqueWithoutMusicaInput | DesempenhoUpsertWithWhereUniqueWithoutMusicaInput[]
    createMany?: DesempenhoCreateManyMusicaInputEnvelope
    set?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    disconnect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    delete?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    connect?: DesempenhoWhereUniqueInput | DesempenhoWhereUniqueInput[]
    update?: DesempenhoUpdateWithWhereUniqueWithoutMusicaInput | DesempenhoUpdateWithWhereUniqueWithoutMusicaInput[]
    updateMany?: DesempenhoUpdateManyWithWhereWithoutMusicaInput | DesempenhoUpdateManyWithWhereWithoutMusicaInput[]
    deleteMany?: DesempenhoScalarWhereInput | DesempenhoScalarWhereInput[]
  }

  export type ScoreboardUncheckedUpdateManyWithoutMusicaNestedInput = {
    create?: XOR<ScoreboardCreateWithoutMusicaInput, ScoreboardUncheckedCreateWithoutMusicaInput> | ScoreboardCreateWithoutMusicaInput[] | ScoreboardUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutMusicaInput | ScoreboardCreateOrConnectWithoutMusicaInput[]
    upsert?: ScoreboardUpsertWithWhereUniqueWithoutMusicaInput | ScoreboardUpsertWithWhereUniqueWithoutMusicaInput[]
    createMany?: ScoreboardCreateManyMusicaInputEnvelope
    set?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    disconnect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    delete?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    update?: ScoreboardUpdateWithWhereUniqueWithoutMusicaInput | ScoreboardUpdateWithWhereUniqueWithoutMusicaInput[]
    updateMany?: ScoreboardUpdateManyWithWhereWithoutMusicaInput | ScoreboardUpdateManyWithWhereWithoutMusicaInput[]
    deleteMany?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDesempenhosInput = {
    create?: XOR<UserCreateWithoutDesempenhosInput, UserUncheckedCreateWithoutDesempenhosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesempenhosInput
    connect?: UserWhereUniqueInput
  }

  export type MusicaCreateNestedOneWithoutDesempenhosInput = {
    create?: XOR<MusicaCreateWithoutDesempenhosInput, MusicaUncheckedCreateWithoutDesempenhosInput>
    connectOrCreate?: MusicaCreateOrConnectWithoutDesempenhosInput
    connect?: MusicaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDesempenhosNestedInput = {
    create?: XOR<UserCreateWithoutDesempenhosInput, UserUncheckedCreateWithoutDesempenhosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesempenhosInput
    upsert?: UserUpsertWithoutDesempenhosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDesempenhosInput, UserUpdateWithoutDesempenhosInput>, UserUncheckedUpdateWithoutDesempenhosInput>
  }

  export type MusicaUpdateOneRequiredWithoutDesempenhosNestedInput = {
    create?: XOR<MusicaCreateWithoutDesempenhosInput, MusicaUncheckedCreateWithoutDesempenhosInput>
    connectOrCreate?: MusicaCreateOrConnectWithoutDesempenhosInput
    upsert?: MusicaUpsertWithoutDesempenhosInput
    connect?: MusicaWhereUniqueInput
    update?: XOR<XOR<MusicaUpdateToOneWithWhereWithoutDesempenhosInput, MusicaUpdateWithoutDesempenhosInput>, MusicaUncheckedUpdateWithoutDesempenhosInput>
  }

  export type MusicaCreateNestedOneWithoutScoreboardsInput = {
    create?: XOR<MusicaCreateWithoutScoreboardsInput, MusicaUncheckedCreateWithoutScoreboardsInput>
    connectOrCreate?: MusicaCreateOrConnectWithoutScoreboardsInput
    connect?: MusicaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutScoreboardsInput = {
    create?: XOR<UserCreateWithoutScoreboardsInput, UserUncheckedCreateWithoutScoreboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoreboardsInput
    connect?: UserWhereUniqueInput
  }

  export type MusicaUpdateOneRequiredWithoutScoreboardsNestedInput = {
    create?: XOR<MusicaCreateWithoutScoreboardsInput, MusicaUncheckedCreateWithoutScoreboardsInput>
    connectOrCreate?: MusicaCreateOrConnectWithoutScoreboardsInput
    upsert?: MusicaUpsertWithoutScoreboardsInput
    connect?: MusicaWhereUniqueInput
    update?: XOR<XOR<MusicaUpdateToOneWithWhereWithoutScoreboardsInput, MusicaUpdateWithoutScoreboardsInput>, MusicaUncheckedUpdateWithoutScoreboardsInput>
  }

  export type UserUpdateOneWithoutScoreboardsNestedInput = {
    create?: XOR<UserCreateWithoutScoreboardsInput, UserUncheckedCreateWithoutScoreboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoreboardsInput
    upsert?: UserUpsertWithoutScoreboardsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScoreboardsInput, UserUpdateWithoutScoreboardsInput>, UserUncheckedUpdateWithoutScoreboardsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DesempenhoCreateWithoutUsuarioInput = {
    pontuacaoIndiv: number
    musica: MusicaCreateNestedOneWithoutDesempenhosInput
  }

  export type DesempenhoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    musicaId: number
    pontuacaoIndiv: number
  }

  export type DesempenhoCreateOrConnectWithoutUsuarioInput = {
    where: DesempenhoWhereUniqueInput
    create: XOR<DesempenhoCreateWithoutUsuarioInput, DesempenhoUncheckedCreateWithoutUsuarioInput>
  }

  export type DesempenhoCreateManyUsuarioInputEnvelope = {
    data: DesempenhoCreateManyUsuarioInput | DesempenhoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ScoreboardCreateWithoutUserInput = {
    mediaPontuacao: number
    musica: MusicaCreateNestedOneWithoutScoreboardsInput
  }

  export type ScoreboardUncheckedCreateWithoutUserInput = {
    id?: number
    musicaId: number
    mediaPontuacao: number
  }

  export type ScoreboardCreateOrConnectWithoutUserInput = {
    where: ScoreboardWhereUniqueInput
    create: XOR<ScoreboardCreateWithoutUserInput, ScoreboardUncheckedCreateWithoutUserInput>
  }

  export type ScoreboardCreateManyUserInputEnvelope = {
    data: ScoreboardCreateManyUserInput | ScoreboardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DesempenhoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DesempenhoWhereUniqueInput
    update: XOR<DesempenhoUpdateWithoutUsuarioInput, DesempenhoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DesempenhoCreateWithoutUsuarioInput, DesempenhoUncheckedCreateWithoutUsuarioInput>
  }

  export type DesempenhoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DesempenhoWhereUniqueInput
    data: XOR<DesempenhoUpdateWithoutUsuarioInput, DesempenhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type DesempenhoUpdateManyWithWhereWithoutUsuarioInput = {
    where: DesempenhoScalarWhereInput
    data: XOR<DesempenhoUpdateManyMutationInput, DesempenhoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DesempenhoScalarWhereInput = {
    AND?: DesempenhoScalarWhereInput | DesempenhoScalarWhereInput[]
    OR?: DesempenhoScalarWhereInput[]
    NOT?: DesempenhoScalarWhereInput | DesempenhoScalarWhereInput[]
    id?: IntFilter<"Desempenho"> | number
    usuarioId?: IntFilter<"Desempenho"> | number
    musicaId?: IntFilter<"Desempenho"> | number
    pontuacaoIndiv?: IntFilter<"Desempenho"> | number
  }

  export type ScoreboardUpsertWithWhereUniqueWithoutUserInput = {
    where: ScoreboardWhereUniqueInput
    update: XOR<ScoreboardUpdateWithoutUserInput, ScoreboardUncheckedUpdateWithoutUserInput>
    create: XOR<ScoreboardCreateWithoutUserInput, ScoreboardUncheckedCreateWithoutUserInput>
  }

  export type ScoreboardUpdateWithWhereUniqueWithoutUserInput = {
    where: ScoreboardWhereUniqueInput
    data: XOR<ScoreboardUpdateWithoutUserInput, ScoreboardUncheckedUpdateWithoutUserInput>
  }

  export type ScoreboardUpdateManyWithWhereWithoutUserInput = {
    where: ScoreboardScalarWhereInput
    data: XOR<ScoreboardUpdateManyMutationInput, ScoreboardUncheckedUpdateManyWithoutUserInput>
  }

  export type ScoreboardScalarWhereInput = {
    AND?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
    OR?: ScoreboardScalarWhereInput[]
    NOT?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
    id?: IntFilter<"Scoreboard"> | number
    musicaId?: IntFilter<"Scoreboard"> | number
    mediaPontuacao?: IntFilter<"Scoreboard"> | number
    userId?: IntNullableFilter<"Scoreboard"> | number | null
  }

  export type DesempenhoCreateWithoutMusicaInput = {
    pontuacaoIndiv: number
    usuario: UserCreateNestedOneWithoutDesempenhosInput
  }

  export type DesempenhoUncheckedCreateWithoutMusicaInput = {
    id?: number
    usuarioId: number
    pontuacaoIndiv: number
  }

  export type DesempenhoCreateOrConnectWithoutMusicaInput = {
    where: DesempenhoWhereUniqueInput
    create: XOR<DesempenhoCreateWithoutMusicaInput, DesempenhoUncheckedCreateWithoutMusicaInput>
  }

  export type DesempenhoCreateManyMusicaInputEnvelope = {
    data: DesempenhoCreateManyMusicaInput | DesempenhoCreateManyMusicaInput[]
    skipDuplicates?: boolean
  }

  export type ScoreboardCreateWithoutMusicaInput = {
    mediaPontuacao: number
    User?: UserCreateNestedOneWithoutScoreboardsInput
  }

  export type ScoreboardUncheckedCreateWithoutMusicaInput = {
    id?: number
    mediaPontuacao: number
    userId?: number | null
  }

  export type ScoreboardCreateOrConnectWithoutMusicaInput = {
    where: ScoreboardWhereUniqueInput
    create: XOR<ScoreboardCreateWithoutMusicaInput, ScoreboardUncheckedCreateWithoutMusicaInput>
  }

  export type ScoreboardCreateManyMusicaInputEnvelope = {
    data: ScoreboardCreateManyMusicaInput | ScoreboardCreateManyMusicaInput[]
    skipDuplicates?: boolean
  }

  export type DesempenhoUpsertWithWhereUniqueWithoutMusicaInput = {
    where: DesempenhoWhereUniqueInput
    update: XOR<DesempenhoUpdateWithoutMusicaInput, DesempenhoUncheckedUpdateWithoutMusicaInput>
    create: XOR<DesempenhoCreateWithoutMusicaInput, DesempenhoUncheckedCreateWithoutMusicaInput>
  }

  export type DesempenhoUpdateWithWhereUniqueWithoutMusicaInput = {
    where: DesempenhoWhereUniqueInput
    data: XOR<DesempenhoUpdateWithoutMusicaInput, DesempenhoUncheckedUpdateWithoutMusicaInput>
  }

  export type DesempenhoUpdateManyWithWhereWithoutMusicaInput = {
    where: DesempenhoScalarWhereInput
    data: XOR<DesempenhoUpdateManyMutationInput, DesempenhoUncheckedUpdateManyWithoutMusicaInput>
  }

  export type ScoreboardUpsertWithWhereUniqueWithoutMusicaInput = {
    where: ScoreboardWhereUniqueInput
    update: XOR<ScoreboardUpdateWithoutMusicaInput, ScoreboardUncheckedUpdateWithoutMusicaInput>
    create: XOR<ScoreboardCreateWithoutMusicaInput, ScoreboardUncheckedCreateWithoutMusicaInput>
  }

  export type ScoreboardUpdateWithWhereUniqueWithoutMusicaInput = {
    where: ScoreboardWhereUniqueInput
    data: XOR<ScoreboardUpdateWithoutMusicaInput, ScoreboardUncheckedUpdateWithoutMusicaInput>
  }

  export type ScoreboardUpdateManyWithWhereWithoutMusicaInput = {
    where: ScoreboardScalarWhereInput
    data: XOR<ScoreboardUpdateManyMutationInput, ScoreboardUncheckedUpdateManyWithoutMusicaInput>
  }

  export type UserCreateWithoutDesempenhosInput = {
    nome: string
    email: string
    senha: string
    scoreboards?: ScoreboardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDesempenhosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    scoreboards?: ScoreboardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDesempenhosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDesempenhosInput, UserUncheckedCreateWithoutDesempenhosInput>
  }

  export type MusicaCreateWithoutDesempenhosInput = {
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
    scoreboards?: ScoreboardCreateNestedManyWithoutMusicaInput
  }

  export type MusicaUncheckedCreateWithoutDesempenhosInput = {
    id?: number
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
    scoreboards?: ScoreboardUncheckedCreateNestedManyWithoutMusicaInput
  }

  export type MusicaCreateOrConnectWithoutDesempenhosInput = {
    where: MusicaWhereUniqueInput
    create: XOR<MusicaCreateWithoutDesempenhosInput, MusicaUncheckedCreateWithoutDesempenhosInput>
  }

  export type UserUpsertWithoutDesempenhosInput = {
    update: XOR<UserUpdateWithoutDesempenhosInput, UserUncheckedUpdateWithoutDesempenhosInput>
    create: XOR<UserCreateWithoutDesempenhosInput, UserUncheckedCreateWithoutDesempenhosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDesempenhosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDesempenhosInput, UserUncheckedUpdateWithoutDesempenhosInput>
  }

  export type UserUpdateWithoutDesempenhosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    scoreboards?: ScoreboardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDesempenhosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    scoreboards?: ScoreboardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MusicaUpsertWithoutDesempenhosInput = {
    update: XOR<MusicaUpdateWithoutDesempenhosInput, MusicaUncheckedUpdateWithoutDesempenhosInput>
    create: XOR<MusicaCreateWithoutDesempenhosInput, MusicaUncheckedCreateWithoutDesempenhosInput>
    where?: MusicaWhereInput
  }

  export type MusicaUpdateToOneWithWhereWithoutDesempenhosInput = {
    where?: MusicaWhereInput
    data: XOR<MusicaUpdateWithoutDesempenhosInput, MusicaUncheckedUpdateWithoutDesempenhosInput>
  }

  export type MusicaUpdateWithoutDesempenhosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
    scoreboards?: ScoreboardUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaUncheckedUpdateWithoutDesempenhosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
    scoreboards?: ScoreboardUncheckedUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaCreateWithoutScoreboardsInput = {
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
    desempenhos?: DesempenhoCreateNestedManyWithoutMusicaInput
  }

  export type MusicaUncheckedCreateWithoutScoreboardsInput = {
    id?: number
    titulo: string
    artista: string
    linkYoutube: string
    tablatura: string
    capaAlbum: string
    desempenhos?: DesempenhoUncheckedCreateNestedManyWithoutMusicaInput
  }

  export type MusicaCreateOrConnectWithoutScoreboardsInput = {
    where: MusicaWhereUniqueInput
    create: XOR<MusicaCreateWithoutScoreboardsInput, MusicaUncheckedCreateWithoutScoreboardsInput>
  }

  export type UserCreateWithoutScoreboardsInput = {
    nome: string
    email: string
    senha: string
    desempenhos?: DesempenhoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutScoreboardsInput = {
    id?: number
    nome: string
    email: string
    senha: string
    desempenhos?: DesempenhoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutScoreboardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScoreboardsInput, UserUncheckedCreateWithoutScoreboardsInput>
  }

  export type MusicaUpsertWithoutScoreboardsInput = {
    update: XOR<MusicaUpdateWithoutScoreboardsInput, MusicaUncheckedUpdateWithoutScoreboardsInput>
    create: XOR<MusicaCreateWithoutScoreboardsInput, MusicaUncheckedCreateWithoutScoreboardsInput>
    where?: MusicaWhereInput
  }

  export type MusicaUpdateToOneWithWhereWithoutScoreboardsInput = {
    where?: MusicaWhereInput
    data: XOR<MusicaUpdateWithoutScoreboardsInput, MusicaUncheckedUpdateWithoutScoreboardsInput>
  }

  export type MusicaUpdateWithoutScoreboardsInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaUncheckedUpdateWithoutScoreboardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    linkYoutube?: StringFieldUpdateOperationsInput | string
    tablatura?: StringFieldUpdateOperationsInput | string
    capaAlbum?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUncheckedUpdateManyWithoutMusicaNestedInput
  }

  export type UserUpsertWithoutScoreboardsInput = {
    update: XOR<UserUpdateWithoutScoreboardsInput, UserUncheckedUpdateWithoutScoreboardsInput>
    create: XOR<UserCreateWithoutScoreboardsInput, UserUncheckedCreateWithoutScoreboardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScoreboardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScoreboardsInput, UserUncheckedUpdateWithoutScoreboardsInput>
  }

  export type UserUpdateWithoutScoreboardsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutScoreboardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    desempenhos?: DesempenhoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DesempenhoCreateManyUsuarioInput = {
    id?: number
    musicaId: number
    pontuacaoIndiv: number
  }

  export type ScoreboardCreateManyUserInput = {
    id?: number
    musicaId: number
    mediaPontuacao: number
  }

  export type DesempenhoUpdateWithoutUsuarioInput = {
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
    musica?: MusicaUpdateOneRequiredWithoutDesempenhosNestedInput
  }

  export type DesempenhoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreboardUpdateWithoutUserInput = {
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
    musica?: MusicaUpdateOneRequiredWithoutScoreboardsNestedInput
  }

  export type ScoreboardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreboardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoCreateManyMusicaInput = {
    id?: number
    usuarioId: number
    pontuacaoIndiv: number
  }

  export type ScoreboardCreateManyMusicaInput = {
    id?: number
    mediaPontuacao: number
    userId?: number | null
  }

  export type DesempenhoUpdateWithoutMusicaInput = {
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
    usuario?: UserUpdateOneRequiredWithoutDesempenhosNestedInput
  }

  export type DesempenhoUncheckedUpdateWithoutMusicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoUncheckedUpdateManyWithoutMusicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    pontuacaoIndiv?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreboardUpdateWithoutMusicaInput = {
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutScoreboardsNestedInput
  }

  export type ScoreboardUncheckedUpdateWithoutMusicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScoreboardUncheckedUpdateManyWithoutMusicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaPontuacao?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MusicaCountOutputTypeDefaultArgs instead
     */
    export type MusicaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MusicaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MusicaDefaultArgs instead
     */
    export type MusicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MusicaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DesempenhoDefaultArgs instead
     */
    export type DesempenhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DesempenhoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScoreboardDefaultArgs instead
     */
    export type ScoreboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoreboardDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}