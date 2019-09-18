
$(document).foundation();

$( document ).ready(function() {

// contains /about route button colors and setTimeout
const buttons = [
  {
    color:"#0077B5",
    startTime: 400,
    endTime: 800
  },
{
    color: "#1DA1F2",
    startTime: 800,
    endTime: 1200,
  },
  {
    color:"#c9510c",
    startTime:1200,
    endTime: 1600,
  },
  {
    color: "#5fcf80",
    startTime: 1600,
    endTime: 2000
  },
  {
    neutralBackground: "#333"
  }
]

  const portfolioIndex = $(".portfolio-index");
  const aboutMe = $(".fadeIn");

// routes fadeIn when selected
  aboutMe.fadeIn(500);
  portfolioIndex.fadeIn(500);

// var holds social buttons i.e. linkedin, twitter
 const socialMediaButtons = $(".button");


 socialMediaButtons.each(function(index, value) {
   const buttonSelected = buttons[index];
   changeColors(buttonSelected, index);
 });


// func accepts 2 arg;object & button Index
 function changeColors(buttonSelected, buttonIndex) {

 const { color, startTime, endTime } = buttonSelected;

 if(document.querySelectorAll("a")[2].textContent !== "Live Demo" && document.querySelectorAll("a")[3].textContent !== "Github Repo") {

   setTimeout(function() {
       socialMediaButtons.eq(buttonIndex).css({background: color});

   }, startTime);

   setTimeout(function() {
     const { neutralBackground } = buttons[buttons.length - 1];
       socialMediaButtons.eq(buttonIndex).css("background", neutralBackground);
   }, endTime);


 }

 }

// func accepts 1 arg, index integer
function addHoverColor(index) {
  socialMediaButtons.eq(index).hover(function() {
    const { color } = buttons[index]
    this.style.background = color;
  }, function() {
    this.style.background = "#333";
  });

}


 for(let i = 0; i<socialMediaButtons.length; i++) {
   addHoverColor(i);
 }


});
