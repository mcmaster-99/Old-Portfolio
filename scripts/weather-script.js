$(document).ready(function() {

    /*
    ==============================
    ====== GLOBAL VARIABLES ======
    ==============================
    */
    var city;
    var state;
    var temp_f;
    var temp_f_state = true;
    var temp_c;
    var condition;

    /*
    ==============================
    ========== METHODS ===========
    ==============================
    */

    function switchToCelcius() {
        $("#tempFHeader, #forecast0_f_low, #forecast1_f_low, #forecast2_f_low, #forecast3_f_low, #forecast4_f_low, #forecast5_f_low").hide();
        $("#tempFHeader, #forecast0_f_high, #forecast1_f_high, #forecast2_f_high, #forecast3_f_high, #forecast4_f_high, #forecast5_f_high").hide();

        $("#tempCHeader, #forecast0_c_low, #forecast1_c_low, #forecast2_c_low, #forecast3_c_low, #forecast4_c_low, #forecast5_c_low").fadeIn();
        $("#tempCHeader, #forecast0_c_high, #forecast1_c_high, #forecast2_c_high, #forecast3_c_high, #forecast4_c_high, #forecast5_c_high").fadeIn();    
    }

    function switchToFarenheit() {
        $("#tempCHeader, #forecast0_c_low, #forecast1_c_low, #forecast2_c_low, #forecast3_c_low, #forecast4_c_low, #forecast5_c_low").hide();
        $("#tempCHeader, #forecast0_c_high, #forecast1_c_high, #forecast2_c_high, #forecast3_c_high, #forecast4_c_high, #forecast5_c_high").hide();

        $("#tempFHeader, #forecast0_f_low, #forecast1_f_low, #forecast2_f_low, #forecast3_f_low, #forecast4_f_low, #forecast5_f_low").fadeIn();
        $("#tempFHeader, #forecast0_f_high, #forecast1_f_high, #forecast2_f_high, #forecast3_f_high, #forecast4_f_high, #forecast5_f_high").fadeIn();
    }


    /*
    ==============================
    ========= AJAX CALLS =========
    ==============================
    */
    var data = $.parseJSON($.ajax({
        url: "https://api.ipdata.co?api-key=test",
        dataType: "json",
        async: false
        }).responseText);
    console.log(data)

    city = data.city;
    state = data.region;
    $("#location").html(city + ", " + state);

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+data.city+"&appid=0df1207a9bd654f5403eaca4b23b4bb1";
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q="+data.city+"&appid=0df1207a9bd654f5403eaca4b23b4bb1";

    $.ajax({
        url: url,
        dataType: "jsonp",
        success: function(data){
            temp_f = Math.round(1.8 * (data.main.temp - 273 ) + 32) + " F";
            temp_c = Math.round(data.main.temp - 273.15) + " C";

            $("#tempFHeader").html(temp_f);

            // Set and hide for toggling between F and C
            $("#tempCHeader").html(temp_c);
            $("#tempCHeader").hide();

            condition = data.weather[0].main;
            $("#condition").html(condition);

            // Icon is displayed based on the condition.
            if (condition === "Clouds") {
                $("#conditionIcon").css({"background-image" : "url(https://image.flaticon.com/icons/svg/136/136701.svg)",
                                    "background-repeat" : "no-repeat",
                                    "width" : "100%",
                                    "background-position" : "center"});
            } else if (condition === "Clear") {
                $("#conditionIcon").css({"background-image" : "url(https://image.flaticon.com/icons/svg/136/136723.svg)",
                                    "background-repeat" : "no-repeat",
                                    "width" : "100%",
                                    "background-position" : "center"});
            }

            $.ajax({
                url: forecastURL,
                dataType: "jsonp",
                success: function(data){
                    
                    var day = new Date();
                    var weekday = new Array(7);

                    weekday[0] = "Sunday";
                    weekday[1] = "Monday";
                    weekday[2] = "Tuesday";
                    weekday[3] = "Wednesday";
                    weekday[4] = "Thursday";
                    weekday[5] = "Friday";
                    weekday[6] = "Saturday";

                    // Populates the 6-day forecast.
                    for (var i = 0; i <= 6; i++) {
                        
                        temp_f_low = Math.round(1.8 * (data.list[i].temp.min - 273 ) + 32) + " F";
                        temp_f_high = Math.round(1.8 * (data.list[i].temp.max - 273) + 32) + " F";

                        temp_c_low = Math.round(data.list[i].temp.min - 273.15) + " C";
                        temp_c_high = Math.round(data.list[i].temp.max - 273.15) + " C";

                        $("#day" + i.toString()).html(weekday[(day.getDay() + i + 1) % 7]);

                        $("#forecast" + i.toString() + "_f_low").html(temp_f_low);
                        $("#forecast" + i.toString() + "_f_high").html(temp_f_high);

                        $("#forecast" + i.toString() + "_c_low").html(temp_c_low).hide();
                        $("#forecast" + i.toString() + "_c_high").html(temp_c_high).hide();
                    }

                }
            }); /* end inner AJAX call */
        }
    }); /* end outer AJAX call */


    // Button's functions (toggling between F and C)
    $(".toggle").click(function() {


        if (temp_f_state === true) {
            switchToCelcius();
            temp_f_state = false;
        } else {
            switchToFarenheit();
            temp_f_state = true;
        }

    });
  
});
