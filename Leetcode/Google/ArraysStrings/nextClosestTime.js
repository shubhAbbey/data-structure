var nextClosestTime = function(time) {
    let minutes = (parseInt(time.substr(0,2))*60)+
        parseInt(time.substr(3))
    let set = new Set(...time.replace(':','').split())
    while(true){
        minutes++
        if(minutes > 1440) minutes = 0
        let hours = Math.floor(minutes/60).toString(), mins = (minutes%60).toString()
        if(hours.length < 2) 
            if(hours == 0) hours = '00'
            else hours = '0'+hours
        if(mins.length < 2) 
            if(mins == 0) mins = '00'
            else mins = '0'+mins
        let original = [...hours.split(''), ...mins.split('')], isValid = true
        for(let i = 0 ; i < original.length; i++){
            if(!set.has(original[i])) isValid = false
        }
        if(isValid) {
            original = [original[0]+original[1], ':', original[2]+original[3]]
            return original.join('')
        }
    }
};
// O4(minutes increased)