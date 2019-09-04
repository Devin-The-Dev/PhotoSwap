function newPhoto() {
    document.getElementsByClassName("photo")[0].src = "" + photoGenerator() + ".jpg"
}

// function newPhoto() {
//     document.getElementsByClassName("photo").src = "photo2.jpg"
// }

// Create an array with just the name of the photos file
var photoArray = ["photo", "photo2"];
// Then create random number generator to randomly pick photo
function photoGenerator() {
    photoArray;
    var randomPhoto = Math.floor(Math.random() * photoArray.length)
    return photoArray[randomPhoto];
}
// Adjust newPhoto() accordingly