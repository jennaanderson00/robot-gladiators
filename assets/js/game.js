// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo"]
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function() {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

// Game States
// "WIN" - player robot has defeated all enemy robots
// * fight all enemy robots
// * defeat each enemy robot
// "LOSE" - player robot's health is zero or less

// function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i <enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(enemyNames[i]);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after loop, player is out of health or robots to fight
    endGame();
}

// function to end the entire game
var endGame = function() {
    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " .");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

//start the game when the page loads
startGame();