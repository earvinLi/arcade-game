// Enemies our player must avoid
const Enemy = function() {
    this.x = x;
    this.y = y;
    this.speed = Math.random()*(400 - 100) + 100;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks, details in the engine
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player
const Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}

Player.prototype.update = function(dt) {
    if (this.y === -15) {
        this.reset();
    }
    // boundry control
    if (this.y === playerBoundYBot) {
        this.y = 400;
    }
    if (this.x === playerBoundXLeft) {
        this.x = 0;
    }
    if (this.x === playerBoundXRight) {
        this.x = 400;
    }
};

Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        this.x -= 100;
    }
    if (key === 'right') {
        this.x += 100;
    }
    if (key === 'up') {
        this.y -= 83;
    }
    if (key === 'down') {
        this.y += 83;
    }
};

// Instantiate your objects.
let allEnemies = [new Enemy(0, 65), new Enemy(0, 148), new Enemy(0, 231)];
let player = new Player(200, 400);
setInterval(function() {
    allEnemies.push(new Enemy(0, 65));
    allEnemies.push(new Enemy(0, 148));
    allEnemies.push(new Enemy(0, 231));
}, 2000);


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
