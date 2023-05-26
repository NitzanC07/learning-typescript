"use strict";
// הגדת משתנה עם סיווג של פונקציה. כלומר המשתנה הזה יכול להכיל רק ערך מסוג פונקציה.
let greet;
// אי אפשר להציב במשתנה הזה כל ערך מסוג שונה, כמו לדוגמא מחרוזת
// greet = "hello"
// אבל כמובן, אפשר להציב בתוכו פונקציה, כמו בדוגמא הבאה
greet = () => {
    console.log("Hello, world");
};
/** אפשר גם לקבוע את סוג המשתנים שהפונקציה מקבלת
 * לדוגמא, הפונקציה הבאה מקבלת שני משתנים בדיוק, לא יותר ולא פחות, שהסוג שלהם הוא מספר.
 */
const add = (a, b) => {
    console.log(a + b);
};
// לכן עם קריאה לפונקציה הזאת, אנחנו נראה בקונסול את הסכום של שני המספרים.
add(3, 2);
// אם נעביר לפונקציה פחות משני משתנים נקבל שגיאה.
// add(3);
// אם נעביר לפונקציה יותר משני משתנים גם נקבל שגיאה.
// add(3, 2, 8);
// אם אנחנו מעוניינים להוסיף משתנה אחד שיהיה אופציונלי אנחנו יכולים לעשות זאת עם סימן שאלה.
const multiplication = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
multiplication(2, 5);
// במצב הזה אם הפונקציה לא תקבל משתנה שלישי, היא פחות תחזיר ערך לא מוגדר.
/**
 * אפשרות אחרת היא להגדיר ערך ברירת מחדל למשתנה.
 * כלומר אם הפונקציה לא מקבלת ערך שלישי, אז היא תשתמש בבררירת המחדל.
 * נגדיר פונקציה שלא מחזירה ערך באמצעות הגדרה אחרי הסוגריים של הקלט ולפני פתיחת גוף הפונקציה.
 *
 * @param a
 * @param b
 * @param c
 */
const multiplication2 = (a, b, c = 9) => {
    console.log(a + b);
    console.log(c);
};
multiplication2(2, 5);
/** גם עבור החזרת ערך של הפונקציה אפשר להגדיר את סוג המשתנה */
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
// ועכשיו אנחנו יכולים להשתמש בסיווגים שיצרנו בפונקציות שונות.
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}.`);
};
const greeting = (user) => {
    console.log(`Hello, ${user.name}. [uid: ${user.uid}]`);
};
greeting({ name: "Nitzan", uid: "123" });
const greetingResponse = (user) => {
    console.log(`${user.name} says hello. [uid: ${user.uid}]`);
};
greetingResponse({ uid: 456, name: "Nitzan" });