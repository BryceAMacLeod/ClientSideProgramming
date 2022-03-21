(() => {

	//Selecting our node
	

	window.addEventListener("load", function() {
        
        // get puzzle data
        fetch("https://threeinarowpuzzle.herokuapp.com/sample")
        .then((response) => response.json())
        .then((puzzleData) => {
            buildPuzzle(puzzleData);
        })
        
        function buildPuzzle(puzzleData){
            var oldPuzzle = document.querySelector('#thePuzzle')
            if((oldPuzzle) != null) {
                oldPuzzle.remove();
            }
            // creating container for puzzle
            var thePuzzle = document.createElement('div');
            thePuzzle.id = "thePuzzle";
            var puzzleTable = document.createElement('table');
            var puzzleBody = document.createElement('tbody');
            puzzleBody.id = "puzzleBody"
            document.body.appendChild(thePuzzle);

            //Create puzzle square elements
            var rowCount = 0;
            puzzleData.rows.map((puzzleRow) => {
                // creating a row to hold the individual squares
                let aRow = document.createElement('tr')
                var column = 0;
                puzzleRow.map((puzzleSquare) => {
                    // creating the individual squares as 'td's
                    let puzzlePiece = document.createElement('td')
                    puzzlePiece.style.width = 50 + "px";
                    puzzlePiece.style.height = 50 + "px";
                    // unique identifer for each square of type #t[row]-[column];
                    puzzlePiece.id = "t" + rowCount + "-" + column;
                    if(puzzleSquare.canToggle === true) {
                        puzzlePiece.addEventListener('click', puzzleClick, false)
                    }
                    else {
                        puzzlePiece.style.border = "2px solid black";
                    }
                    switch(puzzleSquare.currentState) {
                        case 0:
                            puzzlePiece.style.backgroundColor = "rgb(128,128,128)";
                            break;
                        case 1:
                            puzzlePiece.style.backgroundColor = "rgb(0,0,255)";
                            break;
                        case 2:
                            puzzlePiece.style.backgroundColor = "rgb(255,255,0)";
                            break;
                        default:
                            console.error("there was a problem with puzzle colors");
                    }
                
                    aRow.appendChild(puzzlePiece);
                    column++;
                })
                
                puzzleBody.appendChild(aRow);
                rowCount++;
            })
            puzzleTable.appendChild(puzzleBody);
            thePuzzle.appendChild(puzzleTable);

            function puzzleClick() {
                let newString = this.id.split("t")
                let position = newString[1].split('-');
                let x = parseInt(position[0]);
                let y = parseInt(position[1]);
                if(puzzleData.rows[x][y].currentState === 0) {
                    puzzleData.rows[x][y].currentState++;
                    this.style.backgroundColor = "rgb(0,0,255)";
                }
                else if(puzzleData.rows[x][y].currentState === 1) {
                    puzzleData.rows[x][y].currentState++;
                    this.style.backgroundColor = "rgb(255,255,0)";
                }
                else if(puzzleData.rows[x][y].currentState === 2) {
                    puzzleData.rows[x][y].currentState = 0;
                    this.style.backgroundColor = "rgb(128,128,128)";
                }
            }

            // creating the "check puzzle" button, and corresponding click method
            let checkPuzzleButton = document.createElement('button');
            checkPuzzleButton.innerText = "Check Puzzle";
            checkPuzzleButton.addEventListener('click', function () {
                // check is any piece is incorrect
                if( (puzzleData.rows.some((row) => {
                    return row.some((square) => 
                    square.currentState !== square.correctState && square.currentState !== 0);
                }))) {
                    // when atleast one piece is incorrect
                    alert("Something is wrong");
                }
                // if no piece is incorrect
                else{
                    // when every piece is correct
                    if((puzzleData.rows.every((row) => {
                        return row.every((square) => 
                        square.currentState === square.correctState);
                    }))) {
                        // the puzzle is complete
                        alert("You did it!!");
                    }
                    else{
                        // when every piece is not incorrect
                        alert("So far so good");
                    }
                }
            },false)
            // adding the 'check puzzle' button to the body
            thePuzzle.appendChild(checkPuzzleButton);

            // creating the show incorrect squares checkbox
            let checkSquaresBox = document.createElement('input');
            checkSquaresBox.type = "checkbox";
            checkSquaresBox.id = "checkbox";
            checkSquaresBox.style.marginLeft = 10 + "px";
            let checkSquaresBoxLabel = document.createElement('label');
            checkSquaresBoxLabel.htmlFor = "checkbox";
            checkSquaresBoxLabel.innerText = "Show incorrect squares";
            checkSquaresBox.addEventListener('change', function () {
                let rowCount = 0;
                puzzleData.rows.map((row) => {
                    row.filter((square) => square.canToggle)
                    .map((square) => {
                        var theSquare = document.querySelector('#t' + rowCount + '-' + row.indexOf(square));
                        if(square.currentState !== square.correctState && square.currentState !== 0 && checkSquaresBox.checked) {
                            theSquare.style.border = "2px solid red";
                        }
                        else {
                            theSquare.style.border = "inherit";
                        }
                    })
                    rowCount++;
                })
            },false)
            // adding the 'show incorrect square' checkbox to the body
            thePuzzle.appendChild(checkSquaresBox);
            thePuzzle.appendChild(checkSquaresBoxLabel);

            // creating a 'new puzzle' button
            let newPuzzleButton = document.createElement('button');
            newPuzzleButton.innerText = "New Puzzle";
            newPuzzleButton.style.marginLeft = 10 + "px";
            newPuzzleButton.addEventListener('click', function () {
                fetch("https://threeinarowpuzzle.herokuapp.com/random")
                .then((response) => response.json())
                .then((newPuzzleData) => buildPuzzle(newPuzzleData));
            },false)
            // adding the 'new puzzle' button to the body
            thePuzzle.appendChild(newPuzzleButton);
        }
	}, false);// end window load
})(); //anon IIFE