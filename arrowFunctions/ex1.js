// Here we have a handful of ES5 functions.
// Spice them up by converting them to arrow functions!


let introduction = (name, otherName) => {
    let introduction = name + ", let me introduce you to " + otherName;
    return introduction; 
}

// This one only has one parameter! 
let boringFunction = topic => {
    let complain = topic + " is so boooooring!!!";
    return complain;
}

// This one has a single return statement!
let shout = () => {
    return "AAAHHHH!!"
}