function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function clickMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
      x.className = "topnav";
    }
  }