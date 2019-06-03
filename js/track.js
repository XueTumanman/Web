function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

function getvalue() {

    var color = document.getElementById("color").value;
    if(color==""){
        color = "#FFFFFF";
    }
    var startrack = document.getElementById("startrack").value;

    switch (startrack) {
        case "up":
            addtrack(color, startrack);
            break;
        case "rotate":
            addtrack(color, startrack);
            break;

        default:
            break;
    }
}

function addtrack(color, startrack) {
    var shadow = "";


    for (index = 0; index < 1000; index++) {
        shadow = shadow + randomFrom(-1000, 1000) + "px" + " " + randomFrom(-1000, 1000) + "px" + " " + color +
            ",";
    }
    shadow = shadow.substr(0, shadow.length - 1);

    // 向html，添加css类
    document.getElementById("css_track").style.position = "absolute";
    document.getElementById("css_track").style.left = "50%";
    document.getElementById("css_track").style.top = "50%";
    document.getElementById("css_track").style.width = "2px";
    document.getElementById("css_track").style.height = "2px";
    document.getElementById("css_track").style.background = "transparent";
    document.getElementById("css_track").style.boxShadow = shadow;
    document.getElementById("css_track").style.animation = startrack + " 50s linear infinite";

}