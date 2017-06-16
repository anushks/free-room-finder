  var currentdate = new Date();
  var timezone = -(new Date().getTimezoneOffset() / 60)
  var startdatetime = currentdate.getFullYear() + "-"
                + "0" + (currentdate.getMonth()+1) +"-"
                + currentdate.getDate() + "T"
                + currentdate.getHours() + ":00:00"
                + "+00:00";
  var enddatetime = currentdate.getFullYear() + "-"
                + "0" + (currentdate.getMonth()+1) +"-"
                + currentdate.getDate() + "T"
                + (currentdate.getHours()+1) + ":00:00"
                + "+00:00"
//START JSON REQUEST
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        var i = 0;
        var y = parseFloat(myObj.count);
        var text = "";
      while (i <= y) {
              text += myObj.bookings[i].roomname + "<br>";
                i++;
            }
            
        document.getElementById("demo").innerHTML = text;
        document.getElementById("test").innerHTML = parseInt(myObj.count);
    } 
};

xmlhttp.open("GET", "https://uclapi.com/roombookings/bookings?token=uclapi-a70a65632c8a00-741ce156b657a2-1ce2e3ebd55219-24c1cb0de0a38b&siteid=212&start_datetime=" + startdatetime + "&end_datetime=" + enddatetime, true);
xmlhttp.send();
//END JSON REQUEST  

  function date() {
    document.getElementById("timebutton").onclick = document.getElementById("time").innerHTML = startdatetime + enddatetime;
    document.getElementById("timebutton").onclick = document.getElementById("time").style.cssText = "padding: 10px; transition: .2s ease-out;";
  }
