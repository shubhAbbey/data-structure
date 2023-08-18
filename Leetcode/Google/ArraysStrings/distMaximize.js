var maxDistToClosest = function(seats) {
    let left = -1, seat = 0, maxDist = 0, currMax = 0
    for(seat = 0; seat < seats.length; seat++){
        if(seats[seat] === 1) {
            if(left === -1) maxDist = Math.max(maxDist, currMax)
            else maxDist = Math.max(maxDist, Math.floor((seat-left)/2))
            left = seat
            currMax = 0
        }
        else currMax++
    }
    if(seats[seats.length-1] === 0) maxDist = Math.max(maxDist, seat-left-1)
    return maxDist
};