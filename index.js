// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateArrow();

})
 /*  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  ) */
function updateArrow () {
    document.getElementById("text").innerHTML = "This is really cool!";

}
