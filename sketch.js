var wall1,wall2

function preload(){
	bglvl1 = loadImage("Sprites/bg lvl1.jpg")
	Wall1=loadImage("Sprites/Wall1.png")
	Wall2=loadImage("Sprites/wall2.png")
	playerImg = loadImage("Sprites/Harry.png");

	v1i = loadImage("Sprites/Villain1.png");
	v2i = loadImage("Sprites/Villain2.png");
	v3i = loadImage("Sprites/Villain3.png");
	v4i = loadImage("Sprites/Villain4.png");
	v5i = loadImage("Sprites/Villain5.png");

	doorImage = loadImage("Sprites/Door.png");
	letter = loadImage("Sprites/letter.png");

	Bush = loadAnimation("Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/Redbush.png", "Sprites/Redbush.png", "Sprites/Redbush.png", "Sprites/Redbush.png");
	Bush2 = loadAnimation("Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/yellowbush.png", "Sprites/yellowbush.png", "Sprites/yellowbush.png", "Sprites/yellowbush.png");
	Bush3 = loadAnimation("Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/Pinkbush.png", "Sprites/Pinkbush.png", "Sprites/Pinkbush.png", "Sprites/Pinkbush.png");

lifeImg=loadImage("Sprites/live.png")
}

function setup(){
	createCanvas(1500, 750);
	
	growingbushes2 = createSprite(100, 160, 20, 20)
	growingbushes2.addAnimation("growing", Bush2);
	growingbushes2.scale = 0.5

	growingbushes = createSprite(1250, 160, 20, 20)
	growingbushes.addAnimation("growing", Bush);
	growingbushes.scale = 0.5

	growingbushes3 = createSprite(100, 690, 20, 20)
	growingbushes3.addAnimation("growing", Bush3);
	growingbushes3.scale = 0.5

	
	
	wall0 = createSprite(750, 17, 1500, 34);
	wall0.shapeColor="black"
	

	wall2 = createSprite(9, 390, 20, 720);
	wall2.addImage(Wall2);

	wall3 = createSprite(1490, 390, 20, 720);
	wall3.addImage(Wall2);

	wall1 = createSprite(200,40, 1500, 20)
	wall1.addImage(Wall1)

	wall4 = createSprite(200, 740, 1500, 20)
	wall4.addImage(Wall1)
	wall6 = createSprite(1200, 573, 20, 304);
	wall7 = createSprite(140, 580, 236, 20)
	
	wall8 = createSprite(138, 290, 20, 214);
	wall9 = createSprite(250, 517, 20,146);
	
	
	wall10 = createSprite(320, 454, 140, 20);

	 wall11 = createSprite(390, 517, 20, 146);
	 wall12 = createSprite(680,580, 568, 20);
	wall13 = createSprite(974, 578, 20,75);
	 wall14 = createSprite(980,431, 447, 20);
	 wall15 = createSprite(980, 369, 20, 105);
	 wall16 = createSprite(670, 310, 640, 20);
	 wall17 = createSprite(285, 188, 535, 20);
	 wall18 = createSprite(1033, 188, 638, 20);
	 wall19 = createSprite(1342, 300, 20, 506);

	 
	letter1 = createSprite(330, 520, 80, 60);
	letter1.addImage(letter);
	letter1.scale=0.3
	letter2 = createSprite(80, 230, 80, 60);
	letter2.addImage(letter);
	letter2.scale=0.3
	letter3 = createSprite(200, 230, 80, 60);
	letter3.addImage(letter);
	letter3.scale=0.3
	letter4 = createSprite(80, 120, 80, 60);
	letter4.addImage(letter);
	letter4.scale=0.3
	letter5 = createSprite(1280, 120, 80, 60);
	letter5.addImage(letter);
	letter5.scale=0.3
	letter6 = createSprite(920, 380, 80, 60);
	letter6.addImage(letter);
	letter6.scale=0.3
	letter7 = createSprite(1050, 380, 80, 60);
	letter7.addImage(letter);
	letter7.scale=0.3
	letter8 = createSprite(1340, 620, 80, 60);
	letter8.addImage(letter);
	letter8.scale=0.3
	letter9 = createSprite(1080, 600, 80, 60);
	letter9.addImage(letter);
	letter9.scale=0.3
	letter10 = createSprite(1280, 240, 80, 60);
	letter10.addImage(letter);
	letter10.scale=0.3 

	 player1 = createSprite(90, 650, 20, 20);
	player1.addImage(playerImg);
	player1.scale = 0.1
	 

	villain1 = createSprite(190, 523, 20, 20);
	villain1.addImage(v1i);
	villain1.velocityY = -4;
	villain1.scale = 0.06

	villain2 = createSprite(190, 120, 20, 20);
	villain2.addImage(v2i);
	villain2.scale = 0.06
	villain2.velocityX = -4;

	villain3 = createSprite(1270, 520, 20, 20);
	villain3.addImage(v3i);
	villain3.scale = 0.06
	villain3.velocityY = -4;


	villain4 = createSprite(470, 520, 20, 20);
	villain4.addImage(v4i);
	villain4.scale = 0.06
	villain4.velocityX = -4;

	villain5 = createSprite(1430, 520, 20, 20);
	villain5.addImage(v5i);
	villain5.scale = 0.08;
	villain5.velocityY = -4;

	door = createSprite(1450, 110, 20, 20)
	door.addImage(doorImage);
	door.scale = 0.2

 
	
}

function draw(){
	background(bglvl1)
	
villain1.bounceOff(wall17)
villain1.bounceOff(wall7)

villain2.bounceOff(wall2)
villain2.bounceOff(wall19)

villain3.bounceOff(wall4)
villain3.bounceOff(wall18)

villain4.bounceOff(wall11)
villain4.bounceOff(wall13)

villain5.bounceOff(wall1)
villain5.bounceOff(wall4)


	if (keyDown("UP_ARROW")) {
        player1.y=player1.y-3;
    }
      if (keyDown("DOWN_ARROW")) {
        player1.y=player1.y+3;
    }
      if (keyDown("LEFT_ARROW")) {
      player1.x=player1.x-3;
    }
      if (keyDown("RIGHT_ARROW")) {
        player1.x=player1.x+3;
    }
	
	
drawSprites();
}