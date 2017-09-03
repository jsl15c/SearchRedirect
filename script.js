// check connection
console.log('script loaded');

// change form id to append redirect button to (reduces repitition)
$('form').attr('id','search-form');

// changes the URL to a google search
function googleSearch() {
  console.log('button works!');
  let searchInput;
  // gets search input from different SE forms
  if (window.location.href.includes('bing.com')) {
    searchInput = $("#sb_form_q").val();
  }
  else if (window.location.href.includes('yahoo.com')) {
    searchInput = $("#uh-search-box").val();
  }
  else if (window.location.href.includes('aol.com')) {
    searchInput = $("#q").val();
  }
  console.log(searchInput);
  // changes window location to new google url
  window.location=`https://www.google.com/search?q=${searchInput}`;
}


$(document).ready(() => {
  // places new input over existing form submission button
  if (window.location.href.includes('bing.com')) {
      console.log('bing.com');
      $('#search-form').append(`<span class="redirect bing"></span>`);
    }
    else if (window.location.href.includes('yahoo.com')) {
      console.log('yahoo.com');
      $('#search-form').append(`<span class="redirect yahoo"></span>`);
    }
    else if (window.location.href.includes('aol.com')) {
      console.log('aol.com');
      $('#search-form').append(`<span class="redirect aol"></span>`);
    }
    // click function redirects page
    $('.redirect').click(() => {
      googleSearch();
    });
    // 'enter' key redirects too
    $("#search-form").keypress(function(event) {
      if (event.which == 13) {
        event.preventDefault();
        googleSearch();
      }
    });
});
