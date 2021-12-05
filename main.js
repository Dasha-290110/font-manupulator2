function setup(){
    video=createCapture(VIDEO);
    video.size(450,450);
    video.position(100,200);
    canvas=createCanvas(450,350);
    canvas.position(600,200);
    Posenet=ml5.poseNet(video,modalLoaded);
    Posenet.on('pose',gotPoses);

}

function modalLoaded(){
    console.log("posenet modal is loaded");
}

function draw(){
    background('#f035da');
}

function gotPoses(results){
   if(results.length > 0){
       console.log(results);
     }
}