import { Schema as S } from "@effect/schema";
import { Effect } from "effect";

// Note the requirements here: https://github.com/Effect-TS/effect/tree/main/packages/schema#requirements

const envVariables = S.Struct({
  SOMETHING_COOL: S.String,
});
type envVariables = S.Schema.Type<typeof envVariables>;

const program = Effect.sync(() =>
  S.decodeSync(envVariables)(process.env as any),
);
// will throw if the environment variable is not set
Effect.runSync(program);

// // uncomment this and comment out other declarations - only have 1 declaration at a time
// declare global {
//   namespace NodeJS {
//     interface ProcessEnv extends envVariables {}
//   }
// }

const answer = process.env.SOMETHING_COOL;
//    ^?
console.log("SOMETHING_COOL:", answer, typeof answer);
