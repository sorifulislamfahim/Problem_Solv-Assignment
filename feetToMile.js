//Feet to Mile

function feetToMile (feet){
    const mile = feet / 5280;
    if(feet < 0){
        return "Distance cannot be negative."
    }
    return mile;
}
let result = feetToMile(102800);
console.log(result);