import { Effect } from "effect";
import { resolve } from "path";

// Implement appendToFile by replacing the Effect.void with your solution
// Use `appendFile` from node:fs rather than `appendFileSync`
//
// See `comparison/00003-append-to-file.ts` for vanilla JS version
const appendToFile = (path: string, content: string) => Effect.void;

const path = resolve(__dirname, "../resources/messages.txt");
const program = appendToFile(path, "Hello from 00003 question!\n");

Effect.runPromise(program);
