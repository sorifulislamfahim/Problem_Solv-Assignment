function brickCalculator (floor){
    if(floor < 0){
        return "value Cannot be Nagative"
    }
    else if (floor <= 10){
        var brick = floor * 15 * 1000;
        return brick;
    }
    else if (floor <= 20){
        floor = floor - 10;
        var brick = 15000 + floor + 12 + 1000;
        return brick;
    }
    else{
        floor = floor - 20;
        var brick = 27000 + floor * 10 * 1000;
        return brick 
    }
}
let result = brickCalculator(21);
console.log(result);