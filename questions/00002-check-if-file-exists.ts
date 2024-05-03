import { Effect } from "effect";
import { resolve } from "path";

const path = resolve(__dirname, "../resources/readable.json");

// Implement fileExists that returns an Effect<boolean> by replacing the Effect.void with your solution
const fileExists = (path: string) => Effect.void;

// Use fileExists to check if the file exists and log the result
const program = Effect.void;

Effect.runPromise(program);
