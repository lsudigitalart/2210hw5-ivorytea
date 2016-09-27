// var s=0;
// var r=0;
// var t=0;
// var bDir=1;
// var ry=0;
// var tr=0;
//
// function setup()
// {
//   createCanvas(400, 400);
//   background(0);
//   rectMode(CENTER);
//   angleMode(DEGREES);
// }
//
// function draw()
// {
//   // background (0, 10);
//   // s = s + 0.01;
//   // t = t + 1;
//   r = r + 10;
//   if(t > 300)
//   {
//     bDir=0;
//     ry = random(0, height/10);
//     ty = random(height/2);
//   }
//   if (t < -300)
//   {
//     bDir=1;
//     ry = random (0, height/10);
//     ty = random(height/2);
//   }
//
//   if(bDir == 1)
//   {
//     t++;
//   }
//   else {
//     t--;
//   }
//   translate(t, tr);
//   // translate(width/2, height/2);
//   rotate(r);
//   scale(s);
//   // rotate(map(mouseX, 0, 400, 0, 360));
//   // scale(map(mouseY, 0, 400, 0, 5));
//   // translate(-100, 0);
//   rect(0, ry, 50, 50);
// }

//Squares, divided horizontally and vertically into four equal parts. Within each part, color ink washes superimposed.
//The squares are bordered by a ½-inch (1¼ cm) white band and a 4-inch (10 cm) black band.
var rw=260;
var rh=260;
var s=0;

function setup()
{
  createCanvas (600, 600);
  background(0);
}

function draw()
{
  background(0);
  //white rectangle
  fill('white');
  rect(35, 35, 530, 530);

  noStroke();

  push();
  if(s<3)
  {
    s = s + 0.01;
    scale(s);
  }
  //purple
  fill(131, 99, 112);
  rect(40, 40, rw, rh);
  //taupe
  fill(199, 190, 172);
  rect(40, 300, rw, rh);
  //green
  fill(157, 193, 93);
  rect(300, 40, rw, rh);
  //orange
  fill (231, 113, 51);
  rect(300, 300, rw, rh);
  pop();

  // for (var i=40; i < 300; i++)
  // {
  //   for (var j=40; j < 300; j++)
  //   {
  //       if(i > 40 && i < 260 && j > 40 && j < 260)
  //       {
  //         fill(131, 99, 112); //purple
  //       }
  //       else if (i > 40 && i < 300 && j > 300 && j < 500);
  //       {
  //         fill (199, 190, 172); //taupe
  //       }
  //       else if (i > 300 && i < 500 && j > 40 && j < 300);
  //       {
  //         fill (157, 193, 93); //green
  //       }
  //       else if (i > 300 && i < 500 && j > 300 && j < 500);
  //       {
  //         fill (231, 113, 51); //orange
  //       }
  //       rect (i, j, rw, rh);
  //   }
  // }


  // if(rx > 40 && rx > 300 && ry > 40 && ry < 300)
  // {
  //   //purple
  //   fill(131, 99, 112);
  //   rect(40, 40, rw, rh);
  // }

  // //purple
  // fill(131, 99, 112);
  // rect(40, 40, rw, rh);
  // //taupe
  // fill(199, 190, 172);
  // rect(40, 300, rw, rh);
  // //green
  // fill(157, 193, 93);
  // rect(300, 40, rw, rh);
  // //orange
  // fill (231, 113, 51);
  // rect(300, 300, rw, rh);
}
