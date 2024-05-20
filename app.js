// --------city-------
var City = prompt("Enter your city name :");
if (City === "karachi") {
    alert("Welcome to city of lights");
}
else if (City === "islamabad") {
    alert("Welcome to city of Islam");
}
else if (City === "lahour") {
    alert("Welcome to city of Gardens");
}
else if (City === "Peshawar") {
    alert("Welcome to the city of flowers");
}
else if (City === "multan") {
    alert("Welcome to city of Pirs and Shrines");
}
else if (City === "quetta") {
    alert("Welcome to city of Fruit Garden ");
}
else if (City === "Faisalabad") {
    alert("Welcome to city of Faisal");
}

// --------gender-------
var gender = prompt("Enter your gender :");
if (gender === "male") {
    alert("Good Morning Sir.");
}
else if (gender === "female") {
    alert("Good Morning Ma’am.");
}

// --------signalcolour-------
var signalColour = prompt("Enter your color of road traffic signal:");
if (signalColour === "red") {
    alert("Must Stop");
}
else if (signalColour === "yellow") {
    alert("Ready to move");
}
else if (signalColour === "green") {
    alert("Move now");
}

// --------fuel-------
var fuel = parseFloat(prompt("Enter remaining fuel in your car (in litres):"));
if (fuel < 25) {
    alert("Please refill the fuel in your car.");
}
else if (fuel < 50) {
    alert(" You have half a tank of fuel remaining.");
}
else if (fuel < 75) {
    alert("Your tank is still mostly full.");
}
else if (fuel < 100) {
    alert(" Your tank is full.");
}

// -----------whether alert message---------
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}


// ----------marks sheet----------
var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));

var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + obtainedMarks + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade + "\nRemarks: " + remarks);


// -------------guess game-------------
var secretNumber = 4;
var userGuess = parseFloat(prompt("Guess the secret number (1-10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}


// --------- Divisibility number-------
var number = parseFloat(prompt("Enter a number to check is divisible by 3 or not:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}

//---------Even or Odd--------
var number = parseFloat(prompt("Enter a number to check is even or odd:"));
if (number % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}


//------------- Temperature Message-----------------
var temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}


// ------------Simple Calculator---------
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation");
}

alert("The result is: " + result);