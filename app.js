






let userName = prompt("please enter your name?");
 alert("welcome " + userName);
document.write(`<span id="userName">welcome ${userName}</span>`);
console.log(`please enter your name? `+ userName);
alert("please enter your name?" + userName);

let Age = prompt('how old are you?');
alert(`how old are you?  ` + Age + "                     please enter your name?    " + userName);
console.log(`how old are you?`+ Age);



let package= prompt('which package do you want?1,2,3');
document.write(package);
console.log(`which package do you want?1,2,3`+ package);
alert(` which package do you want?1,2,3 `+ package + `      how old are you?  ` + Age + "             please enter your name?    " + userName)


let howmany = prompt("how many packages do you want?");
alert("how many packages do you want?         " + howmany + "       which package do you want?1,2,3 "+ package + `  how old are you?    ` + Age + "             please enter your name?    " + userName);
document.write(package);
console.log(`how many packages do you want?`+ howmany);



alert(`you ordered   `+howmany + `  package/s`);
alert(`Thank you for trusting us   `+ userName );
