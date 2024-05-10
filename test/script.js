

var textArray = ["fatemehpahlevan", "aylarirani", "reyhanehranjbar"];
var counter = 0;
function changeText() {
    document.getElementById("para").innerHTML = textArray[counter];
    counter++;
    if (counter >= textArray.length) {
        counter = 0;
    }
}
