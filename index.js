function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}


function sayHiToHeadphonedRoommate(string) {
    let upperCase = string.toUpperCase ()
    let lowerCase = string.toLowerCase ()
    let haveDinner = "Let's have dinner together!"
    if (string = upperCase) {
        return "YES INDEED!"
    }  else if (string = lowerCase) {
        return "I can't hear you!"
    }  else if (string = haveDinner) {
        return "I would love to!"
    }   
  
  sayHiToHeadphonedRoommate(upperCase); // "YES INDEED!"
  sayHiToHeadphonedRoommate(lowerCase); // "I can't hear you!"
  sayHiToHeadphonedRoommate(haveDinner); // "I would love to!"
}


