console.log('script.js works!');

let name = ['g','o','o','g','l','e'];

let newLogo = [];

// name.forEach((letter, i) => {
//    newLogo.push(`<span class='letter letter-${i}'>${letter}</span>`);
// });


const searchButtons = document.getElementsByClassName("jsb");
const background = document.getElementsByClassName("ctr-p");
const logoContainer = "<div id='logo-container'></div>";

searchButtons[0].style.display = "none";
background[0].style.background = "linear-gradient(45deg, #B1FEB2, #C0F5F3)";


$('#lga').append(logoContainer);
// $('#logo-container').append(newLogo);
$('#logo-container').append("<img id='google-logo' src='https://cdn.dribbble.com/users/124355/screenshots/2385746/google-logo.png'/>");

function changeBg() {
  const color = $("#color").val();
  console.log(color);
}

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      $('#submit').click(() => {
        console.log('click event works');
      });
      // This line is new!

    }
  }
);
