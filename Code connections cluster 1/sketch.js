var OOCSI=(function(){var e="ws://localhost/ws";var g;var q={};var b={};var m={};var w;var y=d;var s=t;function u(){y("CONNECTING to "+e);w=new WebSocket(e);w.onopen=function(z){h(z)};w.onclose=function(z){f(z)};w.onmessage=function(z){v(z)};w.onerror=function(z){i(z)}}function h(z){if(w.readyState===WebSocket.OPEN){l(g)}y("CONNECTED")}function f(z){y("DISCONNECTED")}function v(z){if(z.data!=="ping"){try{var A=JSON.parse(z.data);if(A.data.hasOwnProperty("_MESSAGE_ID")&&m.hasOwnProperty(A.data._MESSAGE_ID)){var B=m[A.data._MESSAGE_ID];if((+new Date)<B.expiration){delete A.data._MESSAGE_ID;B.fn(A.data)}delete m[A.data._MESSAGE_ID]}else{if(q[A.recipient]!==undefined){q[A.recipient](A)}else{y("no handler for event: "+z.data)}}}catch(A){y("ERROR: parse exception for event data "+z.data)}y("RESPONSE: "+z.data)}else{if(z.data.length>0){w.send(".")}}}function i(z){s();y("ERROR: "+z)}function o(z){if(!w||w.readyState===WebSocket.CONNECTING){setTimeout(function(){o(z)},200)}else{z()}}function l(z){if(w&&w.send(z)){y("SENT: "+z)}}function p(){w&&w.close()}function d(z){}function t(){}function k(){return w.readyState===WebSocket.OPEN}function c(z,A){k()&&l("sendjson "+z+" "+JSON.stringify(A))}function n(B,D,C,A){if(k()){var z=r();m[z]={expiration:(+new Date)+C,fn:A};D._MESSAGE_ID=z;D._MESSAGE_HANDLE=B;l("sendjson "+B+" "+JSON.stringify(D))}}function a(A,z){if(k()){b[A]={fn:z};j(A,function(C){var B={_MESSAGE_ID:C.data._MESSAGE_ID};z(C.data,B);c(C.sender,B)})}}function j(A,z){if(k()){l("subscribe "+A);q[A]=z}}function x(z){if(k()){l("unsubscribe "+z);q[z]=function(){}}}function r(){function z(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return z()+z()+"-"+z()+"-"+z()+"-"+z()+"-"+z()+z()+z()}return{connect:function(B,A,z){e=B;g=A&&A.length>0?A:"webclient_"+ +(new Date());q[A]=z;u()},send:function(A,z){o(function(){c(A,z)})},call:function(A,C,B,z){o(function(){n(A,C,B,z)})},register:function(A,z){o(function(){a(A,z)})},subscribe:function(A,z){o(function(){j(A,z)})},unsubscribe:function(z){o(function(){x(z)})},variable:function(D,A){var C=[];var E;function B(F){C.forEach(function(G){G(F)})}function z(F){if(arguments.length&&F!==E){E=F;B(F);c(D,{name:E})}return E}z.subscribe=function(F){C.push(F)};this.subscribe(D,function(F){if(F.data.hasOwnProperty(A)){z(F.data[A])}});return z},isConnected:function(){return k()},close:function(){o(function(){p()})},handlers:function(){return q},logger:function(z){y=z},error:function(z){s=z}}})();

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

var scal = 1.7;

var numb_users;
var dbaan_users;
var xusers;
var yusers;

var number_of_users;
var grow;

var modi;
var a =0;
var i =0;

let modi_array = [];

// connect to OOCSI 
OOCSI.connect("wss://oocsi.id.tue.nl/ws", "Jim_FBP_interface_c1");

// get data from the algorithm to show the text
OOCSI.subscribe("popping_bubbles_algorithm", function(msg) {
	start = msg.data.start;
    text_d = msg.data.text;
});

// get data from FOCUS project about the mode Layla is in
OOCSI.subscribe("2021_DIGSIM_FOCUS", function(msg) {
	modi = msg.data.modi;
      if(modi.length){
    append(modi_array,modi);
  }
});

var count_sensis;
var user_sensis;

// get data from Calmellia_sensis project about the mode Layla is in
OOCSI.subscribe("tea_data_send_count", function(msg) {
	count_sensis = msg.data.tea_count;
    user_sensis = msg.data.user;
});

function nudge() {
  if(modi_array[modi_array.length-2] == 'focus' && modi_array[modi_array.length-1] == 'break'){
    ten_bubbles();
    print('tien');
  }
}

function ten_bubbles() {
  // for (i=0;i<10000;i++) {
  i = i+1;
    if (i % 5 === 0){
      dbaan1 =(100+a)*scal;
      a=a+2;
      if (a == 50){
        a =0;
      }
  }
  // }
  // 1
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*1),y_0-dbaan1*sin(TWO_PI/10*1),dcircle1,dcircle1);

  // 2
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*2),y_0-dbaan1*sin(TWO_PI/10*2),dcircle1,dcircle1);
  
  // 3
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*3),y_0-dbaan1*sin(TWO_PI/10*3),dcircle1,dcircle1);
  
  // 4
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*4),y_0-dbaan1*sin(TWO_PI/10*4),dcircle1,dcircle1);
  
  // 5
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*5),y_0-dbaan1*sin(TWO_PI/10*5),dcircle1,dcircle1);
  
  // 6
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*6),y_0-dbaan1*sin(TWO_PI/10*6),dcircle1,dcircle1);  
  
  // 7
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*7),y_0-dbaan1*sin(TWO_PI/10*7),dcircle1,dcircle1);
  
  // 8
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*8),y_0-dbaan1*sin(TWO_PI/10*8),dcircle1,dcircle1);
  
  // 9
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*9),y_0-dbaan1*sin(TWO_PI/10*9),dcircle1,dcircle1);
  
  // 10
  fill(255);
  stroke(s1);
  strokeWeight(2*scal);
  ellipse(x_0-dbaan1*cos(TWO_PI/10*10),y_0-dbaan1*sin(TWO_PI/10*10),dcircle1,dcircle1);
}

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
  
   print(count_sensis,user_sensis);
  
    if(user_sensis == 'Noah'&& count_sensis >= 3){
      ten_bubbles();
      }
    if(user_sensis == 'Nynke'&& count_sensis >= 3){
     ten_bubbles();
    }   
    if(user_sensis == 'Tarek'&& count_sensis >= 3){
      ten_bubbles();
    }   
    if(user_sensis == 'Layla'&& count_sensis >= 3){
       ten_bubbles();
    }  
  
  
  // imageMode(CORNER);
  // image(img_info, 0,0, 440,300);
  // createA('https://forms.office.com/r/psRSD2q31e', 'Questionnaire').position(220, 340);
  imageMode(CENTER);
  
  /////////////////////
  //niet vergeten aan te zetten
  // if(!modi == undefined){
  //   append(modi_array,modi);
  // }
  nudge();
  ///////////////////
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
      // print(i);
      dbaan_users = 95*scal;
      grow = 60;
      // post(t_b,i);
      // userbubble(i,grow,img_array[k]);
    } else{
      dbaan_users = 104*scal;
      grow = 20;
      // userbubble(i,grow,img_array[k]);
    }
  }
  
  
  // fill(255);
  // stroke(s1);
  // strokeWeight(2*scal);
  // ellipse(x_0-x1,y_0-y1,dcircle1,dcircle1);
  

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
  
  print(modi_array);
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