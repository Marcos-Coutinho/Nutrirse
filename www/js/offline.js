// início redirecionar offline
// <script type="text/javascript">


$( document ).ready(function() {
function onLine() {
	load = document.getElementById("offline_display").style.display = "none";
}
function offLine() {
	load = document.getElementById("offline_display").style.display = "block";
}
var i = new Image();
i.onload = onLine;
i.onerror = offLine;
i.src = 'http://www.google-analytics.com/__utm.gif';
});

// </script> 
// fim redirecionar offline

