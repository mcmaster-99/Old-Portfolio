var streamers = ["SypherPK", "Comster404", "dreamhackcs"];

$(document).ready(function(){

    // BUTTON EFFECTS
  $("#showOnline").click(function(){
    $("#online, #offline, #nonexistent, #box").fadeOut();
    $("#online, #box").fadeIn();
  });

  $("#showOffline").click(function(){
    $("#online, #offline, #nonexistent, #box").fadeOut();
    $("#offline, #box").fadeIn();
  });

  $("#nonExistent").click(function(){
    $("#nonexistent").fadeOut();
  });

  $("#showAll").click(function(){
    $("#box").fadeOut();
    $("#online, #offline, #nonexistent, #box").fadeIn();
  });
  // END BUTTON EFFECTS

    $.ajax({
      type: "GET",
      url: 'https://api.twitch.tv/helix/streams?'+name,
      beforeSend: function (request) {
        request.setRequestHeader("Client-ID", "6fudzu18tclw56mtk5s9hs4jzyzgoi");
      },
      success: onSuccess,
      error: function error(jqXHR, textStatus, errorThrown) {
        console.error('Error requesting devices: ', textStatus, ', Details: ', errorThrown);
        console.error('Response: ', jqXHR.responseText);
      }
    });
    function onSuccess(data) {
      
      var streamers = data['data'].slice(0, 4);
      console.log(streamers);

      streamers.forEach(function(user){
        var live_status_color = (user.type == "live") ? "green" : "red";
        // IF CHANNEL DOES NOT EXIST
        $('#box').append("<div id='nonexistent' class='row'><div class='row col-md-2 col-xs-2'>"
                            + "<img class='logo' src='https://www.riyafoundation.org/wp-content/uploads/2013/11/default.png'>"
                          + "</div>"
                            +"<div class='text row col-md-3 col-xs-4'>"
                                +"<p>"+user.user_name+"</p>"
                            +"</div>"
                          + "<div class='text row col-md-3 col-xs-2'>"
                            +user.viewer_count
                          +"</div>"
                          + "<div class='text row col-md-3 col-xs-1'>"
                            +user.type
                          +"</div>"
                          + "<div class='dot row col-md-0 col-xs-0'>"
                            +"<font color='"+live_status_color+"'>&#9679</font>"
                          +"</div>");
      })

      
           
    }

});