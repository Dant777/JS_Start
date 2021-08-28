createChessBoard();

function createChessBoard() {
    const BOARD_LETTERS = ["", "a", "b", "c", "d", "e", "f", "g", "h"];
    const COLLECTION_PAWN_CHAR = ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"];
    const COLLECTION_CHAR = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];

    let hwChessBoardDiv = document.getElementById("hw-chess-board");

    let chessBoardTable = document.createElement("table");
    chessBoardTable.className = "chess-board";

    let tableTBody = document.createElement("tbody");
    tableTBody.id = "chess-table"

    hwChessBoardDiv.appendChild(chessBoardTable);
    chessBoardTable.appendChild(tableTBody);

    let table = document.getElementById('chess-table');

    createLettersRow();

    for (let i = 8; i > 0; i--) {
        
        if (i%2 == 0) {
            
            createColorCellRow(i, true);
        }else{
            createColorCellRow(i, false);
        }
        
    }

    addChessCherInCell(1, COLLECTION_CHAR);
    addChessCherInCell(2, COLLECTION_PAWN_CHAR);
    addChessCherInCell(7, COLLECTION_PAWN_CHAR);
    addChessCherInCell(8, COLLECTION_CHAR);


    function createLettersRow() {
        let tableTR = document.createElement("tr");
        tableTBody.appendChild(tableTR);

        for (let i = 0; i < BOARD_LETTERS.length; i++) {
            let tableTH = document.createElement("th");
            tableTH.innerHTML = BOARD_LETTERS[i];
            tableTR.appendChild(tableTH);
        }
    }

    function createColorCellRow(rowNumber, isLightFirst) {
        let tableTR = document.createElement("tr");
        tableTBody.appendChild(tableTR);
        let tableTH = document.createElement("th");
        tableTH.innerHTML = rowNumber;

        tableTR.appendChild(tableTH);
        for (let i = 0; i < 8; i++) {
            if (isLightFirst) {
                if (i % 2 == 0) {
                    let tableTD = document.createElement("td");
                    tableTD.className = "light";
                    //tableTH.innerHTML = "";
                    tableTR.appendChild(tableTD);
                } else {
                    let tableTD = document.createElement("td");
                    tableTD.className = "dark";
                    //tableTH.innerHTML = "";
                    tableTR.appendChild(tableTD);
                }
            } else {
                if (i % 2 == 0) {
                    let tableTD = document.createElement("td");
                    tableTD.className = "dark";
                    //tableTH.innerHTML = "";
                    tableTR.appendChild(tableTD);
                } else {
                    let tableTD = document.createElement("td");
                    tableTD.className = "light";
                    //tableTH.innerHTML = "";
                    tableTR.appendChild(tableTD);
                }
            }
        }
    }

    function addChessCherInCell(index, chessChars) {
        
        for (let i = 0; i < chessChars.length; i++) {
            let cell = table.rows[index].cells[i + 1];
            cell.innerHTML = chessChars[i];

        }
    }
}
