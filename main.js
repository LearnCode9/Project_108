var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    
if(Content == "take my Selfie" ) 
{
    console.log("taking my Selfie --- ");
    speak();
}
}

function speak(){
        var synth = window.speechSynthesis;
        speak_data = "Taking Your Selfie in 5 Seconds";
        var utterThis = new SpeechSynthesisisUtterance(speak_data);
    
        synth.speak(utterThis);
        setTimeout(function(){}, 5000);
        Webcam.attach(camera);
        setTimeout(function()
        {
           take_snapshot();
           save();
    
        }, 5000);
    }
    
    camera = document.getElementById("camera");
    Webcam.set({
        width: 360,
        height: 250,
        image_format: 'png',
        png_quality: 90
    });
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri) {
            if (img_id =="selfie1" ){
            document.getElementById("result1").innerHTML = '<img id = selfie1 src" ' + data_uri+ '"/>';
            }
            if (img_id =="selfie2" ){
            document.getElementById("result2").innerHTML = '<img id = selfie2 src" ' + data_uri+ '"/>';
            }
            if (img_id =="selfie3" ){
            document.getElementById("result3").innerHTML = '<img id = selfie3 src" ' + data_uri+ '"/>';
            }
            if (img_id =="selfie4" ){
            document.getElementById("result4").innerHTML = '<img id = selfie4 src" ' + data_uri+ '"/>';
            }
            if (img_id =="selfie5" ){
            document.getElementById("result5").innerHTML = '<img id = selfie5 src" ' + data_uri+ '"/>';
            }
        });
    }
    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}



