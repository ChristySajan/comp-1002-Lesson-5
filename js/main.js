const itemElements = document.querySelectorAll(".price");
const totalElement = document.querySelector("#total");

const total = Array.from(itemElements)
    .reduce(sum, 0);

totalElement.textContent = Math.round(total * 100) / 100;

function sum (accum, ele) {
    const eleVal = Number(ele.textContent) || 0;
    
    return accum + eleVal;
}



// let sum=0;
// for(const item of items){
//     sum=sim+Number(item.textContent);

// }
// totalElement.textContent = Math.round(sum*100)/100;