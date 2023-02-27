    //  4 > 3
    //  4 >= 3
    //  4 < 3
    //  4 <= 3
    //  4 == 4
    //  4 === 4
    //  4 != 4
    //  4 !== 4
    //  4 != '4'
    //  4 == '4'
    //  4 === '4'

     console.log(Boolean(4>3)); //t
     console.log(Boolean(4>=3)); //t
     console.log(Boolean(4<3));//f
     console.log(Boolean(4<=3)); //f
     console.log(Boolean(4==4)); //t
     console.log(Boolean(4===4)); //t
     console.log(Boolean(4!=4)); //f
     console.log(Boolean(4!==4)); //f
     console.log(Boolean(4!='4')); //f
     console.log(Boolean(4=='4')); //f
     console.log(Boolean(4==='4')); //f

     let str1= 'python';
     let str2= 'jargon';
     console.log(`length of python ${str1.length}`)
     console.log(`length of jargon ${str2.length}`)
     console.log(Boolean(str1==str2)); //making a falsy statement