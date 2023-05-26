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

const input = document.querySelector(".input-fname") 
console.log("Input", input);