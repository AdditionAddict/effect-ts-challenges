import { Console, Effect } from "effect";

const program = Console.log("Hello from effect!");

Effect.runSync(program);
