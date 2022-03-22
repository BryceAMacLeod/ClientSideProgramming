(() => {

	window.addEventListener("load", function() {
        
        // get puzzle data
        fetch("https://threeinarowpuzzle.herokuapp.com/sample")
        .then((response) => response.json())
        .then((puzzleData) => {
            // add puzzle to page
            buildPuzzle(puzzleData);
        })
    }, false);// end window load
    // takes in json containing three in a row puzzle data
    function buildPuzzle(puzzleData){
        // checks if old data exists
        var oldPuzzle = document.querySelector('#thePuzzle')
        if((oldPuzzle) != null) {
            // removes if exists
            oldPuzzle.remove();
        }
        // creating container for puzzle
        var thePuzzle = document.createElement('div');
        thePuzzle.id = "thePuzzle";
        // creating the table that holds the data
        var puzzleTable = document.createElement('table');
        // table body / good practice
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
                    // provided, untogglable squares highlighted with black border
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
            // from the unique ID of each td like 't#-#'
            // #trow-column
            let newString = this.id.split("t")
            // row-column
            let position = newString[1].split('-');

            let row = parseInt(position[0]);
            let column = parseInt(position[1]);

            // if current state is gray/default/0
            if(puzzleData.rows[row][column].currentState === 0) {
                puzzleData.rows[row][column].currentState++;
                // next colour is blue
                this.style.backgroundColor = "rgb(0,0,255)";
            }
            // current state of blue/1
            else if(puzzleData.rows[row][column].currentState === 1) {
                puzzleData.rows[row][column].currentState++;
                // next state is yellow
                this.style.backgroundColor = "rgb(255,255,0)";
            }
            // current state of yellow/2
            else if(puzzleData.rows[row][column].currentState === 2) {
                puzzleData.rows[row][column].currentState = 0;
                // next state is default/gray
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

        // creating the 'show incorrect squares' checkbox
        let checkSquaresBox = document.createElement('input');
        checkSquaresBox.type = "checkbox";
        checkSquaresBox.id = "checkbox";
        checkSquaresBox.style.marginLeft = 10 + "px";

        // fires on the 'change' event of the checkbox aka checking and unchecking
        checkSquaresBox.addEventListener('change', function () {
            let rowCount = 0;
            puzzleData.rows.map((row) => {
                // getting the squares that can be toggled
                row.filter((square) => square.canToggle)
                .map((square) => {
                    // getting the square from the document
                    var theSquare = document.querySelector('#t' + rowCount + '-' + row.indexOf(square));
                    // if the square's current state is wrong and not default
                    // AND the state of the checkbox is checked
                    if(square.currentState !== square.correctState && square.currentState !== 0 && checkSquaresBox.checked) {
                        // highlighting the square with a red border
                        theSquare.style.border = "2px solid red";
                    }
                    else {
                        // setting the border back to default
                        theSquare.style.border = "inherit";
                    }
                })
                rowCount++;
            })
        },false)

        // creating a label for the checkbox
        let checkSquaresBoxLabel = document.createElement('label');
        checkSquaresBoxLabel.htmlFor = "checkbox";
        checkSquaresBoxLabel.innerText = "Show incorrect squares";

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
	
})(); //anon IIFE