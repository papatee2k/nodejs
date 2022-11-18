const fs = require("fs"); /* fs- files system*/

//SYNCHRONOUS: can also be known as BLOCKING CODE///////
// const textIn = fs.readFileSync(
//   "./txt/input.txt",
//   "utf-8"
// ); /*sync - synchronous,readfilesync takes two argument(path to the file(1) and(2) the character encoded) */
// console.log(textIn);

// const textOut = `this is what we know about the avocado: ${textIn}.\ncreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("file written");

//ASYNCHRONOUS/ NON-BLOCKING CODE: accept a callback function  ///////////////////////////

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
        console.log("your file has been written😊");
      });
    });
  });
});
console.log("check ou the file!");
