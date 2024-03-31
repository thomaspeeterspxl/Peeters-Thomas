document.addEventListener("DOMContentLoaded", function() {
    var GithubButton1 = document.getElementById("GithubButton1");
    var GithubButton2 = document.getElementById("GithubButton2");

    GithubButton1.addEventListener("click", function() {
        var url13 = "https://github.com/thomaspeeterspxl/Thomas-Peeters.git";
        window.open(url13);
    });

    GithubButton2.addEventListener("click", function() {
        var url14 = "https://github.com/thomaspeeterspxl/werkpakket2.git";
        window.open(url14);
    });
});