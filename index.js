<<<<<<< HEAD
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

console.log("----------------------");

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

console.log("----------------------");

/*Q3. Write a function that takes a message and a delay & print that message after that delay. */

const printAfterDelay = (message, delay) => setTimeout(()=>{
    console.log(message);
    console.log("----------------------")}, delay);

printAfterDelay("Sahiba Kumari", 1000);



/*Q4. Write a function which takes a message & time. The function should print that message every X interval. */

const printAtEachInterval = (msg, time) =>{
    const printMessage = setInterval(()=>{
        console.log(msg);
        clearInterval(printMessage);
        console.log("----------------------");
    }, 1000)
}
printAtEachInterval("Good morning", 1000);



/*Q5. Write a function that takes a number then print a countdown from that number to 0. At zero print "Bang Bang!" */

const printCountdown = (num) =>{
    const countDown = setInterval(()=>{
        console.log(num);
        num--;
        if(num===0){
            console.log("Bang Bang!")
            clearInterval(countDown);
        }  
    }, 1000);
}
printCountdown(10);

// Fake fetch: 

function fakeFetch(mesg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${mesg}`);
        }
        resolve(`from server: ${mesg}`);
      },0);
    });
}
  


/* Q6. Use the fakeFetch() to getdata & show on success. */
fakeFetch("Sahiba").then(data => console.log(data));


/* Q7. Print data on success, print error on failure. Call fakeFetch(msg, true) to get a rejected promise. Handle the error with error handlers. Show a message using console.error for errors. */

const successHandler = (data) => console.log(data);
const errorHandler = (err) => console.error(err);

fakeFetch("Neog", true).then(successHandler).catch(errorHandler); /*change the shouldReject value to false to see success message */


/* Chaining 
Q7. Create a function getServerResponseLength(msg). This function will use fakeFetch() internally with the message & return the length of the response by server. 
Note: Instead of returning the reponse from server this should return the length.
Hint: It will return a promise.
*/

const getServerResponseLength = (messageNew) => fakeFetch(messageNew).then(data => console.log(data.length));
getServerResponseLength("Welcome to Neog");

/* Q8. Waterfall Data
Write a function syncCallsToServer (msg1, msg2) which will take two msgs and call  fakefetch() with the second msg only when the first message has returned from the server.*/

const syncCallsToServer = (message1, message2) => {
    fakeFetch(message1).then(dataforMsg1 => fakeFetch(message2).then((dataforMsg2) => console.log({dataforMsg1, dataforMsg2})))
}

syncCallsToServer("Sahiba", "NeogStudent");

// Asyn-Await

/*Q9. Call fakeFetch() with some msg & use await to get the data & then print it . */

const getData = async() => {
    const data = await fakeFetch("I use async-await");
    console.log(data);
}

getData();

/* Q10. Waterfall question using async-await. */

const syncCallsToServer2 = async(newmessage1, newmessage2) => {
    const newDataforMsg1 = await fakeFetch(newmessage1);
    const newDataforMsg2 = await fakeFetch(newmessage2);
    console.log({newDataforMsg1, newDataforMsg2});
}

syncCallsToServer2("I am new message 1", "I am new message 2");

=======
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

>>>>>>> 3b3deb2f0bc6b893b9fdf04e142a9f9c309bbe42
