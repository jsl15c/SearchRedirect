console.log('script loaded');


// test getting value from bing search box
$('.hp_sw_logo').click(()=> {
  console.log($("#sb_form_q").val());
});

// test getting url from browser
// $('.hp_sw_logo').click(()=> {
//   console.log(window.location.href);
// });

// changes the URL to a google search
function googleSearch() {
  console.log('button works!');
  // gets search input
  let searchInput = $("#sb_form_q").val();
  console.log(searchInput);
  // changes window location to new google url
  window.location=`https://www.google.com/search?q=${searchInput}`;
}


$(document).ready(() => {

  // for bing.com
  if (window.location.href.includes('bing.com')) {
    console.log('bing.com');
    // changes onsubmit attribute of form
    $('.b_searchboxForm').append(`<span id="redirect"></span>`);
    // click function redirects page
    $('#redirect').click(() => {
      googleSearch();
    });
    // 'enter' key redirects too
    $("#sb_form").keypress(function(event) {
      if (event.which == 13) {
          event.preventDefault();
          googleSearch();
        }
      });
    }
});
