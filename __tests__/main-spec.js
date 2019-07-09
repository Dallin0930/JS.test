/* const add = require('../main');

it ('should return MutipleTAble when given start and end', () => {
    expect(add(2, 3)).toBe(5);
});   */


function getMutipleTable(startNum,endNum)
{
    for(var i=startNum;i<=endNum;i++)
    {
        for(var k=startNum;k<=i;k++)
        {
            console.log(i+"*"+k+"="+i*k);
        }
    }
}

 getMutipleTable(3,5);
   




