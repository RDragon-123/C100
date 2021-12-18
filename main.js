var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition()
function startlistening(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    content=event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML=content
  if(content=="take my selfie"){
    speak_text()
  }
}
function speak_text(){
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie in 5 seconds"
    var utter=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter)
    Webcam.attach(camera)
    setTimeout(function(){
        take_Picture()
        save()
    },5000);
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,height:250,image_format:"jpeg",jpeg_quality:90
}); 
function take_Picture(){
    Webcam.snap(function(data_url){
 document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_url+"'>";
    });
}
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src
    link.href=image 
    link.click()
}