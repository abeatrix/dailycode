// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

window.onload = function(){
    class Spaceship {
        constructor(hull=20, firepower=5, accuracy=7){
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy = accuracy;
        }

        attackNow(target) {
            if (Math.random() < (this.accuracy/10)){
                target.hull -= this.firepower;
                if (target.hull > 0){
                    alert(`YES! You hit them! \n The alien has ${alienships.spaceship[0].hull} health left and there are ${alienships.spaceship.length} alien ships remain!`);
                } else {
                    alert(`Yes! You got them with the laser! That alien is now dead, and there are ${alienships.spaceship.length-1} alien ships remain!`)
                };
            } else {
                alert(`You tried to shoot laser at them but they are too fast! They dodged! The alien has ${alienships.spaceship[0].hull} health remain. `)
            }
        }
    }

    const captainShip = new Spaceship();

    // Random Number Generator
    const randomNum = function(min, max){
        if (min || max > 0){
            return Math.floor((Math.random()*(max-1)) + min);
        }
    }

    class AlienSpaceship {
        constructor(serialNumber){
            this.hull = randomNum(3, 6);
            this.firepower = randomNum(2, 4),
            this.accuracy = randomNum(6, 8),
            this.serialNumber = serialNumber;
        }

        attackNow(target) {
            if (Math.random() < (this.accuracy/10)){
                target.hull -= this.firepower;
                alert(`Uh-oh! Captain has been hit! Your health is down to ${captainShip.hull}.`);
            } else {
                alert(`They tried to hit us! But we dodged sucessfully!\n Good job captain!`);
            }

        }
    }

    class Factory {
        constructor(){
            this.spaceship = [];
        }

        generateShip(){
            const newAlienSpaceship = new AlienSpaceship (this.spaceship.length); // this.spaceship.length = serialNumber
            this.spaceship.push(newAlienSpaceship);
        }
    }


    const alienships = new Factory();
    alienships.generateShip();
    for(let i = 0; i < 5 ; i++){
        alienships.generateShip();
    }

// THE BATTLE BEGIN //
    function gameStart() {
        alert(`Let shoot them with your laser gun!`)
        while(captainShip.hull >= 0 && alienships.spaceship.length > 0){
            captainShip.attackNow(alienships.spaceship[0]);
            if(alienships.spaceship[0].hull <= 0 && alienships.spaceship.length > 0){
                alienships.spaceship.shift();
                var playerInput = prompt(`Good job captain! You got one of them!! \n You have ${captainShip.hull} health left and  ${alienships.spaceship.length} aliens waiting to attack! \n Would you like to retreat? Yes or No?`);
                if (playerInput == "Yes" || playerInput == "yes" ){
                        alert("you have retreated successfully");
                        document.getElementById("resultText").innerHTML = `You will get them all next time! \n You left with ${captainShip.hull} health, and there were ${alienships.spaceship.length} alien ships waiting to attack`;
                        break;
                } else {
                        alert("OK! Let's continue!")
                };
            }
            alienships.spaceship[0].attackNow(captainShip);
            if(captainShip.hull <= 0){
                document.getElementById("resultText").innerHTML = "ALIEN WON! CAPTAIN IS NOW DEAD! RIP";
                break;

            }
            if(alienships.spaceship.length <= 0) {
                document.getElementById("resultText").innerHTML = "CAPTAIN HAS DESTROYED THE ALIEN!!";
                break;
            };
        };
    }



    document.getElementById("start").addEventListener("click", gameStart);

}
