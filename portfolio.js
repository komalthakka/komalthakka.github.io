var modal = document.getElementById("myModal");
    var modal1 = document.getElementById("myModal1");
    var btn = document.getElementById("imagepro");
    var btn1 = document.getElementById("imagepro1");
    var imgbtn = document.getElementById("myBtn");
    var imgbtn1 = document.getElementById("myBtn1");
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close1")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    btn1.onclick = function() {
      modal1.style.display = "block";
    }

    imgbtn.onclick = function() {
      modal.style.display = "block";
    }
    imgbtn1.onclick = function() {
      modal1.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    span1.onclick = function() {
      modal1.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    }