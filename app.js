document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const width = 28 //28 x 28 = 784 squares
    let score = 0

    //layout of 28x28 grid and what is in the squares
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
      ]
      const squares = []

    // Legend
    // 0 - pac dot
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power pellet
    // 4 - empty
      
    //Using a for loop, we'll make all of our 784 squares of our grid based on the layout length
    // draw the grid and render it 

    // 28 x 28 grid -> 784 div elements
    // each div element is 20 x 20 pixels = 400 pixels

    function createBoard(){
        for (let i=0; i<layout.length; i++){
            const square = document.createElement('div')  // all divs have widths and heights of 20 pixels

            grid.appendChild(square)
            squares.push(square) // pushing all squares into our new array called squares

            // add layout to the board
            if (layout[i]===0) {
                squares[i].classList.add('pac-dot')
            }
            else if (layout[i]===1){
                squares[i].classList.add('wall')
            }
            else if (layout[i]===2){
                squares[i].classList.add('ghost-lair')
            }
            else if (layout[i]===3){
                squares[i].classList.add('power-pellet')
            }
        }
    }

    createBoard()

    /*Create an index of where we want pacman to start*/
    // Starting position of pac-man
    let pacmanCurrentIndex = 490
    // start at 490 
    
    squares[pacmanCurrentIndex].classList.add('pac-man')
    // At the 490th index of the squares array, add a class of 'pac-man'
    // To the div element created at the 490th array


    // move pac-man
    function movePacman(e) {
        // using switch statements, depending on which key 
        // you're pressing, you'll move the pacman a certain way

        squares[pacmanCurrentIndex].classList.remove('pac-man')
        // That div element in the squares array is no longer where pacman will be
        // So remove the class of pacman from that div element (essentially square in the grid)
        
        // console.log('testing')
        // console.log(pacmanCurrentIndex)
        // console.log(e)
        switch(e.keyCode){ 
            // he shouldn't be able to go through the walls
            // add in the switch cases , if the element before we increment or decrement by a certain amount , if that div element
            // is in a class of wall, don't allow the move 
            // or rather if div element we're moving the pacmen into ISN'T in the class of wall, then we can move
            
            // we also don't want pacman to be in the ghost lair

            case 37: //left arrow key
                if (pacmanCurrentIndex%width!== 0 && !squares[pacmanCurrentIndex-1].classList.contains('wall') && !squares[pacmanCurrentIndex-1].classList.contains('ghost-lair')){
                    // if pacman's currentIndex is at an index not divisible by 28
                    // it means it's not at the left most square on a certain row on the grid
                    // so CAN be moved one to the left
                    pacmanCurrentIndex-=1 ; 
                    console.log('move pacman left')
                    
                }
                if (pacmanCurrentIndex === 364) {
                    pacmanCurrentIndex = 391
                    // move pacman from the left exit to the right exit
                }

                break ; 
            case 38: //up arrow key
                if (pacmanCurrentIndex>27 && !squares[pacmanCurrentIndex-28].classList.contains('wall') && !squares[pacmanCurrentIndex-28].classList.contains('ghost-lair')){
                    // 0-27 index div elements are at the top 
                    // meaning as long as the current index is more than this, you can go up
                    pacmanCurrentIndex-=28 ; // the difference between a div element
                                            // on the grid and one directly above it is 28 index places
                    console.log('move pacman up')
                }
                break  ; 
            case 39: // right arrow key
                if ((pacmanCurrentIndex+1)%width!==0 && !squares[pacmanCurrentIndex+1].classList.contains('wall') && !squares[pacmanCurrentIndex+1].classList.contains('ghost-lair')) {
                    // 0 .... 27
                    // 28 .... 55 
                    // 56 ... 83
                    // (right most indexes -> if you add 1 , they're divisible by 28)
                    // only allow the pacman to move right if its current index + 1 , isn't divisible by 28
                    pacmanCurrentIndex +=1
                    console.log('move pacman right')
                } 
                if (pacmanCurrentIndex === 391) {
                    pacmanCurrentIndex = 364
                    // move pacman from the left exit to the right exit
                }
                break ; 
            case 40: // down
                if (pacmanCurrentIndex<((width*width)-1)-27 && !squares[pacmanCurrentIndex+28].classList.contains('wall') && !squares[pacmanCurrentIndex+28].classList.contains('ghost-lair')){
                    // if index is less than the indexes of the most bottom row
                    pacmanCurrentIndex +=28 ; 
                    console.log('move pacman down')
                }
                break ; 
        }   
        squares[pacmanCurrentIndex].classList.add('pac-man')
        console.log(pacmanCurrentIndex)
        pacDotEaten() ; 
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
    }
    

    // On each loop, we want to check for a gameover, 
    // A lose or if we've eaten a pacdot

    //pacDotEaten()
    //powerPelletEaten() - when pacman eats a power pellet, we want to make all the ghosts go blue 
    //checkForGameOver()

    document.addEventListener('keyup',movePacman)
    // keydown is when the user presses a key
    // keyUp is when a user releases a key

    // he shouldn't be able to go through the walls
    // add in the switch cases , if the element before we increment or decrement by a certain amount , if that div element
    // is in a class of wall, don't allow the move 
    // or rather if div element we're moving the pacmen into ISN'T in the class of wall, then we can move

    // what happens when Pac-man eats a pac-dot
    
    const grid2=document.querySelector('.grid2')
    const layout2 = [   
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0
    ]       

    for (let i=0;i<layout2.length;i++){
        const square2 = document.createElement('div')
        square2.classList.add('square')
        if (i==49){
            square2.style.backgroundColor="green" 
        }
        if (i==51){
            square2.style.backgroundColor="blue"
        }
        grid2.appendChild(square2) 
    }
    
    function pacDotEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
            score++ ; 
            scoreDisplay.innerHTML = score ; 
            squares[pacmanCurrentIndex].classList.remove('pac-dot') ; // remove the pacdot - can only be eaten once
        }
    }

    // what happens when you eat a power pellet
    function powerPelletEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
            score +=10 ; 
            scoreDisplay.innerHTML = score ; 
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            // only want the ghosts to be scared for 10 seconds
            // after 10 seconds, apply the unScareGhosts function
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
            // This removes the power pellet class from this div element
            // So the div element no longer has a power pellet
        }
    }

    // make the ghosts stop appearing as aquamarine
    function unScareGhosts(){
        ghosts.forEach(ghost => ghost.isScared = false)
    }    


    //Create our Ghost template 
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className=className
            this.startIndex=startIndex
            this.speed=speed
            this.currentIndex = startIndex
            this.timerId = NaN
            this.isScared = false // by default when initialising, Ghosts aren't scared
        }
    }

    const ghosts = [
        new Ghost('blinky',348,250),
        new Ghost('pinky', 376,400),
        new Ghost('inky',351,300),
        new Ghost('clyde', 379,500)
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
        // console.log(squares[ghost.currentIndex].classList)
        // console.log(squares[ghost.currentIndex])
        // HTML elements can have multiple class names
        // The classes can be declared in the class attribute
        // with a blank space to separate them
        // e.g. <a href="#" class="class1 class2">My Text</a>
        // This is what adding a classList does essentially ; adds a space
        // Then another className to the 'div' element
        // <div class="ghost-lair (name of Ghost) ghost"></div>
    })

    // For each ghost in your Ghost array, you want to do a move ghost function
    // move the ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))

    // write the function to move the ghosts
    function moveGhost(ghost){
        const directions = [-1,+1,width,-width]
        // Remember: 
        // -1 means moving left
        // +1 means moving right
        // +28 for moving down
        // -28 for moving up

        // Randomly choose one of the indexes (0-3)
        let direction = directions[Math.floor(Math.random()*directions.length)]
        
        // Using each ghosts unique timer ID , make each ghost do 
        // everything in the function at the speed of the ghosts speed
        ghost.timerId=setInterval(function(){
            // if statements using the classLists
            // If the next square your ghost is going to go in does NOT contain a wall and a ghost, you can go there
            
            
            if(!squares[ghost.currentIndex+direction].classList.contains('wall') && !squares[ghost.currentIndex+direction].classList.contains('ghost')){
                // you can go here

                squares[ghost.currentIndex].classList.remove(ghost.className,'ghost','scared-ghost')
                // removing 3 classnames
                ghost.currentIndex+=direction
                squares[ghost.currentIndex].classList.add(ghost.className,'ghost')
                // adding 2 classnames
                
                //console.log('moving'+ghost.className+'to '+ghost.currentIndex)

            }

            else {
            // if it does, then find a new direction for the ghost to go in
            // then the loop starts over
                direction = directions[Math.floor(Math.random()*directions.length)]
            }

            // if the ghost is currently scared
            if (ghost.isScared==true){
                console.log("ghosts are scared")
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')){
                // console.log('pacman has eaten a ghost')
                //remove the ghost if the div element at a certain index contains a ghost classname and pacman class name
                // pacman has 'eaten' the ghost
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost','scared-ghost')
                ghost.currentIndex=ghost.startIndex // we want the ghost to go back to its starting position
                score +=100
                scoreDisplay.innerHTML=score
                squares[ghost.currentIndex].classList.add('ghost',ghost.className)
            }
            checkForGameOver()
        }, ghost.speed)
        
    }

    function checkForGameOver(){
        // Pacman can only eat scared ghosts
        // When ghosts that aren't scared come across Pacman, the game is over
        if (squares[pacmanCurrentIndex].classList.contains('ghost') && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            // console.log('A ghost has eaten pacman')
            ghosts.forEach(ghost => clearInterval(ghost.timerId)) // need to understand the clearInterval function more
            document.removeEventListener('keyup',movePacman)
            setTimeout(function(){alert('Game Over!')}, 500)
            scoreDisplay.innerHTML="GAME OVER"
        }
    }

    function checkForWin(){
        if (score==274){
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePacman)
            setTimeout(function(){alert('YOU WIN!')}, 500)
            scoreDisplay.innerHTML= 'YOU WIN'
        }
    }
})