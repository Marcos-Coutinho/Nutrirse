// início redirecionar offline
// <script type="text/javascript">
$( document ).ready(function() {
function onLine() {

}
function offLine() {
window.location.href = "offline.html";  // alert(offline)
}
var i = new Image();
i.onload = onLine;
i.onerror = offLine;
i.src = 'http://www.google-analytics.com/__utm.gif';
});
// </script> 
// fim redirecionar offline