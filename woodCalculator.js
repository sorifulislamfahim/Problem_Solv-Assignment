//WOOD CALCULATOR
function woodCalculator(chair, table, bed){
    const chairWood = chair * 1;
    const tableWood = table * 3;
    const bedWood = bed * 5;
    if(chair < 0){
        return "Quanity cannot be Ngative.";
    }
    if(table < 0){
        return "Quanity Cannot be Nagative";
    }
    if(bed < 0){
        return "Quanity Cannot be Nagative.";
    }
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
let result = woodCalculator(1, 3, 6);
console.log(result);