import { Console, Effect } from "effect";
import { appendFile } from "node:fs";
import { resolve } from "path";

const appendToFile = (path: string, content: string) =>
  Effect.async<void, NodeJS.ErrnoException>((resume) => {
    appendFile(path, content, (err) => {
      if (err) {
        Console.error("Failed to append data:", err);
        resume(Effect.fail(err));
      } else {
        Console.log("Data appended successfully");
        resume(Effect.succeed(Effect.void));
      }
    });
  });

const path = resolve(__dirname, "../resources/messages.txt");
const program = appendToFile(path, "Hello from 00003 solution!\n");

Effect.runPromise(program);
