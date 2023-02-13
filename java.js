Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90


});
camera= document.getElementById("webcam");
Webcam.attach(camera);

function take_snapshot()
{
  Webcam.snap(function (data_uri){
document.getElementById("image").innerHTML="<img id='eeee' src='"+data_uri+"'>";

  })

}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/62254m-_F/model.json',modelLoaded)
function modelLoaded()
{
    console.log("Model has loaded.");
}