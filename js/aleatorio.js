var number=6;
var random_number=0;
link = new Array(number);
link[0] = "tests/amazon/amazon.html";
link[1] = "tests/facebook/facebook.html";
link[2] = "tests/instagram/instagram.html";
link[3] = "tests/whatsapp/whatsapp.html";
link[4] = "tests/google/google.html";
link[5] = "tests/twitter/twitter.html";
function loadRandomPage(){
    random_number=Math.floor(Math.random()*(number));
    window.location=link[random_number];
 }
