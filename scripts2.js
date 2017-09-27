  var currentdate = new Date();
  var timezone = -(new Date().getTimezoneOffset() / 60)
  var startdatetime = currentdate.getFullYear() + "-"
                + "0" + (currentdate.getMonth()+1) +"-"
                + currentdate.getDate() + "T"
                + currentdate.getHours() + ":00:00"
                + "+01:00";
  var enddatetime = currentdate.getFullYear() + "-"
                + "0" + (currentdate.getMonth()+1) +"-"
                + currentdate.getDate() + "T"
                + (currentdate.getHours()+1) + ":00:00"
                + "+01:00"

function hi() {
 var crooms = "";
 var rrooms = "";
  var bookings = "";

//START JSON REQUEST FOR BOOKINGS
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

  
    myObj = JSON.parse(this.responseText);
    var i = 0;
    var y = parseInt(myObj.count);
       while (i < y) {
      bookings += "<li>"+myObj.bookings[i].roomname + ",";
      i++;
    }

    document.getElementById("bookedRooms").innerHTML = bookings;
};

xmlhttp.open("GET", "https://uclapi.com/roombookings/bookings?token=uclapi-b4f09fe347de4c-3b8910893fad4a-2d33328ac9365f-baf8e0843f532f&siteid=374&start_datetime="+startdatetime+"&end_datetime="+enddatetime+"", false);
xmlhttp.send();
//END JSON REQUEST FOR BOOKINGS

  function date() {
    document.getElementById("timebutton").onclick = document.getElementById("time").innerHTML = startdatetime + enddatetime;
    document.getElementById("timebutton").onclick = document.getElementById("time").style.cssText = "padding: 10px; transition: .2s ease-out;";
  }

//JSON REQUESTS FOR CRUCIFORM
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

    myCRooms = JSON.parse(this.responseText);
    var i = 0;
   
    while (i < 14) {
      crooms += "<li>"+myCRooms.rooms[i].roomname + ',';
      i++;
    }

    document.getElementById("CRooms").innerHTML = crooms;

};


xmlhttp.open("GET", "https://uclapi.com/roombookings/rooms?token=uclapi-b4f09fe347de4c-3b8910893fad4a-2d33328ac9365f-baf8e0843f532f&siteid=374", false);
xmlhttp.send();

//JSN REQUESTS FOR ROCKEFELLER
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

  
    myRRooms = JSON.parse(this.responseText);

    var i = 0;
    
    while (i < 6) {
      rrooms += "<li>"+myRRooms.rooms[i].roomname + ',';
      i++;
    }

    

};

xmlhttp.open("GET", "https://uclapi.com/roombookings/rooms?token=uclapi-b4f09fe347de4c-3b8910893fad4a-2d33328ac9365f-baf8e0843f532f&siteid=374", false);
xmlhttp.send();


var allRooms = crooms;
var allRoomsArray = allRooms.split(",");
var bookingsArray = bookings.split(",");
var index;
for (var i=0; i<bookingsArray.length; i++) {
    index = allRoomsArray.indexOf(bookingsArray[i]);
    if (index > -1) {
        allRoomsArray.splice(index, 1);
    }
}
document.getElementById("RRooms").innerHTML = allRoomsArray.toString();
document.getElementById("hfree").innerHTML = "Rooms currently unbooked*";
document.getElementById("hbook").innerHTML = "Rooms currently booked";

}
