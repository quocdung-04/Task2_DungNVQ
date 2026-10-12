var signOut = document.getElementById("signOut");

signOut.addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
});

var courseButtons = document.getElementsByClassName("btn-course");
var courseName = document.getElementById("courseName");
var courseDesc = document.getElementById("courseDesc");

for (var i = 0; i < courseButtons.length; i++) {
    courseButtons[i].addEventListener("click", function () {
        courseName.textContent = this.getAttribute("data-title");
        courseDesc.textContent = this.getAttribute("data-desc");
    });
}