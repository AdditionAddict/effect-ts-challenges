import { Effect } from "effect";

/** Replace Effect.void to log out "Hello from effect!" */
const program = Effect.void;

Effect.runSync(program);
