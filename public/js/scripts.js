
$(document).foundation();

$( document ).ready(function() {


const colors = [,, , ];

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
   const { color, startTime, endTime } = buttons[index];
   changeColors( startTime, endTime, color, index);
 });

 function changeColors(startTime, stopTime, color, buttonIndex) {

   setTimeout(function() {
       buttonExpanded.eq(buttonIndex).css({background: color});

   }, startTime);

   setTimeout(function() {
       buttonExpanded.eq(buttonIndex).css("background", "#333");
   }, stopTime)
 }


buttonExpanded.eq(0).hover(function() {
  this.style.background = "#0077B5";
});

});
