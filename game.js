const gameField = [
    [null, null, "goblin", null, null, null, null, "troll", null, null],
    ["goblin", null, null, "troll", null, "cyclops", null, null, "goblin", null],
    [null, null, "troll", null, "goblin", null, "goblin", null, null, "cyclops"],
    ["goblin", null, "goblin", null, null, "cyclops", null, null, "goblin", null],
    [null, null, null, null, "goblin", null, "cyclops", "troll", null, "troll"],
    [
      "troll",
      "goblin",
      "cyclops",
      "goblin",
      null,
      null,
      "goblin",
      null,
      "cyclops",
      null,
    ],
    [null, null, null, null, null, "cyclops", null, null, null, null],
    [
      null,
      "cyclops",
      null,
      "goblin",
      "cyclops",
      null,
      null,
      "goblin",
      null,
      "troll",
    ],
    ["troll", null, "goblin", null, "goblin", "troll", null, null, null, null],
    [null, "goblin", null, null, null, null, "troll", "goblin", null, "dragon"],
  ];
  
  const MONSTERS = {
    goblin: {
      power: 10,
    },
    troll: {
      power: 20,
    },
    cyclops: {
      power: 50,
    },
    dragon: {
      power: 100,
    },
  };
  
  const stateOfGame = {
    player: {
      power: 10,
      position: {
        x: 0,
        y: 0,
      },
    },
  };

  const GAME_FIELD_SIZE = {
    WIDTH: gameField[0].length,
    HEIGHT: gameField.length,
  };
  
  const MOVEMENTS_OF_PLAYER = {
    up: "up",
    down: "down",
    right: "right",
    left: "left"
  };
  
  const movementsOfPlayer = {
    up: () => {
      stateOfGame.player.position.y -= 1;
    },
    down: () => {
      stateOfGame.player.position.y += 1;
    },
    right: () => {
      stateOfGame.player.position.x += 1;
    },
    left: () => {
      stateOfGame.player.position.x -= 1;
    },
  };
  
  const validation = () => {
    // TODO: проверить всё ли игровое поле корректное
    // TODO: проверить все ли строки одинаковые
  };
  
  const getAvailableMovements = () => {
    const availableMovements = [];
    
    if (stateOfGame.player.position.y >= 1) {
      availableMovements.push(MOVEMENTS_OF_PLAYER.up);
    }
  
    if (stateOfGame.player.position.y < GAME_FIELD_SIZE.HEIGHT - 1) {
      availableMovements.push(MOVEMENTS_OF_PLAYER.down);
    }
  
    if (stateOfGame.player.position.x >= 1) {
      availableMovements.push(MOVEMENTS_OF_PLAYER.left);
    }
  
    if (stateOfGame.player.position.x < GAME_FIELD_SIZE.WIDTH - 1) {
      availableMovements.push(MOVEMENTS_OF_PLAYER.right);
    }
    availableMovements.push("quit");
    return availableMovements;
  };
  
  const getMessageForMovement = (availableMovements) => {
    const movementString = `Введите направление движения(${availableMovements.join(
      ", "
    )}): `;
    const currentCoordinatesString = `Текущие координаты x: ${stateOfGame.player.position.x} y: ${stateOfGame.player.position.y}`;
        
    return `${currentCoordinatesString}\n${movementString}`;
  };

  function Log() {
    this.moveCount = 0;

    let logs = [];

    this.writeStep = function(playerInput){
        let logObj = {
            nameMove: "Ход " + (++this.moveCount),
            playerInput: playerInput
        }
        logs.push(logObj)
        
    }

    this.getAllLog = function(){
        return logs;
    }

    this.getLogByIndex = function(index){
        
        return logs[index];
    }
  }
  const log = new Log();
  while (true) {
    
    const availableMovements = getAvailableMovements();
    const stringMovementOfPlayer = prompt(
      getMessageForMovement(availableMovements)
    );
   
    if (availableMovements.indexOf(stringMovementOfPlayer) === -1) {
       
        // некорректный ввод
      alert("Некорректный ввод, попробуйте еще раз");
  
      //TODO: вернуть continue после отладки
      continue;
      //continue;
    }

   //выход
    if(stringMovementOfPlayer == "quit"){
        log.writeStep("quit");
        alert("Выход");
        break;
    }

    movementsOfPlayer[stringMovementOfPlayer]();
    log.writeStep(stringMovementOfPlayer);


    // проверка на монстра
    const gameCell =
      gameField[stateOfGame.player.position.y][stateOfGame.player.position.x];
    if (gameCell === null) {
      continue;
    }
  
    const monster = MONSTERS[gameCell];
    // сражение с монстром
    let messageOfBattle = `Вы встретили монстра ${gameCell}\n`;
    if (stateOfGame.player.power >= monster.power) {
      stateOfGame.player.power += monster.power;
      messageOfBattle += "Вы выиграли\n";
      messageOfBattle += `Ваша сила теперь ${stateOfGame.player.power}`;
      alert(messageOfBattle);
    } else {
      messageOfBattle += "Вы проиграли\n";
      messageOfBattle += "Конец игры";
      alert(messageOfBattle);
    }
  }
  

    while (true) {
        const strMoveNumberInLog = prompt(
            `Было произведено шагов в игре: ${log.moveCount} 
            \n Для просмотра введите нужный шаг
            \n Или напишите quit для выхода`
        );

        if (strMoveNumberInLog == "quit") {
            alert("Выход");
            break;
        }
        if (isNaN(strMoveNumberInLog)) {
            alert("Введите число");
            continue;
        }
        const logIndex =  parseInt(strMoveNumberInLog)-1;

        if (logIndex < 0  || logIndex > log.moveCount - 1) {
            alert("Такого шага нет");
            continue;
        }
        alert(`Имя хода - ${log.getLogByIndex(logIndex).nameMove}
        \n Значение ввода - ${log.getLogByIndex(logIndex).playerInput}`); 
    }
  