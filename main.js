function preloot(){
    classifier=ml5.imageClassifier("DoodleNet");

}


function setup(){
    canvas=createCanvas(400,400)
    canvas.center();
background("white")
sinth=window.speechSynthesis

canvas.mouseReleased(classifyCanvas) 
}
function draw(){
    strokeWeight(13)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)

    }
}
function LOL(){
    background("white")
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
if(error){
    console.error(error)
}
console.log(results)
document.getElementById("label").innerHTML="etiqueta"+results[0].label
document.getElementById("LIAMSUS").innerHTML="confianza"+results[0].confidence
}