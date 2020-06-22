import { compose, pipe } from "lodash/fp"; //npm i lodash
import { Map } from "immutable";
let input = "       text      ";

// reuseable function
const trim = (str) => str.trim();
const lower = (str) => str.toLowerCase();

//using compose to organize your code instead of wrapping functions
const transform = compose(lower, trim); //applies from right to left
const result = transform(input);
console.log(result);

//using pipe to organize your code instead of wrapping functions
const transform2 = pipe(trim, lower); //applies from left to right
const result2 = transform(input);
console.log(result2);

let book = Map({ title: "this is the title" }); // warp the object with Map which comes from immutable library.
book = book.set("title", "this is the updated title"); // update or add new property to an object in immutable library.

console.log(book.get("title")); // get a property using immutable library.
