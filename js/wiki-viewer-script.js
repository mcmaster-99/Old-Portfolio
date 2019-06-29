$(document).ready(function() {

// Hide results on page load so we can smoothly animate/show it later.
$("#resultsDiv").hide();



/***********************************
  =========== METHODS ==============
***********************************/

function searchWiki(APIlink) {
  $.ajax({
    url: APIlink,
    dataType: "jsonp",
    success: function(data) {

      // Deletes previous results
      $("#resultsDiv").empty();

      // Display first 5 results
      for (var i = 1; i <= 5; i++) {

        // If object has no content
        if ($.isEmptyObject(data[1][i])) {
          $("#resultsDiv").prepend("<div class='results'> <h3>No result here.</h3></div>");
          continue;
        }

        $("#resultsDiv").prepend("<a class='results' id='result"+i+"' href="+data[3][i]+" target='_blank'" +
          "<h3>"+data[1][i]+"</h3>"+
          "<p>"+data[2][i]+"</p> </a>");
      }


    }
  })
  .done(function() {
    console.log('success');
  })
  .fail(function() {
    console.log('error');
  })
}

function firstEffect() {
  // Grab the value of user input
  var input = document.getElementById("input").value;

  // The wikipedia API url to use in AJAX calls
  var wikiAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&format=json&callback?";

  // searchWiki function used from line 21.
  searchWiki(wikiAPI);

  // Slowly show the results
  $("#resultsDiv").show(2000);
}

function fadeEffect() {

  // Grab the value of user input
  var input = document.getElementById("input").value;

  // The wikipedia API url to use in AJAX calls
  var wikiAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&format=json&callback?";
  
  $("#resultsDiv").fadeOut(500, function() {
    searchWiki(wikiAPI);
    $("#resultsDiv").delay(2).fadeIn(500);
  });
}
// ====== END METHODS ======



/*********************************************
  ============= EVENT HANDLERS ===============
*********************************************/

$("#input").keypress(function(e){

  // Fade out/in effect if resultsDiv is already visible
  if (e.which == 13 && $("#resultsDiv").is(":visible")) {
    e.preventDefault(); // allows to test only if enter key (ACSII code: 13) is pressed
    fadeEffect();
  } else if (e.which == 13) { // will execute on first search only
    e.preventDefault();
    firstEffect();
  }
}); // END keypress event


$("#goButton").click(function(){

  // If results are already shown, do the fade in/out effect
  if ( $("#resultsDiv").is(":visible") ) {
    fadeEffect();
  } else { // only executes on first search
    firstEffect();
  }
}); // END click event


}); // END $(document).ready(function()