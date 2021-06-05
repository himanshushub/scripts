// commit check
var fs = require("fs");
var _ = require("lodash");
// let readFile = async () => {
let contents = fs.readFileSync(`./a_example.txt`, "ASCII");
// let contents = fs.readFileSync(`./b_read_on.txt`, "ASCII");
// let contents = fs.readFileSync(`./c_incunabula.txt`, "ASCII");
// let contents = fs.readFileSync(`./d_tough_choices.txt`, "ASCII");
// let contents = fs.readFileSync(`./e_so_many_books.txt`, "ASCII");
// let contents = fs.readFileSync(`./f_libraries_of_the_world.txt`, "ASCII");

// console.log("txt content", contents);
let lines = contents.split("\n");
// console.log("lines", lines);

let arrayContent = lines.map((item) => {
  let elem = item.split(" ").map((x) => +x);
  return elem;
});
console.log("arrayContent", arrayContent);
