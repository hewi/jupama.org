/* File created 02/Mar/2010 by Hewi Dundun, the only comment I would like to make for now is to watch out 
for, what i think was called, inconsistencies, but I'll get back to that later.  What I am trying to say, 
this first code snippet, de updat the time, writes the time in the clock form in the header, but imagine 
if you just change the header file or something else minor, it will be a cascading effect of all documents 
failing to update, watch out*/


//To remeber myself Javascript can be included anywhere, also when body loads
function DoNothing() {
	var a = "Do";
	var b = "nothing";
	var c = "!!!!!!";
}


//Code snippet: Clock to display NoneUTC_i.e.Computer time
//The little clock in Jupama's homepage, which makes it by definition dynamic
var the_timeout;
function writeTime(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = fixTime(minutes);
    seconds = fixTime(seconds);
    var the_time = hours + ":" + minutes + ":" + seconds;
	window.document.clock_form.clock_display.value = the_time;
	the_timeout = setTimeout('writeTime();',1000);
}


//Because you want a Zero infront of a single digit hour
function fixTime(the_time){
    if (the_time < 10){
	the_time = "0" + the_time;
	}
	return the_time;
}

//This code snippet is used when you have a drop down list for lenguage selection in the form of the form's, but it is replaced by php code ...
//insterded form below, lol
//			<form name="language_select">
//                <select name="language_list" onChange="nav()">
//                    <option selected="yes">Select</option>
//                    <option value="ziggoerat_nederlands.html">Nederlands</option>
//                    <option value="ziggoerat_english.html">English</option>
//                    <option value="ziggoerat_francais.html">Francais</option>
//                    <option value="ziggoerat_deutch.html">Deutch</option>
//                    <option value="ziggoerat_espagnol.html">Espagnol</option>
//                    <option value="ziggoerat_others.html">Others</option>
//                    <option value="ziggoerat_index.html">HOME</option>
//                </select>
//           </form>-->
// code snippet for navigation through drop down html menu list 
// function nav() {
    // var w = window.document.language_select.language_list.selectedIndex;
    // var url_add = window.document.language_select.language_list.options[w].value;
    // window.location.href = url_add;
    // }
