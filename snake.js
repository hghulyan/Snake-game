// future usable variable to allow to go from one version to the other
button_presses = 0
// this makes the "hard version" button
// {
var button_hard = document.createElement("button");
button_hard.innerHTML = "Hard version";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button_hard);
// }
// if then the button is then clicked on then it goes to line 16
button_hard.addEventListener ("click", function() {
    // takes the user to the hard version by connecting to the "Hard_snake" function
    setInterval(Hard_snake, 95);
    // if the button is greater than 0 it must . . .
    if (button_presses > 0) {
        // reload the page and . . .
        location.reload()
        // set the button_presses back to 0 so that if the user wants to go from one version to the other they don't have to click the reload button
        button_presses = 0
    }
    // makes the "button_presses" variable increment by one
    button_presses++

});

// makes the "Easy version" button
// {
var button_easy = document.createElement("button");
button_easy.innerHTML = "Easy version";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button_easy);
// }
button_easy.addEventListener ("click", function() {
    // takes the user to the hard version by connecting to the "Hard_snake" function
    setInterval(Easy_snake, 110)
    // then when the "Easy version" button is pressed then it should . . .
    if (button_presses > 0) {
        // reloads the tab and . . .
        location.reload()
        // set the button_presses back to 0 so that if the user wants to go from one version to the other they don't have to click the reload button
        button_presses = 0
    }
    // increments the variable
    button_presses++

});






// basicly a while loop so that it can do all the iterations
// {
window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    context = canvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
}
// }
    // this is for the HTML file to read and print onto the screen
    score_counter = document.getElementById("score_display")
    last_score_display = document.getElementById("last_score")
// two vriables to allow the scores recognise when to create another bomb into the grid
const Hard_TOTAL_SCORES = 700;
const Easy_TOTAL_SCORES = 1000;

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);



// the important variables

// the starting point for the snake
posX = posY = 10;

// X and Y of the grid and how many tiles are on one line
gridSize = numTiles = 20;

// the starting position for the apple
appleX = appleY = 15;

// the speed the snake starts at 
velX = velY = 0;

velX_p2 = velY_p2 = 0;

// the actual mechanisam of the tail
trail = [];

// how many blocks there should be for the tail
tail = 5;

// the starting points for the siccors 
scX = scY = 2

// futuer variable that will ditermine when the snakes is actualy dieing
game_time = 0

// the score counter
seconds = 0;

// also part of the score to determain when to add another bomb
seconds2 = 0;

// works with the game time to see when the snake actualy dies
timer_on = false

// the starting point for how many apples have been eaten
apple = 0;

// the starting X coordinate for the first portal 
first_portalX = 3

// the starting Y coordinate for the first portal
first_portalY = 7

// the starting X coordinate for the second portal
second_portalX = 7

// the starting Y coordinate for the second portak
second_portalY = 3

// it's for the high score
death_score = 0

// a function to call a new bomb in a random location
getNewBomb = () => {
    return {
        bombX : Math.floor(Math.random()*numTiles),
        bombY : Math.floor(Math.random()*numTiles)
    }
}
// for the array of bomb 
bombs = [getNewBomb()];



// the actual linking hard version of the hard snake
function Hard_snake() {

    // sends the score over to the HTML document for it to print it 
    score_counter.innerHTML = seconds;

    // if the timer is on then let the game time increment
    if (timer_on) {
        game_time++
    }
    posX += velX;
    posY += velY;



    // these four IF statments are for the four walls in the harder version of the game
    // if the snake touches the wall it should
    if (posX >= 20) {
        
        // reset the tail back to 5 blocks
        tail = 5;

        // prints that you are died and your score in the console
        last_score = console.log("you died your score is",seconds)

        // sets the speed of the snake back to 0
        velX = 0
        velY = 0

        // find another spot for the apple's X and Y coordinates
        appleX = Math.floor(Math.random()*numTiles)
        appleY = Math.floor(Math.random()*numTiles)

        // checks to see if there is already an object in that very location
        while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
        }

        // just sets the variables back
        apple = 0
        death_score = seconds
        seconds = 0;
        seconds2 = 0;
        posX = posY = 10;
        
        // empties out all the bombs in the array of bombs
        bombs = [getNewBomb()];
        timer_on = false
        game_time = 0
    }

    
    if (posX < 0) {
        // resets the snake to its begining point
        tail = 5;
        last_score = console.log("you died your score is",seconds)
        velX = 0
        velY = 0
        appleX = Math.floor(Math.random()*numTiles)
        appleY = Math.floor(Math.random()*numTiles)
        while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
        }
        apple = 0
        death_score = seconds
        seconds = 0;
        seconds2 = 0;
        posX = posY = 10;
        bombs = [getNewBomb()];
        timer_on = false
        game_time = 0    
    }

    if (posY >= 20) {
        // resets the snake to its begining point
        tail = 5;
        last_score = console.log("you died your score is",seconds)
        velX = 0
        velY = 0
        appleX = Math.floor(Math.random()*numTiles)
        appleY = Math.floor(Math.random()*numTiles)
        while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
        }
        apple = 0
        death_score = seconds
        seconds = 0;
        seconds2 = 0;
        posX = posY = 10;
        bombs = [getNewBomb()];
        timer_on = false
        game_time = 0
        }

    if (posY < 0) {
        // resets the snake to its begining point
        tail = 5;
        last_score = console.log("you died your score is",seconds)
        appleX = Math.floor(Math.random()*numTiles)
        appleY = Math.floor(Math.random()*numTiles)
        while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
        }
        velX = 0
        velY = 0
        apple = 0
        death_score = seconds
        seconds = 0;
        seconds2 = 0;
        posX = posY = 10;
        bombs = [getNewBomb()];
        timer_on = false
        game_time = 0
    }


    // creates the grid
    context.fillStyle = "black";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    // creates the bomb
    context.fillStyle = "red";
    bombs.forEach(bomb => {
        context.fillRect(bomb.bombX * gridSize, bomb.bombY * gridSize, gridSize-2, gridSize-2);
    });

    // creates the snake
    context.fillStyle = "orange";
    for(var i = 0; i < trail.length; i++) {
        context.fillRect((trail[i].x)*gridSize, (trail[i].y)*gridSize, gridSize-2, gridSize-2);
        
        // if the snake touches it's tail then it should die
        if((trail[i].x == posX) && (trail[i].y == posY) && (game_time > 0)) {
            
            //  reaeting everything back to normal
            tail = 5;
            last_score = console.log("you died your score is",seconds)
            velX = 0
            velY = 0
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
            while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
                appleX = Math.floor(Math.random()*numTiles)
                appleY = Math.floor(Math.random()*numTiles)
            }
            apple = 0
            seconds = 0;
            seconds2 = 0;
            posX = posY = 10;
            bombs = [getNewBomb()];
            timer_on = false
            game_time = 0            
        }    
        
    }
    trail.push({x:posX, y:posY});

    // allows the trail to shift
    while(trail.length > tail) {
        trail.shift()

    }

    // if the snake has more than 9 blocks then it will allow the siccors to actualy appear
    if (tail >= 10){
        context.fillStyle = "blue";
        context.fillRect(scX*gridSize, scY*gridSize, gridSize-2, gridSize-2);
    }

    // checks to see if the snake and the siccors are in the position
    if ((scX == posX) && (scY == posY) && (tail >= 9 ) ) {
        
        // and if they are in the same position then it will cut off 4 blocks from the tail
        tail = tail - 4
        console.log("nice")
        scX = Math.floor(Math.random()*numTiles)
        scY = Math.floor(Math.random()*numTiles)
        while (((scX == appleX) && (scY == appleY)) || ((scX == getNewBomb.bombX) && (scY == getNewBomb.bombY)) || ((scX == first_portalX) && (scY == first_portalY)) || ((scX == second_portalX) && (scY == second_portalY))){
            scX = Math.floor(Math.random()*numTiles)
            scY = Math.floor(Math.random()*numTiles)
        }
    } 

    // checks to see if the apple and the snake are in the same position
    if((appleX == posX) && (appleY == posY)) {
        
        // thenallow the snake to increment one extra block
        tail++;
        appleX = Math.floor(Math.random()*numTiles);
        appleY = Math.floor(Math.random()*numTiles);
        while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
        }
        bombs.forEach(bomb => {
            bomb = getNewBomb();
        })
        
        scX = Math.floor(Math.random()*numTiles)
        scY = Math.floor(Math.random()*numTiles)
        while (((scX == appleX) && (scY == appleY)) || ((scX == getNewBomb.bombX) && (scY == getNewBomb.bombY)) || ((scX == first_portalX) && (scY == first_portalY)) || ((scX == second_portalX) && (scY == second_portalY))){
            scX = Math.floor(Math.random()*numTiles)
            scY = Math.floor(Math.random()*numTiles)
        }
        apple++;
        console.log(apple)

    }

    // creates the actual apple to be seen on the grid
    context.fillStyle = "lime";
    context.fillRect(appleX*gridSize, appleY*gridSize, gridSize-2, gridSize-2);

    // if any of the bombs in the arrays that touch the snake then it resets the snake back to it's starting point
    bombs.forEach(bomb => {
        if ((bomb.bombX == posX) && (bomb.bombY == posY)){
            tail = 5;
            bomb = Object.assign({}, getNewBomb());
            last_score = console.log("you died your score is",seconds, bomb)
            velX = 0
            velY = 0
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
            while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
                appleX = Math.floor(Math.random()*numTiles)
                appleY = Math.floor(Math.random()*numTiles)
            }
            apple = 0
            seconds = 0;
            posX = posY = 10;
            bombs = [getNewBomb()];
            timer_on = false
            game_time = 0
        }
    
    })


    // 
    seconds = seconds + apple
    seconds2 = Math.floor(seconds / Hard_TOTAL_SCORES);
    if(seconds2 > bombs.length) {
        bombs.push(getNewBomb());
    }



}




// now time for the easy version of the snake game   
function Easy_snake() {

    score_counter.innerHTML = seconds
    
    if (timer_on) {
        game_time++
    }
    
    posX += velX;
    posY += velY;

    // same 4 IF statments
    if (posX >= 20) {
        posX = 0
    }

    if (posX < 0) {
        posX = 20
    }

    if (posY >= 20) {
        posY = 0
    }

    if (posY < 0) {
        posY = 20;
    }
    // the grid 
    context.fillStyle = "black";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    //the bombs actual colour and design
    context.fillStyle = "red";
    bombs.forEach(bomb => {
        context.fillRect(bomb.bombX * gridSize, bomb.bombY * gridSize, gridSize-2, gridSize-2);
    });

    // the colour and design of the snake
    context.fillStyle = "yellow";
    for(var i = 0; i < trail.length; i++) {
        context.fillRect((trail[i].x)*gridSize, (trail[i].y)*gridSize, gridSize-2, gridSize-2);

        // if the snake touches it's own tail
        if((trail[i].x == posX) && (trail[i].y == posY) && (game_time > 0)) {
            // resets the snake back to it's normal point
            tail = 5;
            last_score = console.log("you died your score is",seconds)
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
            while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
                appleX = Math.floor(Math.random()*numTiles)
                appleY = Math.floor(Math.random()*numTiles)
            }
            velX = 0
            velY = 0
            apple = 0
            seconds = 0;
            seconds2 = 0;
            posX = posY = 10;
            bombs = [getNewBomb()];

            
            timer_on = false
            game_time = 0

        }    

        
    }
    trail.push({x:posX, y:posY});

    while(trail.length > tail) {
        trail.shift()

    }
    // checks to see when the siccors should actualy appear
    if (tail >= 10){
        context.fillStyle = "blue";
        context.fillRect(scX*gridSize, scY*gridSize, gridSize-2, gridSize-2);
    }
    // if the siccors and the snake are in the same position
    if ((scX == posX) && (scY == posY) && (tail >= 9 ) ) {
        tail = tail - 4
        console.log("nice")
        scX = Math.floor(Math.random()*numTiles)
        scY = Math.floor(Math.random()*numTiles)
        while (((scX == appleX) && (scY == appleY)) || ((scX == getNewBomb.bombX) && (scY == getNewBomb.bombY)) || ((scX == first_portalX) && (scY == first_portalY)) || ((scX == second_portalX) && (scY == second_portalY))){
            scX = Math.floor(Math.random()*numTiles)
            scY = Math.floor(Math.random()*numTiles)
        }



    } 
    // checks to see if the apple and the snake is in the same position
    if((appleX == posX) && (appleY == posY)) {
        // it will then increment the tail by 1 find a new space for the snake on the grid
        tail++;
        appleX = Math.floor(Math.random()*numTiles);
        appleY = Math.floor(Math.random()*numTiles);
        bombs.forEach(bomb => {
            bomb = getNewBomb();
            while (((getNewBomb.bombX == appleX) && (getNewBomb.bombY == appleY)) || ((getNewBomb.bombX == scX) && (getNewBomb.bombY == scY)) && ((getNewBomb.bombX == first_portalX) && (getNewBomb.bombY == first_portalY)) || ((getNewBomb.bombX == second_portalX) && (getNewBomb.bombY == second_portalY))){
                bomb = getNewBomb()
            }
        while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)
        }
        
        })
        
        // finds a new position for the siccors "if needed"
        scX = Math.floor(Math.random()*numTiles)
        scY = Math.floor(Math.random()*numTiles)
        apple++;
        console.log(apple)
        while (((scX == appleX) && (scY == appleY)) || ((scX == getNewBomb.bombX) && (scY == getNewBomb.bombY)) || ((scX == first_portalX) && (scY == first_portalY)) || ((scX == second_portalX) && (scY == second_portalY))){
            scX = Math.floor(Math.random()*numTiles)
            scY = Math.floor(Math.random()*numTiles)
        }



    }

    // the actual design of the apple
    context.fillStyle = "lime";
    context.fillRect(appleX*gridSize, appleY*gridSize, gridSize-2, gridSize-2);

    bombs.forEach(bomb => {
        if ((bomb.bombX == posX) && (bomb.bombY == posY)){
            tail = 5;
            bomb = Object.assign({}, getNewBomb());
            last_score = console.log("you died your score is",seconds, bomb)
            
            // finds a new position for the bomb
            appleX = Math.floor(Math.random()*numTiles)
            appleY = Math.floor(Math.random()*numTiles)

            // checks to see if there is a already a bomb or a portal or even siccors
            while (((appleX == getNewBomb.bombX) && (appleY == getNewBomb.bombY)) || ((appleX == scX) && (appleY == scY)) || ((appleX == first_portalX) && (appleY == first_portalY)) || ((appleX == second_portalX) && (appleY == second_portalY))){
                // and if there is then it should find another coordinate for the apple
                appleX = Math.floor(Math.random()*numTiles)
                appleY = Math.floor(Math.random()*numTiles)
            }
            // resets the snake back to it's starting point
            velX = 0
            velY = 0

            apple = 0
            seconds = 0;
            posX = posY = 10;
            bombs = [getNewBomb()];
            timer_on = false
            game_time = 0
        }
    
    })

    // creates the first and second portals
    context.fillStyle = "pink";
    context.fillRect(first_portalX*gridSize, first_portalY*gridSize, gridSize-2 , gridSize-2 );
    context.fillRect(second_portalX*gridSize, second_portalY*gridSize, gridSize-2 , gridSize-2 );

    // checks to see if the snake touches the first portal then it should telaport it to the second portal
    if ((first_portalX == posX) && (first_portalY == posY) ){
        
        // sets the position of the snake to the second portal
        posX = second_portalX;
        posY = second_portalY;
        first_portalX = Math.floor(Math.random()*numTiles)
        first_portalY = Math.floor(Math.random()*numTiles)
        while (((first_portalX == appleX) && (first_portalY == appleY)) || ((first_portalX == scX) && (first_portalY == scY)) || ((first_portalX == getNewBomb.bombX) && (first_portalY == getNewBomb.bombY)) || ((first_portalX == second_portalX) && (first_portalY == second_portalY))){
            first_portalX = Math.floor(Math.random()*numTiles)
            first_portalY = Math.floor(Math.random()*numTiles)
        }

        second_portalX = Math.floor(Math.random()*numTiles)
        second_portalY = Math.floor(Math.random()*numTiles)
        while (((second_portalX == appleX) && (second_portalY == appleY)) || ((second_portalX == scX) && (second_portalY == scY)) || ((second_portalX == getNewBomb.bombX) && (second_portalY == getNewBomb.bombY)) || ((first_portalX == second_portalX) && (first_portalY == second_portalY))){
            second_portalX = Math.floor(Math.random()*numTiles)
            second_portalY = Math.floor(Math.random()*numTiles)
        }
    }

    // checks to see if the snake is touching the second portal
    if ((second_portalX == posX) && (second_portalY == posY)){

        // then it would teleport the snake the snake to the first portal
        posX = first_portalX;
        posY = first_portalY;
        first_portalX = Math.floor(Math.random()*numTiles)
        first_portalY = Math.floor(Math.random()*numTiles)
        while (((first_portalX == appleX) && (first_portalY == appleY)) || ((first_portalX == scX) && (first_portalY == scY)) || ((first_portalX == getNewBomb.bombX) && (first_portalY == getNewBomb.bombY)) || ((first_portalX == second_portalX) && (first_portalY == second_portalY))){
            first_portalX = Math.floor(Math.random()*numTiles)
            first_portalY = Math.floor(Math.random()*numTiles)
        }

        
        second_portalX = Math.floor(Math.random()*numTiles)
        second_portalY = Math.floor(Math.random()*numTiles)
        while (((first_portalX == appleX) && (first_portalY == appleY)) || ((first_portalX == scX) && (first_portalY == scY)) || ((first_portalX == getNewBomb.bombX) && (first_portalY == getNewBomb.bombY)) || ((first_portalX == second_portalX) && (first_portalY == second_portalY))){
            second_portalX = Math.floor(Math.random()*numTiles)
            second_portalY = Math.floor(Math.random()*numTiles)
        }

    }




    seconds = seconds + apple
    seconds2 = Math.floor(seconds / Easy_TOTAL_SCORES);
    if(seconds2 > bombs.length) {
        bombs.push(getNewBomb());
        
    }


}

// gameCanvas.width.innerHTML = 800

// What to do with arrow keys being pressed
function keyPush(evt){
    switch(evt.keyCode) {

        // Fill in arrow key responses
        // left
        case 37:
            velX = -1
            velY = 0
            timer_on = true
            break;
        // up
        case 38:
            velY = -1
            velX = 0
            timer_on = true
            break;
        // right
        case 39:
            velX = 1
            velY = 0
            timer_on = true
            break;
        // down
        case 40:
            velY = 1
            velX = 0
            timer_on = true
            break;
        case 87:
            velY = -1
            velX = 0
            timer_on = true
            break;
        case 65:
            velX = -1
            velY = 0
            timer_on = true
            break;
        case 83:
            velX = 0
            velY = 1
            timer_on = true
            break;
        case 68:
            velX = 1
            velY = 0
            timer_on = true
            break;


    }
}
// hope you enjoy the game
// if you fell like you can add on to the game then go ahead 
// there is nothing dtoping you
// make the game better 
// clean up the code 
// enjoy 
// try and beat your high score
// but most importantly have fun