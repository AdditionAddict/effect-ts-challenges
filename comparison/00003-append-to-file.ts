import { appendFile } from "node:fs";
import { resolve } from "path";

const appendToFile = async (path: string, content: string) => {
  appendFile(path, content, (err) => {
    if (err) {
      console.error("Failed to append data:", err);
    } else {
      console.log("Data appended successfully");
    }
  });
};

const path = resolve(__dirname, "../resources/messages.txt");
appendToFile(path, "Hello from 00003 comparison!\n");
