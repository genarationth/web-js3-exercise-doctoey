/*Exercise #2
Part 1
Ed would like a way to input 3 names of his friends. 
The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

Part 2
Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30

Part 3
Ed would like to create a function that prints out, Welcome {name1}, 
you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

*/

let edfriend = (name1, name2 , name3) =>{
    console.log(`Welcome ${name1}, ${name2}, ${name3}`)
}
// edfriend('t','o','e')


let edfriendyear = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const agenow =  currentYear - birthYear;
    return agenow;
}
edfriendyear(1990) //33


let printEdfriendwithAge = (name1, birthY1, name2, birthY2, name3, birthY3) => {
    const age1 = edfriendyear(birthY1)
    const age2 = edfriendyear(birthY2)
    const age3 = edfriendyear(birthY3)
    console.log(`Welcome ${name1}, you are ${age1}. 
Welcome ${name2}, you are ${age2}. 
Welcome ${name3}, you are ${age3}.`)
}


printEdfriendwithAge('Toey',1990,'Hate',1985,'Java',1995);