noseX=0;
noseY=0;

function preload()
{
clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup()
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
}

function modelLoaded()
{
console.log("PoseNet is initialized");
}

function got_poses(results)
{
if(results.net > 0)
{
console.log(results);
noseX=results[0].pose.net.x-15;
noseY=results[0].pose.net.y-15;
}
}

function draw()
{
image(video,0,0,300,300)
}

function take_snapshot()
{
    save('myFilterImage.png');
}