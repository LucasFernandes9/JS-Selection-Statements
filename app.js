// exercise 1: guessing game

let magicNumber = 30;
let min = 1;
let max = 100;

let guessNumber = prompt (`Guess a number between ${min} and ${max}?`);

//converting guess to a number
guessNumber = parseInt(guessNumber);

//is it a number or not?

if (isNaN (guessNumber)) {
  console.log (`you didnt give me a valid number between ${min} and ${max}`)
} else {
  if (guessNumber == magicNumber) {
    console.log ("Congrats! You guessed the magic number!");
  } else if (guessNumber>magicNumber) {
    console.log ("Guess was too high, please try again.");
  } else if (guessNumber<magicNumber) {
    console.log ("Guess was too low, please try again.");
  }
  }

  // exercise 2: birth season

  let birthMonth = prompt ("What is your birth month?");

  switch (birthMonth.toLowerCase()) {
    case "december":
    case "january":
    case "february":
      console.log ("winter!");
      break;
    case "march":
    case "april":
    case "may":
      console.log ("Spring!");
      break;
    case "may":
    case "june":
    case "july":
      console.log ("Summer!");
      break;
    case "august":
    case "september":
    case "october":
      console.log ("Fall!");
      break;
      default:
        console.log ("I dont recognize that month.")
  }

  //exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    Type = "Sweat Shirt";
    break;
 default: "Other"
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
 default: "White"
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
 default: "One size fits all"
}

console.log(`Product: ${size} ${color} ${type}`);