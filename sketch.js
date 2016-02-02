//My Drawing

function setup(){
  createCanvas(800,700);
}



function draw(){
  //background

background('#FFFACD');

//Mountains

fill('#C0C0C0');
noStroke();
triangle(0,475,0,220,200,475);
triangle(30,475,130,290,400,475);
triangle(500,475,640,260,780,475);
quad(650,475,640,310,800,360,800,475);

  //SUN

  stroke('#FFA500');
  noFill();
  ellipse(590,120,20,20);
  ellipse(590,120,40,40);
  ellipse(590,120,60,60);
  ellipse(590,120,80,80);
  ellipse(590,120,100,100);
  ellipse(590,120,120,120);
  ellipse(590,120,140,140);
  ellipse(590,120,160,160);
  ellipse(590,120,180,180);


  //Grass
  noStroke();
  fill('#2E8B57');
  rect(0,475,800,275);

  stroke('#2E8B57');
  noFill();
  arc(230,475,100,60,HALF_PI,PI+QUARTER_PI);

  stroke('#2E8B57');
  strokeWeight(2);
  arc(190,475,40,40,HALF_PI,PI+QUARTER_PI);
  arc(180,475,30,50,HALF_PI,PI+QUARTER_PI);

  stroke('#3CB371');
  noFill();
  arc(680,575,100,60,PI-QUARTER_PI,PI);

  stroke('#3CB371');
  strokeWeight(2);
  arc(685,580,40,40,PI-QUARTER_PI,PI);
  arc(675,580,40,50,PI-QUARTER_PI,PI);

//BODY

  //Tail
  noStroke();
  fill('#5F9EA0');
  arc(475,520,280,280,30,HALF_PI,OPEN);
  fill('#2E8B57');
  arc(475,560,160,140,30,HALF_PI,OPEN);
  fill('#5F9EA0');
  arc(480,660,345,60,PI,TWO_PI-PI/2);
  line(300,660,475,660);

  //Neck
  fill('#5F9EA0');
  arc(425,325,410,390,115,PI+QUARTER_PI,OPEN);
  arc(425,325,410,390,115,PI+QUARTER_PI,OPEN);
  fill('#FFFACD');
  arc(385,290,250,240,240,PI+QUARTER_PI,OPEN);

//Central Body
    fill('#5F9EA0');
    ellipse(380,480,175,185);
    ellipse(450,450,200,200);

      //Central Body Stripes
      noFill();
      stroke('#87CEFA');
      strokeWeight(1);
      arc(380,480,175,185,TWO_PI-HALF_PI,TWO_PI-QUARTER_PI);
      arc(380,480,190,195,TWO_PI-HALF_PI,TWO_PI-QUARTER_PI);

  //back leg
  noStroke();
  fill('#5F9EA0');
    ellipse(490,520,100,100);
    triangle(560,450,490,520,525,580);
    ellipse(500,580,50,50);
    triangle(510,620,470,550,525,580);
    arc(490,620,40,40,PI,0,CHORD);

  //front right leg
    fill('#5F9EA0');
    ellipse(340,540,70,70);
    ellipse(320,585,40,40);
    arc(310,620,35,35,PI,0,CHORD);
    quad(315,540,390,540,315,620,300,620);

  //front left leg
  fill('#5F9EA0');
    ellipse(380,540,75,75);
    ellipse(395,590,40,40);
    arc(390,620,35,35,PI,0,CHORD);
    quad(340,540,405,540,405,620,380,610);

  //head
  fill('#5F9EA0');
    ellipse(310,180,25,25);
    ellipse(310,195,30,30);
    ellipse(295,195,35,35);
    ellipse(325,190,30,25);
    ellipse(310,192,60,35);

      //EYE
    fill('#87CEFA');
      ellipse(310,180,6,6);

      //Nose
    stroke('#87CEFA');
    strokeWeight(3);
      point(330,185);

}
