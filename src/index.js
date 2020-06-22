import { compose, pipe } from "lodash/fp"; //npm i lodash
import { Map } from "immutable"; // npm i immutable
import { produce } from "immer"; // npm i immer
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

/* immutable */
let book = Map({ title: "this is the title" }); // warp the object with Map which comes from immutable library.
book = book.set("title", "this is the updated title"); // update or add new property to an object in immutable library.

console.log(book.get("title")); // get a property using immutable library.

/* immer */
let book2 = { title: "this is book2 title" }; // define object book2
// add new property to book2 using immer
function publish(book2) {
  return produce(book2, (draftBook) => {
    draftBook.newProperty = "this is the value of the new property";
  });
}

let updatedObj = publish(book2); //assign publish function to a variable name

console.log("book2: ", book2, "updates book2: ", updatedObj); // logging both results
