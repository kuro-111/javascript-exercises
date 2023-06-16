const sumAll = function(numStart, numEnd) {

    if (typeof numStart !== 'number' || typeof numEnd !== 'number') {
       return "ERROR";
       }
 
 else if(numStart<0 || numEnd<0) {
       return "ERROR";
           }

  else if (numEnd < numStart) {
       return (((numStart-numEnd)+1) * (numEnd+numStart))/2;
       }
   
  
          
   else if(numStart < numEnd) {
         return (((numEnd-numStart)+1) * (numStart+numEnd))/2;
       }
    }



// Do not edit below this line
module.exports = sumAll;
