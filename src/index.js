import { compose, pipe } from "lodash/fp"; //npm i lodash
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
