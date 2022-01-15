$(window).on("load", function () {
   $("#loading").hide();
});

window.onresize = changeSize;

window.onload = changeSize;

function changeSize(event) {
   $(".loader").fadeOut("slow");

   let newWidth = window.innerWidth;

   let newHeight = window.innerHeight;

   let myWidth = document.querySelector("main").clientWidth;

   let myHeight = document.querySelector("main").clientHeight;

   if (newWidth <= myWidth) {
      let different = (myWidth - newWidth) / myWidth;

      let scaleValue = `scale(${1 - different})`;

      document.querySelector("main").style.transition =
         "transform 500ms ease-in-out";

      document.querySelector("main").style.transform = scaleValue;

      document.querySelector("main").style.top = "0px";
   } else if (newHeight < myHeight) {
      let different2 = (myHeight - newHeight) / myHeight;

      let scaleValue2 = `scale(${1 - different2})`;

      document.querySelector("main").style.transition =
         "transform 500ms ease-in-out";

      document.querySelector("main").style.transform = scaleValue2;

      document.querySelector("main").style.top = "0px";
   } else {
      document.querySelector("main").style.transform = "scale(1)";
   }
}

var correct1 = document.getElementById("good-1");

correct2 = document.getElementById("good-2");

rong1 = document.getElementById("bad-1");

rong2 = document.getElementById("bad-2");

mainpage = document;

function good() {
   if (!$("#bad-1").hasClass("disabled")) {

      $("#bad-1").addClass("disabled");

      document.getElementById("right").style.display = "block";

      correctAudio();

      $(".show-ans").addClass("disabled");

      $(".carousel-item.active .choose").addClass("disabled2");

   } else {}
}



function good2() {

   if (correct2.classList.contains("correct")) {

      $("#bad-2").addClass("disabled");

      document.getElementById("right2").style.display = "block";

      correctAudio();

      $(".show-ans").addClass("disabled");

   } else {

      setTimeout(function () {

         // document.getElementById('wrong').style.display="block";

      }, 500);

   }
}

function bad() {
   if (!$("#bad-1").hasClass("disabled")) {
      document.getElementById("wrong").style.display = "block";

      inCorrectAudio();

      setTimeout(function () {
         document.getElementById("wrong").style.display = "none";
      }, 500);
   } else {}
}

function bad2() {
   if ($("#bad-2").hasClass("disabled")) {} else {
      document.getElementById("wrong2").style.display = "block";

      inCorrectAudio();

      setTimeout(function () {
         document.getElementById("wrong2").style.display = "none";
      }, 500);
   }
}

// ---------------------- Start Reloadall -----------------

function reloadall() {

   $(".carousel-item:first").addClass("active")

   $(".carousel-item:last").removeClass("active")

   $(".next").removeClass("disabled");

   $(".back").addClass("disabled");

   $("#page-no").text("1 of 2");

   $("#bad-1").removeClass("disabled");

   $("#bad-2").removeClass("disabled");

   $(".show-ans").removeClass("disabled");

   $(".choose").removeClass("disabled2");

   document.getElementById("right").style.display = "none";

   document.getElementById("right2").style.display = "none";

   document.getElementById("desctiptinAudio").pause();

   disAppeer2();
}

// ---------------------- End Reloadall -----------------

// ---------------------- Start Audio Player -----------------
function correctAudio() {

   document.getElementById("correct").play();
}

function inCorrectAudio() {

   document.getElementById("incorrect").play();
}

function desctiptinAudio() {

   document.getElementById("desctiptinAudio").play();

   document.getElementById("img-pause").style.display = "none";

   document.getElementById("img-paly").style.display = "block";

   document.getElementById("av-tag").pause();

   // if (audio.paused == false) {

   //    audio.pause();

   // } else {

   //    audio.play();

   // }
}

var srcAudio = document.getElementById("av-tag").getAttribute("src");

function disAppeer1() {

   document.getElementById("img-pause").style.display = "block";

   document.getElementById("img-paly").style.display = "none";

   document.getElementById("desctiptinAudio").pause();

   document.getElementById("av-tag").play();

   // Set max value when you know the duration

   document.getElementById("av-tag").onloadedmetadata = () => document.getElementById("cur-time").max = document.getElementById("av-tag").duration

   // update ("#av-tag") position

   document.getElementById("cur-time").onchange = () => document.getElementById("av-tag").currentTime = document.getElementById("cur-time").value

   // update range input when currentTime updates

   document.getElementById("av-tag").ontimeupdate = () => document.getElementById("cur-time").value = document.getElementById("av-tag").currentTime

   setTimeout(() => {

      document.getElementById("img-pause").style.display = "none";

      document.getElementById("img-paly").style.display = "block";
      
      document.getElementById("cur-time").value = document.getElementById("av-tag").currentTime

   }, 2700);
}

function disAppeer2() {

   document.getElementById("img-pause").style.display = "none";

   document.getElementById("img-paly").style.display = "block";

   document.getElementById("av-tag").pause();
}




// ---------------------- End Audio Player -----------------

// ---------------------- Start Reload -----------------

function reload() {

   if ($(".carousel-item:first").hasClass("active")) {

      $("#bad-1").removeClass("disabled");

      document.getElementById("right").style.display = "none";

   } else {

      $("#bad-2").removeClass("disabled");

      document.getElementById("right2").style.display = "none";
   }

   document.getElementById("desctiptinAudio").pause();

   disAppeer2();

   $(".show-ans").removeClass("disabled");

   $(".carousel-item.active .choose").removeClass("disabled2");

   // srcAudio = ""

   console.log(srcAudio);

   // $('#bad-1').removeClass('disabled');

   // document.getElementById('right').style.display="none";
}

// ---------------------- End Reload -----------------

// ---------------------- Start Show Answer -----------------

function showans() {
   if ($(".carousel-item:first").hasClass("active")) {

      $("#bad-1").addClass("disabled");


      document.getElementById("right").style.display = "block";

   } else {

      $("#bad-2").addClass("disabled");

      document.getElementById("right2").style.display = "block";
   }

   $(".show-ans").addClass("disabled");

   $(".carousel-item.active .choose").addClass("disabled2");

}



// ---------------------- End Show Answer -----------------

// ---------------------- Start next page -----------------



// ---------------------- End next page -----------------

// ---------------------- Start Backe to First page -------------



// ---------------------- End Backe to First page -------------

// ----------------- slider ----------------
$("#carouselExampleControls").carousel({
   interval: 0,
   wrap: false,
});

$("#carouselExampleControls").on("slid.bs.carousel", "", function () {
   var $this = $(this);

   $this.children(".carousel-control").show();

   if ($(".carousel-inner .carousel-item:first").hasClass("active")) {
      $(".next").removeClass("disabled");

      $(".back").addClass("disabled");

      $("#page-no").text("1 of 2");

      if ($("#bad-1").hasClass("disabled")) {

         $(".show-ans").addClass("disabled");

      }else {

         $(".show-ans").removeClass("disabled");
      }

   } else if ($(".carousel-inner .carousel-item:last").hasClass("active")) {
      $(".next").addClass("disabled");

      $(".back").removeClass("disabled");

      $("#page-no").text("2 of 2");

      if ($("#bad-2").hasClass("disabled")) {

         $(".show-ans").addClass("disabled");

      }else {
         
         $(".show-ans").removeClass("disabled");
      }
   }



});