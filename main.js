function isInRangeOf1to1000 (startNum, endNum) {
    if(startNum>1&&startNum<1000&&endNum>1&&endNum<1000)
    {
          return true
    }else{
        return false
    }
   
}

/* module.exports = isInRangeOf1to1000(2,3) */

function printMultipleTable(startNum,endNum)
{
     for(var i=1;i<=startNum;i++)
     {
         for(var k=1;k<=endNum;k++) 
         {
             /* print(i +"*"+k+"="+i*k+"\n"); */
             console.log(i +"*"+k+"="+i*k+"\n");

         }
     } 
}  
module.exports = printMultipleTable(2,4)