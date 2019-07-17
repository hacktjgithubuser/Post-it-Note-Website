
imgID = 1;

function bigImg(x) {

    x.style.height = "295px";

    x.style.width = "669px";

};

function normalImg(x) {

    x.style.height = "59px";

    x.style.width = "133.8px";

};

function showHideSection(section){

  var x = document.getElementById(section);

  if (x.style.display === "none") {

    x.style.display = "block";

    document.getElementById("show/hide").innerHTML = "Hide History"

  } else {

    x.style.display = "none";

    document.getElementById("show/hide").innerHTML = "Show History"

  }

}
