var SpeechRecognition=window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    console.log("lets go2");
}
recognition.onresult=function(event) {
  
var Content= event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML=Content;
speak();
}

function speak(){
    synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    console.log("lets go");

}

 Webcam.set({
    width:450,
    height:320,
    image_format:'png',
    png_quality:90,
 });
 camera=document.getElementById("webcam");