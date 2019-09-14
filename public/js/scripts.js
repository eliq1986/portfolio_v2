
$(document).foundation();

$( document ).ready(function() {

// contains /about route button colors and setTimeout
const buttons = [
  {
    color:"#0077B5",
    startTime: 500,
    endTime: 900
  },
{
    color: "#1DA1F2",
    startTime: 800,
    endTime: 1150,
  },
  {
    color:"#c9510c",
    startTime:1050,
    endTime: 1400,
  },
  {
    color: "#5fcf80",
    startTime: 1300,
    endTime: 1650
  }
]

  const portfolioIndex = $(".portfolio-index");
  const aboutMe = $(".fadeIn");

  aboutMe.fadeIn(500);
  portfolioIndex.fadeIn(500);

 const buttonExpanded = $(".button");


 buttonExpanded.each(function(index, value) {
   console.log(this);
   const buttonSelcted = buttons[index];
   changeColors(buttonSelcted, index);
 });


 function changeColors(buttonSelected, buttonIndex) {
 const { color, startTime, endTime } = buttonSelected
   setTimeout(function() {
       buttonExpanded.eq(buttonIndex).css({background: color});

   }, startTime);

   setTimeout(function() {
       buttonExpanded.eq(buttonIndex).css("background", "#333");
   }, endTime);


 }

 buttonExpanded.eq(0).hover(function() {
   this.style.background = "#1DA1F2";
 }, function() {
   this.style.background = "#333";
 });



buttonExpanded.eq(1).hover(function() {
  this.style.background = "#1DA1F2";
}, function() {
  this.style.background = "#333";
});

buttonExpanded.eq(2).hover(function() {
  this.style.background = "#c9510c";
}, function() {
  this.style.background = "#333";
});


buttonExpanded.eq(3).hover(function() {
  this.style.background = "#5fcf80";
}, function() {
  this.style.background = "#333";
});



});
