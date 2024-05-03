import { resolve } from "path";

const path = resolve(__dirname, "../resources/readable.json");

const fileExists = async (path: string) => {
  const file = Bun.file(path);
  return await file.exists();
};

const shouldExist = await fileExists(path);

console.log("File should exist:", shouldExist);
