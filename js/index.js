let a = 3;
let b = 5;
let c;

let output = 'let a= 3;\n';
output += 'let b= 5;\n';
output += 'let c;\n';
output += '----------\n';
output += ('a + b = ' + (a + b) + "\n");
output += ('a - b = ' + (a - b) + "\n");
output += ('a * b = ' + (a * b) + "\n");
output += ('a / b = ' + (a / b) + "\n");
output += ('a % b = ' + (a % b) + "\n");
output += ('a += b = ' + (a += b) + "\n");
output += ('a -= b = ' + (a -= b) + "\n");
output += ('a *= b = ' + (a *= b) + "\n");
output += ('a /= b = ' + (a /= b) + "\n");
output += ('a %= b = ' + (a %= b) + "\n");
output += ('a == b = ' + (a == b) + "\n"); 
output += ('a != b = ' + (a != b) + "\n");
output += ('a > b = ' + (a > b) + "\n");
output += ('a < b = ' + (a < b) + "\n");
output += ('!a && !c = ' + (!a && !c) + "\n");
output += ('!a || !c  = ' + (!a || !c) + "\n");

alert(output);

let first_name = "Tefe";
let last_name = "Ogbekene";
let email ="tefeogbekene@gmail.com";

let sentence;

sentence = 'My name is' + ' ' + first_name + ' ' + last_name + '.' + ' ' + 'You can contact me at' + ' ' + email + ' ';

console.log(sentence);
