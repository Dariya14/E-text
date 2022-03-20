noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0; 
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#CBC3E3');

    document.getElementById("square_sides").innerHTML = "Text size will be - " + difference +"px";
    fill('#F69A97');
    stroke('#F69A97')
    textSize(difference);
    text("Dariya", noseX, noseY)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor( leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }

}