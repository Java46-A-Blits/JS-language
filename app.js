/////////  STRINGS  \\\\\\\

// const str1 = "abc";
// const str2 = "abc";
// console.log(`str1 == str2 is ${str1==str2}`);// -> str1==str2 is true
// console.log(`str1 < "s" is ${str1 < "s"}`);  // -> str1 < "s" is true
// console.log(`"123" > 23 is ${"123">23}`);    // -> 123" > 23 is true (string and num => both  number)
// console.log(`"123" > "23" is ${"123">"23"} `); // -> "123" > "23" is false (string and string => both string)
// console.log(`"abc" > 23 is ${"abc">23} `);  // logical  expression conains Nan will give a false
// console.log(`"abc" < 23 is ${"abc"<23} `);  // -> the same as of above
// console.log(`"abc" != 23 is ${("abc"!=23)} `); // != equals to  !("abc"==23) then ! false is true. 
// console.log(`+"12" + 12 = ${+"12" + 12}`) //  -> 24 
// console.log(`"12" + 12 = ${"12" + 12}`) //  -> 1212 
// /// **********    
// function stringProcessing(str){
//     const strP=""+str;
//     console.log(`${strP}[4] is ${strP[4]}`);
//     console.log(`lenght of ${strP} is ${strP.length}`);
//     console.log(`${str} includes "sha" is ${strP.includes("sha")}`);
//     console.log(`substring of ${strP} beginning from index 2 to index 5 is ${strP.substring(2,5)}`);
//     console.log(`index of letter "a" is ${strP.indexOf("a")} ; last index of letter "a" is ${strP.lastIndexOf("a")}`)

// } stringProcessing("Sashaaa");


////////////////     HOMEWORK 11  - STRINGS  \\\\\\\\\\

function encode(num, baseString){
  
    let wrongFlag = false;
        for(let i=0; i<baseString.length; i++){
            if( i !== baseString.lastIndexOf(baseString[i])){
                wrongFlag = true;
                console.log(`basestring has repeaed sign ${baseString[i]}`)
            }
        }
    if (! wrongFlag){
            let res = "";
            do {
                const digit = num % baseString.length;  // for the last case console.log(1 % 2 )=>1
                const symb = baseString[digit];
                res = symb + res; 
                num = Math.trunc(num / baseString.length); 
            } while(num >= 1);
        return res;
    }    
}

console.log(encode(10,'01'));


// write function --->>>   function encode (num, codingString)
// codingString - any  string with  no  repeated symbols 
//base = length of codingString
//algorithm the same
//getSymbol (digit, codingString) using operator []
