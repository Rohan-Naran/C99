var SpeechRec = window.webkitSpeechRecognition;

var rec = new SpeechRec();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    rec.start();
}

rec.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    var speech = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speech);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
