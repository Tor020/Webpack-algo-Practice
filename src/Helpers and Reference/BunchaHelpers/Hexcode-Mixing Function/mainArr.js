let hex1 = "f13d9b";
let hex2 = "28fea7";


let hexAverage = (hexOne, hexTwo) => {  
  let arr = []

      // function to convert decimal to hex
    function decimal2Hex(decimal) {
      return decimal.toString(16).padStart(2,'0');      
    }
      // function to hex to decimal
    function hex2Decimal(hexa) {
      return parseInt(hexa, 16);
    }

   let hex1 = Array.from(hexOne);
   let hex2 = Array.from(hexTwo);

   let spliceItPushIt =  (arr, amt) =>{
let num = amt;
     for (i = 0; i<num; i++){
     arr.push(arr.splice())
       }
   }

spliceItPushIt(hex1, 3);

console.log(hex1);

}

hexAverage(hex1, hex2)



