/* Credit to Matt Pocock for this [example](https://twitter.com/mattpocockuk/status/1615110808219918352) */
import { z } from "zod";

const envVariables = z.object({
  SOMETHING_COOL: z.string(),
});

// this will helpfully throw an error if the environment variable is not set
envVariables.parse(process.env);

// // uncomment this and comment out other declarations - only have 1 declaration at a time
// declare global {
//   namespace NodeJS {
//     interface ProcessEnv extends Readonly<z.infer<typeof envVariables>> {}
//   }
// }

const answer = process.env.SOMETHING_COOL;
//    ^?
console.log("SOMETHING_COOL:", answer, typeof answer);
