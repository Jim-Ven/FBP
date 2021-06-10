var start

var x1;
var y1;

var x2;
var y2;

var x_0;
var y_0;

var dcircle1;
var dcircle2;

var dbaan1;
var dbaan2;

var theta1;
var theta2;

var r1;
var r2;

var g1;
var g2;

var b1;
var b2;

var s1;

var moved1;

var t_b;
var t_s;

var scal = 2;

var numb_users;
var dbaan_users;
var xusers;
var yusers;

var number_of_users;
var grow;

function setup() {
  createCanvas(1400, 900);


  x_0 = 200+width/2;
  y_0 = height/2-50;
  x_0_2 = 200+width/2-10;
  y_0_2 = height/2-10-50;
  dcircle1 = 55*scal;
  dbaan1 = 150*scal;
  theta1 = TWO_PI-(HALF_PI*1.47);
  r1 = 0;
  g1 = 0;
  b1 = 255;
  s1 = 255;
  t_b = TWO_PI-(HALF_PI*1.47);
  t_s = PI;
  // pos = y_0*0.83
  
  dcircle2 = 15*scal;
  dbaan2 = 120*scal;
  theta2 = PI;
  r2 = 180;
  g2 = 180;
  b2 = 180;
   
  dbaan_users = 104*scal;
  one_time = 0;

  
  textAlign(CENTER);
  // textSize(30);
  noStroke();
}

let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img_array = [];

function preload() {
  img = loadImage('Asset 1@4x.png');
  img2 = loadImage('Asset 2@4x.png');
  img3 = loadImage('Asset 3@4x.png');
  img4 = loadImage('Asset 4@4x.png');
  img5 = loadImage('Asset 5@4x.png');
  img6 = loadImage('Asset 6@4x.png');
  img7 = loadImage('Asset 7@4x.png');
  img8 = loadImage('Asset 8@4x.png');
  img9 = loadImage('Asset 9@4x.png');
  img10 = loadImage('Asset 10@4x.png');
  img11 = loadImage('Asset 11@4x.png');
  img12 = loadImage('Asset 12@4x.png');
  img13 = loadImage('Asset 13@4x.png');
  img_post1 = loadImage('Asset 25@4x.png');
  img_post2 = loadImage('Asset 26@4x.png');
  img_post3 = loadImage('Asset 27@4x.png');
  img_post4 = loadImage('Asset 28@4x.png');
  img_post5 = loadImage('Asset 29@4x.png');
  img_post6 = loadImage('Asset 30@4x.png');
  img_post7 = loadImage('Asset 31@4x.png');
  img_post8 = loadImage('Asset 32@4x.png');
  img_post9 = loadImage('Asset 34@4x.png');
  img_post10 = loadImage('Asset 35@4x.png');
  img_info = loadImage('Asset 37@4x.png');
  img_array = [img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img7,img8,img9,img10,img11,img12];
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(img_info, 0,0, 440,300);
  createA('https://forms.office.com/r/psRSD2q31e', 'Questionnaire').position(220, 340);
  imageMode(CENTER);
  
  text()
  
  slide_b();
  x1 = dbaan1*cos(theta1);
  y1 = dbaan1*sin(theta1);

  slide_s();
  x2 = dbaan2*cos(theta2);
  y2 = dbaan2*sin(theta2);

  fill(255);
  // rect(x_0*0.49,y_0*0.34,400, 125);
  // rect(x_0*0.49,y_0*0.34 + 275,400, 125);

//   rect(x_0*0.4,0,450, 150);
//   rect(x_0*0.4,425,450, 150);
  
  image(img, x_0,y_0, 445,445);
  
  // rect(x_0*0.67,y_0*0.6, 290, 260, 10);

  users()    
  
  for(let i = TWO_PI-(HALF_PI*1.47), k=0; i <=(TWO_PI*2)-(HALF_PI*1.47) && k<number_of_users; i=i+(TWO_PI/number_of_users), k++){
    if((i-0.07<t_b+TWO_PI && i+0.07>t_b+TWO_PI) || (i-0.07<t_b && i+0.07>t_b)){
      print(i);
      dbaan_users = 95*scal;
      grow = 60;
      post(t_b,i);
      userbubble(i,grow,img_array[k]);
    } else{
      dbaan_users = 104*scal;
      grow = 20;
      userbubble(i,grow,img_array[k]);
    }
  }
  
  // fill(r1,g1,b1);
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-x1,y_0-y1,dcircle1,dcircle1);
  // print(theta1);

  stroke(255);
  strokeWeight(45*scal);
  noFill();
  ellipse(x_0,y_0,265*scal,265*scal);
  
  stroke(0, 0, 255);
  strokeWeight(20*scal);
  noFill();
  ellipse(x_0,y_0,240*scal,240*scal);

  stroke(155);
  strokeWeight(5);
  noFill();
  ellipse(x_0,y_0,240*scal,240*scal);
  fill(r2,g2,b2);
  strokeWeight(0);
  ellipse(x_0-x2,y_0-y2,dcircle2,dcircle2);

  // print(t_b,t_s);
}

function post(position,i){
  // if (position >= 3.9741147067910885 || position <= 4.0341147067910885){
  if (i== 3.9741147067910885){
      image(img_post2,x_0,y_0, 290, 260);
      }
    else if(9.000662952534757 == i){
      image(img_post7,x_0,y_0,290,260);
    }
    else if(7.74402589109884 == i){
      image(img_post10,x_0,y_0, 290, 260);
    }
    else if(6.4873888296629225 == i){
      image(img_post6,x_0,y_0, 280,140);
    }
    else if(5.230751768227005 == i){
      image(img_post9,x_0,y_0, 290, 260);
    }
  /////////////////////////////////////
    else if(9.628981483252716 == i){
      image(img_post1,x_0,y_0,290,260);
    }
    else if(8.372344421816798 == i){
      image(img_post8,x_0,y_0,290,260);
    }
    else if(7.115707360380881 == i){
      image(img_post4,x_0,y_0, 280,140);
    }
    else if(5.859070298944964 == i){
      image(img_post5,x_0,y_0, 290,260);
    }
    else if(4.602433237509047 == i){
      image(img_post3,x_0,y_0, 290,260);
    }  
}

function userbubble(f,g,imga){
  xusers = dbaan_users*cos(f);
  yusers = dbaan_users*sin(f);
  // TWO_PI-(HALF_PI*1.47)
  noStroke();
  // a = int(random(12));
  // r =0;
  // fill(coloers[r]);
  image(imga,x_0-xusers,y_0-yusers,g,g);
  noFill();
  ellipse(x_0-xusers,y_0-yusers,g,g);
}

function users(){
  if (t_s<=3.5 && t_s>2.85){
    number_of_users = 5;
  }else if (t_s<2.85 && t_s>2.5){
    number_of_users = 10;
  }else if (t_s<2.5 && t_s>2.25){
    number_of_users = 10;            
  }else if (t_s<2.25 && t_s>2.0){
    number_of_users = 10;            
  }else if (t_s<2.0 && t_s>1.5){
    number_of_users = 10;            
  }else if (t_s<1.5 && t_s>0.5){
    number_of_users = 5;           
  }else{
    number_of_users = 5;
  }          
  return number_of_users;
}

function mouseDragged() {
  moved1 = true;
  return false;
}

function mouseReleased() {
  if (dist(x_0-x1, y_0-y1, mouseX, mouseY) < dcircle1 / 2 && moved1 == false){
    theta1 = atan2(y_0-mouseY, x_0-mouseX) - PI;
    if (theta1 < 0){
        t_b = TWO_PI + theta1;
      } else {
        t_b = theta1
      }
  } 
  return false;
}

function slide_b(){
  if (dist(x_0-x1, y_0-y1, mouseX, mouseY) < dcircle1 / 2) {
    s1 = 155;
    if (mouseIsPressed && moved1 == true){
      theta1 = atan2(y_0-mouseY, x_0-mouseX);
      r1 = 0;
      g1 = 0;
      b1 = 255;
      if (theta1 < 0){
        t_b = TWO_PI + theta1;
      } else {
        t_b = theta1;
      }
      } else {
      r1 = 0;
      g1 = 0;
      b1 = 255;      }   
  } else {
    moved1 = false;
    s1 = 255;
  } 
}

function slide_s(){
  if (dist(x_0-x2, y_0-y2, mouseX, mouseY) < dcircle2 / 2) {
    r2 = 200;
    g2 = 200;
    b2 = 200;
    if (mouseIsPressed ){
      theta2 = atan2(y_0-mouseY, x_0-mouseX);
      r2 = 122;
      g2 = 122;
      b2 = 122;
      if (theta2 < 0){
        t_s = TWO_PI + theta2;
      } else {
        t_s = theta2;
      }
    }   
  } else {
    r2 = 155;
    g2 = 155;
    b2 = 155;
  } 
}
