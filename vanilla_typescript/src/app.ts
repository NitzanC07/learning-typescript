/** Lesson: DOM & Type casting
 * 
 */

// כאשר אני בטוח שהרכיב שאני רוצה לבחור קיים בקוד המקור אני יכול להוסיף סימן קריאה בסוף השורה.
const element1 = document.querySelector("a")!;
console.log(element1.href);

// במקרה בו אני לא בטוח שהרכיב קיים מומלץ להוסיף תנאי
const element2 = document.querySelector("a");
console.log(element2?.href);


const form = document.querySelector(".sample-form") as HTMLFormElement;
console.log(form.children);

const fName = document.querySelector("#input-fname") as HTMLInputElement;
console.log("Input", fName);

const lName = document.querySelector("#input-lname") as HTMLInputElement;
console.log("Input", lName);

const myAge = document.querySelector("#input-age") as HTMLInputElement;
console.log("Input", myAge);

const btn = document.querySelector("#button-submit") as HTMLButtonElement;
console.log("Button", btn);

const output = document.querySelector(".form-result") as HTMLDivElement;
console.log("Output", output);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    output.textContent = `Hello ${fName.value} ${lName.value}, you're ${myAge.valueAsNumber} years old.`;
})
