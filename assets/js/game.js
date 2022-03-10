var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 20;

var fight = function(enemyName) {
    // repeat as long as the enemy is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // fight or skip prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
         // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");  
                // subtract money as penalty
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // when player attacks enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award money for win
            playerMoney = playerMoney + 20;
            // leave loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // when enemy attacks player
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player chooses to fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // subtract player attack from enemy health
            enemyHealth =enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //subtract enemy attack from player health
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    
            // if no, ask question by running fight() again
            else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try  again!");
        }
    }
}

// Game States
// "WIN" - plater robot has defeated all enemy robots
// * fight all enemy robots
// * defeat each enemy robot
// "LOSE" - player robot's health is zero or less

// run fight function
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
