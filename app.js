//Changing Cases:

// 1.
var input_from_users = prompt("Enter a string will convert in CAPS");
console.log(input_from_users.toUpperCase());

// 2.
var input_from_users = prompt("Enter a string will convert in Lower");
console.log(input_from_users.toLowerCase());



// Strings: measuring length and extracting parts
// 1.
var input_from_user = prompt("Enter a string to extract it length");
console.log(input_from_user.length);

// 2.
var str = "Ali Muhammad";
if (str.charAt(str.length - 1) != " ") {
    console.log(str.charAt(str.length - 1));
}



// Strings: finding segments

// 1.
var word = "Pakistani";
console.log(word.indexOf('n'));

// 2.
var inp = prompt("Enter your username");
var message;
var break_space = [];
var arr = [];
for (var i = 0; i < inp.length; i++) {
    break_space[i] = inp.split("&nbsp");
    arr[i] = inp.charCodeAt(i);
    if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
        message = ("Correct User Name");
    }
    while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
        alert("please enter a valid Username");
        inp = prompt("Enter your Username: ");
        for (var i = 0; i < inp.length; i++) {
            break_space[i] = inp.split("&nbsp");
            arr[i] = inp.charCodeAt(i);
            if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
                break;
            }
        }
    }

}
console.log(message);


// 3.
var string = "The quick brown fox jumps over the lazydog";
var counter = 0;

if (string.indexOf("the")) {
    counter++;
}

console.log("The No. of Occurence of the: ", counter);



//Strings: finding a character at a location

// 1.
var word = "Pakistani";
console.log(word.charAt(3));




// Strings: replacing characters

// 1.
var city = "Hyderabad";
console.log(city.replace("Hyder", "Islam"));


// 2.
var message = "Ali and Sami are best friends. They play cricket and football together";
console.log(message.replace("and", "&"));


// Rounding numbers

// 1.
var number = +prompt("Enter a Number");
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));


// 2.
var number = parseFloat(prompt("Enter a Number"));
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));


// Generating random numbers

// 1.
var number_for_dice = Math.random();
var highet_digit_dice = (number_for_dice * 6) + 1;
var no_of_possibility = Math.floor(highet_digit_dice);
console.log(no_of_possibility);


// 2.
var secret_no = Math.random();
var highet_digit_coin = (number_for_coin * 2) + 1;
var no_of_possibility = Math.floor(highet_digit_coin);
if (no_of_possibility === 1) {
    console.log("Tails");
} else if (no_of_possibility === 2) {
    console.log("Head");
} else {
    console.log("Try Again!");
}


// 3.
var inp = +prompt("Enter a number bwteen 1 to 10");
var for_secret_no = [];
for (var i = 0; i <= 10; i++) {
    var secret_no = Math.random();
    var highet_digit_secret_no = (secret_no * 10) + 1;
    for_secret_no[i] = Math.floor(highet_digit_secret_no);
    console.log(for_secret_no[i]);
}
for (var j = 0; j <= 10; j++) {
    if (inp === for_secret_no[j]) {
        console.log("Congratulate to you!!");
    } else {
        continue
    }
}



// Converting strings to integers and decimals
// 1.
var for_int_weights = parseInt(prompt("Enter your Weights"));
var for_decimal_weights = parseFloat(prompt("Enter your Weights"));
console.log(for_int_weights);
console.log(for_int_weights + "kgs");
console.log(for_decimal_weights + "kgs");
console.log(for_decimal_weights + "Kilograms");





// Converting strings to numbers, numbers to strings
// 1.
var str = "472";
console.log(Number(str) + " " + typeof(str));




// 2.
var num = 35.36;
var str = num.toString().replace(".", "");
console.log(str);





//Controlling the length of decimals
// 1.
var percentage = 30 / 45 * 100
console.log(percentage.toFixed(2))