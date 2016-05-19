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
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= 606){
        this.x = -101;
        this.speed = 50 + (Math.random() * 200);
        //this.y = Math.floor(Math.random()*2.999);
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

    this.x = x || 200;
    this.y = y || 400;
};




Player.prototype.update = function(dt) {

    if(Enemy.x === Player.x && Enemy.y === Player.y ){
        Player.y = 400;
    }
};

Player.prototype.handleInput = function(key) {

if (key === 'left' && this.x > 0) {
        this.x -= 100;
    } else if (key === 'right' && this.x < 301){
        this.x += 100;
    } else if (key === 'up' && this.y < 100){
        this.y = 400;
    } else if (key === 'up' && this.y > 10){
        this.y -= 85;
    } else if (key === 'down' && this.y < 320){
        this.y += 85;
    }

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-100,60,100);
var enemy2 = new Enemy(-100,140,90);
var enemy3 = new Enemy(-100,220,80);

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