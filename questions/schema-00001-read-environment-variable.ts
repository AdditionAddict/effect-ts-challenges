import { Schema as S } from "@effect/schema";
import { Effect } from "effect";

// Note the requirements here: https://github.com/Effect-TS/effect/tree/main/packages/schema#requirements

// Implement validation and type inference for environment variable of the form:
//
// .env
// SOMETHING_COOL=42
const envVariables = {};
type envVariables = any;

// Implement envVariables that returns an Effect<envVariables> by replacing the Effect.void with your solution
const program = Effect.void;

// will throw if the environment variable is not set
Effect.runSync(program);

// // uncomment this and comment out other declarations - only have 1 declaration at a time
// declare global {
//   namespace NodeJS {
//     interface ProcessEnv extends envVariables {}
//   }
// }

// we want type string, not string | undefined
const answer = process.env.SOMETHING_COOL;
//    ^?
console.log("SOMETHING_COOL:", answer, typeof answer);
