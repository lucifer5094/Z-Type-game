$(function(){
    var clock = document.getElementById("clock");
    function initNumXY(){
        // 1. Setting positions for 12 numbers
        var radius = 160; // Radius of the circle
        var dot_num = 360/$(".dot").length; // Degrees for each div
        var ahd = dot_num*Math.PI/180; // Radian for each dot
        $(".dot").each(function(index, el) {
            $(this).css({
                "left": 180 + Math.sin((ahd*index)) * radius,
                "top": 180 + Math.cos((ahd*index)) * radius
            });
        });
        // 2. Setting clock scales
        for(var i = 0; i < 60; i++) {
            clock.innerHTML += "<div class='clock-scale'> " +
                   "<div class='scale-hidden'></div>" +
                   "<div class='scale-show'></div>" +
                  "</div>";
        }
        var scale = document.getElementsByClassName("clock-scale");
        for(var i = 0; i < scale.length; i++) {
            scale[i].style.transform = "rotate(" + (i * 6 - 90) + "deg)";
        }
    }
    initNumXY(); // Calling the above function
    // Getting clock elements
    var hour_line = document.getElementById("hour_line"),
        minute_line = document.getElementById("minute_line"),
        second_line = document.getElementById("second_line"),
        date_info = document.getElementById("date_info"), // Getting date_info
        hour_time = document.getElementById("hour_time"), // Getting time elements
        minute_time = document.getElementById("minute_time"),
        second_time = document.getElementById("second_time");
    // 3. Setting dynamic time
    function setTime(){
        var nowdate = new Date();
        // Getting year, month, date, day, hours, minutes, seconds
        var year = nowdate.getFullYear(),
            month = nowdate.getMonth()+1,
            date = nowdate.getDate(),
            day = nowdate.getDay(),
            hours = nowdate.getHours(),
            minutes = nowdate.getMinutes(),
            seconds = nowdate.getSeconds();
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // Setting date
        date_info.innerHTML = year + "年" + month + "月" + date + "日   " + weekday[day];
        hour_time.innerHTML = hours >= 10 ? hours : "0" + hours;
        minute_time.innerHTML = minutes >= 10 ? minutes : "0" + minutes;
        second_time.innerHTML = seconds >= 10 ? seconds : "0" + seconds;
        // Setting hour, minute, second hands
        var hour_rotate = (hours * 30 - 90) + (Math.floor(minutes / 12) * 6);
        hour_line.style.transform = 'rotate(' + hour_rotate + 'deg)';
        minute_line.style.transform = 'rotate(' + (minutes * 6 - 90) + 'deg)';
        second_line.style.transform = 'rotate(' + (seconds * 6 - 90)+'deg)';
    }
    // setTime();
    setInterval(setTime, 1000); // Update time every second
});
