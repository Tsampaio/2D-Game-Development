// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.width = 50;
    this.height = 50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= 600){
        this.x = -101;
        //set speed of the bugs when they restart from position X= -101
        this.speed = 50 + (Math.random() * 300);

    } else {
        this.x += this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x || 205;
    this.y = y || 405;
    this.width = 50;
    this.height = 50;
};




Player.prototype.update = function(dt) {
    //if player touch the water it goes back to the intial position
    if( this.y < 10) {
        this.reset(205,400);
    }
    //Check the X and Y position of the player to see if there is any collision
    var enemiesLenght = allEnemies.length;
    for (var i = 0; i < enemiesLenght; i++) {
        var enemy = allEnemies[i];
        if (this.x < enemy.x + enemy.width && this.x + this.width > enemy.x && this.y < enemy.y + enemy.height && this.height + this.y > enemy.y) {
            this.reset(205,405);
        }
    };
};

Player.prototype.handleInput = function(key) {

//Set boundaries and how much should the player move around X and Y position, log the positions on console
if (key === 'left' && this.x > 10) {
        this.x -= 100;
        console.log("current player X position is " + this.x);
    } else if (key === 'right' && this.x < 401){
        this.x += 100;
        console.log("current player X position is " + this.x);
    }  else if (key === 'up' && this.y > 10){
        this.y -= 85;
        console.log("current player Y position is " + this.y);
    } else if (key === 'down' && this.y < 320){
        this.y += 85;
        console.log("current player Y position is " + this.y);
    }

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//reset the position of the player
Player.prototype.reset = function(x, y) {
  this.x = x;
  this.y = y;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-100,59,120);
var enemy2 = new Enemy(-100,140,100);
var enemy3 = new Enemy(-100,225,160);

var allEnemies = [enemy1, enemy2, enemy3];

var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

console.log(allEnemies[0].x);


/*
var MainClass = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.width = 50;
    this.height = 50;
};

var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
}

Enemy.prototype = new MainClass();

var enemy1 = new Enemy(-100,59,120);
var enemy2 = new Enemy(-100,140,100);
var enemy3 = new Enemy(-100,225,160);

var allEnemies = [enemy1, enemy2, enemy3];



var Player = function() {
    this.sprite = 'images/char-boy.png';
}

Player.prototype = new MainClass();
var player = new Player();
..
*/
