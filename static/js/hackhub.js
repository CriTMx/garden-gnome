console.log("connected")

var cropInp= "";
var cityInp= "";

//text variables

var tempIdeal = "60";
var tempCurrent = "";
var tempText = "Perfect";

var sunIdeal = "";
var sunCurrent = "";
var sunText = "Perfect";

var humIdeal = "";
var humCurrent = "";
var humText = "Perfect";

$("#submit").on("click",function(){
//$("body").css("background","blue")

cropInp=$("#cropinput").val();
cityInp=$("#cityinput").val();
console.log(cropInp)
console.log(cityInp)

$("#tempIdeal").html("<p>Ideal: " + tempIdeal + " degrees</p>")
$("#tempCurrent").html("<p>Current: " + tempCurrent + " degrees</p>")
$("#tempText").html("<p>" + tempText + "</p>")

$("#sunIdeal").html("<p>Ideal: " + sunIdeal + "</p>")
$("#sunCurrent").html("<p>Current: " + sunCurrent + "</p>")
$("#sunText").html("<p>" + sunText + "</p>")

$("#humIdeal").html("<p>Ideal: " + humIdeal + " %</p>")
$("#humCurrent").html("<p>Current: " + humCurrent + " %</p>")
$("#humText").html("<p>" + humText + "</p>")
})

$("#submit").on("mousedown",function(){
$(this).css("background","#C2BFBF")
})

$("#submit").on("mouseup",function(){
$(this).css("background","#E8E8E8")
})
