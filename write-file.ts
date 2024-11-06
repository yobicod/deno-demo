const content = "Hello deno 2.0";
await Deno.writeTextFile("./output.txt", content);
console.log("File written successfully!");
