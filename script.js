document.addEventListener("DOMContentLoaded", function() {
    var cvButton = document.getElementById("cvButton");
    var creatieButtonGS = document.getElementById("creatieButtonGS");
    var creatieButtonUIUX = document.getElementById("creatieButtonUIUX");
    var creatieButton3D = document.getElementById("creatieButton3D");
    var creatieButtonAnimation = document.getElementById("creatieButtonAnimation");
    var creatieButtonWeb1 = document.getElementById("creatieButtonWeb1");
    var creatieButtonWeb2 = document.getElementById("creatieButtonWeb2");


    cvButton.addEventListener("click", function() {
        var url1 = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:ba3b952c-649a-3bec-b204-ab2f1be8ab99";
        window.open(url1);
    });

    creatieButtonGS.addEventListener("click", function() {
        var url2 = "Design_projecten.html";
        window.location.href = url2;
    });

    creatieButtonUIUX.addEventListener("click", function() {
        var url3 = "wpl2.html";
        window.location.href = url3;
    });

    creatieButton3D.addEventListener("click", function() {
        var url4 = "3D.html";
        window.location.href = url4;
    });

    creatieButtonAnimation.addEventListener("click", function() {
        var url5 = "Animation.html";
        window.location.href = url5;
    });

    creatieButtonWeb1.addEventListener("click", function() {
        var url6 = "Code_projecten.html";
        window.location.href = url6;
    });

    creatieButtonWeb2.addEventListener("click", function() {
        var url7 = "Code_projecten.html";
        window.location.href = url7;
    });

});
