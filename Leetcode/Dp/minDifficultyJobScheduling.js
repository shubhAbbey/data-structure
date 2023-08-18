var minDifficulty = function(jobDifficulty, d) {
    const len = jobDifficulty.length
    
    if (len < d) return -1
    
    // maximum job difficulty array
    const hardestRemaining = []
    let hardestJob = 0
    
    for (let i = len - 1; i >= 0; i--) {
        hardestJob = Math.max(hardestJob, jobDifficulty[i]);
        hardestRemaining[i] = hardestJob
    }
    
    const memo = new Array(len).fill(-1).map(() => new Array(d+1).fill(-1))
    const dp = (i, day) => {
        // returns maximum difficulty job left for the last day
        if (day === d) return hardestRemaining[i]
        
        if (memo[i][day] === -1) {
            let daysLeft = len - (d-day) // days left  
            let best = Infinity;
            let hardest = 0;
            
            for (let j = i; j < daysLeft; j++) {
                hardest = Math.max(hardest, jobDifficulty[j])
                best = Math.min(best, hardest + dp(j+1, day+1))
            }
            memo[i][day] = best;
        }
        return memo[i][day]
    }
    
    return dp(0, 1)
};


// var minDifficulty2 = function(job, d) {
//     // define dp[i][j] to be the minimum difficulty of a job schedule starting at ith work when j days have passed
//     let dp = [];
//     for( let i = 0; i < job.length; i++) {
//         dp.push([]);
//     }
//     dp.forEach((e,x) => {
//         for (let i = 0; i < d; i++) {
//             dp[x].push(Number.POSITIVE_INFINITY);
//         }
//     })
    
//     // setup the base cases
//     dp[job.length - 1][d - 1] = job[job.length - 1];
    
//     // On the last day, we must schedule all remaining jobs, so dp[i][d]
//     // is the maximum difficulty job remaining
//     for (let i = job.length - 2; i >= 0; i--) {
//         dp[i][d - 1] = Math.max(dp[i+1][d-1], job[i]);
//     }
    
     
//     // iterate through each remaining day
//     // get minimum of all (hardest work + the minimum of dp[i][d] where i excluded from today and d > today)
//     for (let day = d - 2; day >= 0; day--) {
//         for (let i = day; i <= job.length - (d - day); i++) {
//             let hard = 0;
            
//             // Iterate through the options and choose the best
//             for (let x = i; x <= job.length - (d - day); x++) {
//                 hard = Math.max(hard, job[x]);
//                 dp[i][day] = Math.min(dp[i][day], hard + dp[x+1][day + 1]);
//             }
//         }
//     }
//     console.log(dp)
    
    
    
//     return dp[0][0] === Number.POSITIVE_INFINITY? -1:dp[0][0];
// };

// 1,2,3,4,5
// 

console.log(minDifficulty([6,5,10,3,2,1], 3))