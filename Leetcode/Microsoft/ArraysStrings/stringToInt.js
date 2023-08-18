var myAtoi = function(s) {
    return isNaN(parseInt(s)) ? 
            0 : parseInt(s) >= Math.pow(2,31) ? Math.pow(2,31)-1 : parseInt(s) < Math.pow(-2,31) 
        ? Math.pow(-2,31) 
    : parseInt(s)
};

myAtoi("   -42dff")