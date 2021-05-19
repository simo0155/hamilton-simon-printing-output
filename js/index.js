/*
Task 1

Declare three variables, a and b and c.
If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):
*/

let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

let alerted_value = 'let a = 3;\nlet b = 5;\nlet c;\n---------';

alerted_value = alerted_value +
    '\na + b = ' + (a + b) +
    '\na - b = ' + (a - b) +
    '\na * b = ' + (a * b) +
    '\na / b = ' + (a / b) +
    '\na % b = ' + (a % b) +
    '\na += b = ' + (a += b) +
    '\na -= b = ' + (a -= b) +
    '\na *= b = ' + (a *= b) +
    '\na /= b = ' + (a /= b) +
    '\na %= b = ' + (a %= b) +
    '\na == b = ' + (a == b) +
    '\na != b = ' + (a != b) +
    '\na > b = ' + (a > b) +
    '\na < b = ' + (a < b) +
    '\n!a && !c = ' + (!a && !c) +
    '\n!a || !c = ' + (!a || !c);

alert(alerted_value);

/* Task 2

Declare the variable first_name and assign it with the value of your first name;
Declare the variable last_name and assign it with the value of your last name;
Declare the variable email and assign it with the value of your email;
Declare the variable output;
Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
Assign output with gotten expression;
Print the output in JavaScript console.
*/

let first_name = 'Hamilton';
let last_name = 'Simon';
let email = 'simo0155@algonquinlive.com'

let output = 'My name is ' + first_name + " " + last_name + "." + " " + 'You can contact me at ' + email + ".";

alert(output);
console.log(output);