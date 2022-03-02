/* Q1. Write a function strlength() which takes
i) your name
ii) a function which it will call with the length  of your name.
Now call this function with the two parameters:
i) your name
ii) a function. This function will get the length of the string. Use that length to print a message"OMG! My name is X char long!"*/

const strlength = (yourname, cb) => {
const lengthOfName = yourname.length;
cb(lengthOfName);
}

const printName = (nameLength) => 
console.log(`OMG! My name is ${nameLength} char long!`);

strlength("sahiba", printName);

/* Q2. Write a function willThanosKillMe().
The function will take three parameters
i) your name
ii) function to call if thanos doesn't kill you.
iii) function to call if thanos kill you.
This function will call success callback if your name has even characters you won't die.
But if your name has odd number of characters then you are going to die, Sorry!!!.
Now call this function with given parameters. The success function should console a happy message: "Yay! I am alive!" and the failure function will give : "Give my bose speakers & headphones to my brother." */

const willThanosKillMe = (person, willNotKill, willKill) => {
    if(person.length%2 == 0){
            willNotKill();
    }else {
        willKill();
    }
}

const willNotKill = () => console.log("Yay! I am alive");
const willKill = () => console.log("Give my bose speakers & headphones to my brother");

willThanosKillMe("sahiba", willNotKill, willKill);
willThanosKillMe("anshu", willNotKill, willKill);

