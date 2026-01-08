// Current temperature 
const temperature = 30;

// Task 1: Simple if/else
if(temperature < 15) {
    console.log("It's cold, wear a coat.")
} else {
    console.log("It's not too cold, don't wear a coat.")
}

// Task 2: Using if/else if/else
if (temperature < 15) {
  console.log("It's cold, wear a coat.");
} else if(temperature < 25) {
    console.log("It's not that cold, wear a sweater.");
} else if(temperature < 30) {
    console.log("It is warm, just wear a T-shirt.")
} else {
    console.log("It's hot, use air conditionar!")
}

// Task 3: Using Switch
switch(temperature) {
    case 10:
        console.log("It's cold, wear a coat.");
        break;
    case 20:
        console.log("It's not that cold, wear a sweater.");
        break;
    case 30:
         console.log('It is warm, just wear a T-shirt.');
         break;
    default:
        console.log("Enter 10, 20 or 30 as temperature!")
}