
function ageindays() {
    var birthage = prompt("Enter your born year");
    var ageindayss = (2020-birthage) * 365;
    //console.log(ageindayss);
    document.getElementById("days").innerHTML = "You are " + ageindayss + " days old";
    
}

function reset() {
    document.getElementById("days").remove();

}