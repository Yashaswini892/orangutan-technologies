const readline = require('readline');

function countCompleteDayPairs(hours) {
    const remainderCount = new Array(24).fill(0);
    let pairCount = 0;

    for (let hour of hours) {
        const remainder = hour % 24;
        const complement = (24 - remainder) % 24;
        
        pairCount += remainderCount[complement];
        
        remainderCount[remainder]++;
    }

    return pairCount;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the array of hours (comma separated): ', (input) => {
    const hours = input.split(',').map(Number);
    
    const result = countCompleteDayPairs(hours);
    
    console.log(result);
    
    rl.close();
});
