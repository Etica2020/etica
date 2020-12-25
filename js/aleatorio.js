var number=6;
var random_number=0;
link = new Array(number);
link[0] = "http://www.amazon.es";
link[1] = "http://www.tutores.org/";
link[2] = "http://www.google.com";
link[3] = "http://www.yahoo.es";
link[4] = "http://www.facebook.com";
link[5] = "http://www.instagram.com";
function loadRandomPage(){
    random_number=Math.floor(Math.random()*(number));
    window.location=link[random_number];
 }
