import { Console, Effect } from "effect";
import { resolve } from "path";

const path = resolve(__dirname, "../resources/readable.json");

const fileExists = (path: string) =>
  Effect.promise(() => {
    const file = Bun.file(path);
    return file.exists();
  });

// Solution using Effect.gen
const program = Effect.gen(function* () {
  const value = yield* fileExists(path);
  yield* Console.log(`File should exist: ${value}`);
});

Effect.runPromise(program);

// // Solution using pipe
// const programPipe = fileExists(path).pipe(
//   Effect.tap((value) => Console.log(`File should exist: ${value}`)),
// );

// Effect.runPromise(programPipe);
