// Setup: You want to know whether the train or your car is a faster commute.
// You alternate transportation methods, recording your commute time in minutes every day.

const carCommuteTimes = [43, 48, 39, 37, 47, 46, 46, 35, 42, 49];
const trainCommuteTimes = [30, 62, 41, 39, 38, 31, 51, 53, 34, 40];

// Challenge: write a program that determines which commute is faster ON AVERAGE.
// How will you know if you've succeeded?
//   -> Use node to execute this file. You should see output that logs out which commute is faster on average

// Hint: write a function that computes the average of an array of numbers.
//   Use this function to find the average commute time for the train and for your car.
    function averageArray(carCommute, trainCommute) {
    let carTotal = 0
    const carCommuteTimes = [43, 48, 39, 37, 47, 46, 46, 35, 42, 49];
    for(let i of carCommuteTimes) {
    carTotal += carCommuteTimes[i]
    avg = carTotal / 10
    }

    let trainTotal = 0
    const trainCommuteTimes = [30, 62, 41, 39, 38, 31, 51, 53, 34, 40];
    for(let n of trainCommuteTimes) {
    trainTotal += trainCommuteTimes
    avg = trainTotal / 10
    }

    }
    console.log(carTotal);
    console.log(trainTotal);