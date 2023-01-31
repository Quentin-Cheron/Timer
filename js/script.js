const numberOne = document.querySelector(".numberOne");
const numberTwo = document.querySelector(".numberTwo");
const numberThree = document.querySelector(".numberThree");
const numberFour = document.querySelector(".numberFour");
const numberFive = document.querySelector(".numberFive");
const numberSix = document.querySelector(".numberSix");
const numberSeven = document.querySelector(".numberSeven");
const numberHeight = document.querySelector(".numberHeight");

let firstMinuteCounter = 1;
let secondMinuteCounter = 0;
let firstSecondCounter = 5;
let secondSecondCounter = 0;

let firstMinutesCountdown = 2;
let secondMinutesCountdown = 4;
let firstSecondsCountdown = 0;
let secondSecondsCountdown = 0;


const realTime = document.querySelector(".realTime");

let date = new Date;
realTime.firstElementChild.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

function timer () {
    setInterval(() => {
        if (firstSecondsCountdown === 0 && secondSecondsCountdown === 0 && firstMinutesCountdown != 0) {
            firstSecondsCountdown = 6;
            if (firstMinutesCountdown > 0 && secondMinutesCountdown > 0) {
                secondMinutesCountdown--;
            } else if (firstMinutesCountdown > 0 && secondMinutesCountdown === undefined) {
                firstMinutesCountdown--;
            } else if (firstMinutesCountdown > 0 && secondMinutesCountdown === 0) {
                secondMinutesCountdown = undefined;
                firstMinutesCountdown = 9;
            }
        } else if (firstSecondsCountdown > 0 && secondSecondsCountdown === 0) {
            firstSecondsCountdown--;
            secondSecondsCountdown = 9;
        } else if (secondSecondsCountdown > 0) {
            secondSecondsCountdown--;
        }

        if (secondSecondCounter === 9 && firstSecondCounter === 0) {
            secondSecondCounter = 0
            firstSecondCounter = 1;
        } else if (firstSecondCounter > 0 && secondSecondCounter === 9) {
            firstSecondCounter++;
            secondSecondCounter = 0;
        } else if (secondSecondCounter >= 0) {
            secondSecondCounter++;
        } if (firstSecondCounter === 6 && secondSecondCounter === 0) {
            firstSecondCounter = 0;
            secondSecondCounter = 0;
              if (firstMinuteCounter === 9 && secondMinuteCounter === undefined) {
                firstMinuteCounter = 1;
                secondMinuteCounter = 0;
            } else if (firstMinutesCountdown > 0 && secondMinuteCounter === undefined) {
                firstMinuteCounter++;
            } else {
                secondMinuteCounter++;
            }
        }
         
        switch (firstMinutesCountdown) {
            case 0:
                numberOne.firstElementChild.className = "borderTop borderLeft borderRight";
                numberOne.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberOne.firstElementChild.className = "borderLeft";
                numberOne.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberOne.firstElementChild.className = "borderTop borderRight borderBottom";
                numberOne.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberOne.firstElementChild.className = "borderTop borderRight borderBottom";
                numberOne.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberOne.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberOne.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberOne.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberOne.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberOne.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberOne.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberOne.firstElementChild.className = "borderTop borderRight borderBottom";
                numberOne.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberOne.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberOne.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberOne.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberOne.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberOne.firstElementChild.className = "";
                numberOne.lastElementChild.className = "";
                break;
        }
        switch (secondMinutesCountdown) {
            case 0:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderRight";
                numberTwo.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberTwo.firstElementChild.className = "borderLeft";
                numberTwo.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberTwo.firstElementChild.className = "borderTop borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberTwo.firstElementChild.className = "borderTop borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberTwo.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberTwo.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberTwo.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberTwo.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberTwo.firstElementChild.className = "borderTop borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberTwo.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberTwo.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberTwo.firstElementChild.className = "";
                numberTwo.lastElementChild.className = "";
                break;
        }
        switch (firstSecondsCountdown) {
            case 0:
                numberThree.firstElementChild.className = "borderTop borderLeft borderRight";
                numberThree.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberThree.firstElementChild.className = "borderLeft";
                numberThree.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberThree.firstElementChild.className = "borderTop borderRight borderBottom";
                numberThree.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberThree.firstElementChild.className = "borderTop borderRight borderBottom";
                numberThree.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberThree.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberThree.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberThree.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberThree.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberThree.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberThree.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberThree.firstElementChild.className = "borderTop borderRight borderBottom";
                numberThree.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberThree.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberThree.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberThree.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberThree.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberThree.firstElementChild.className = "";
                numberThree.lastElementChild.className = "";
                break;
        }
        switch (secondSecondsCountdown) {
            case 0:
                numberFour.firstElementChild.className = "borderTop borderLeft borderRight";
                numberFour.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberFour.firstElementChild.className = "borderLeft";
                numberFour.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberFour.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFour.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberFour.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFour.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberFour.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberFour.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberFour.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberFour.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberFour.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberFour.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberFour.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFour.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberFour.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberFour.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberFour.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberFour.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberFour.firstElementChild.className = "";
                numberFour.lastElementChild.className = "";
                break;
        }

        switch (firstMinuteCounter) {
            case 0:
                numberFive.firstElementChild.className = "borderTop borderLeft borderRight";
                numberFive.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberFive.firstElementChild.className = "borderLeft";
                numberFive.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberFive.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFive.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberFive.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFive.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberFive.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberFive.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberFive.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberFive.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberFive.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberFive.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberFive.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFive.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberFive.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberFive.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberFive.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberFive.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberFive.firstElementChild.className = "";
                numberFive.lastElementChild.className = "";
                break;
        }
        switch (secondMinuteCounter) {
            case 0:
                numberSix.firstElementChild.className = "borderTop borderLeft borderRight";
                numberSix.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberSix.firstElementChild.className = "borderLeft";
                numberSix.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberSix.firstElementChild.className = "borderTop borderRight borderBottom";
                numberSix.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberSix.firstElementChild.className = "borderTop borderRight borderBottom";
                numberSix.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberSix.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberSix.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberSix.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberSix.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberSix.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberSix.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberSix.firstElementChild.className = "borderTop borderRight borderBottom";
                numberSix.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberSix.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberSix.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberSix.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberSix.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberSix.firstElementChild.className = "";
                numberSix.lastElementChild.className = "";
                break;
        }
        switch (firstSecondCounter) {
            case 0:
                numberSeven.firstElementChild.className = "borderTop borderLeft borderRight";
                numberSeven.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberSeven.firstElementChild.className = "borderLeft";
                numberSeven.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberSeven.firstElementChild.className = "borderTop borderRight borderBottom";
                numberSeven.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberSeven.firstElementChild.className = "borderTop borderRight borderBottom";
                numberSeven.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberSeven.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberSeven.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberSeven.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberSeven.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberSeven.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberSeven.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberSeven.firstElementChild.className = "borderTop borderRight borderBottom";
                numberSeven.lastElementChild.className = "borderRight";
                break;
                numberSeven.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberSeven.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberSeven.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberSeven.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberSeven.firstElementChild.className = "";
                numberSeven.lastElementChild.className = "";
                break;
        }
        switch (secondSecondCounter) {
            case 0:
                numberHeight.firstElementChild.className = "borderTop borderLeft borderRight";
                numberHeight.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberHeight.firstElementChild.className = "borderLeft";
                numberHeight.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberHeight.firstElementChild.className = "borderTop borderRight borderBottom";
                numberHeight.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberHeight.firstElementChild.className = "borderTop borderRight borderBottom";
                numberHeight.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberHeight.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberHeight.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberHeight.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberHeight.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberHeight.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberHeight.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberHeight.firstElementChild.className = "borderTop borderRight borderBottom";
                numberHeight.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberHeight.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberHeight.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberHeight.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberHeight.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberHeight.firstElementChild.className = "";
                numberHeight.lastElementChild.className = "";
                break;
        }
    }, 1000)
}
timer();