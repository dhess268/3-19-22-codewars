// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

let musketeers = ["Athos", "Porthos", "Aramis"]

for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}

musketeers.push("D'Artagan")

musketeers.forEach(musk => {
    console.log(musk)
})

musketeers.splice(2, 1)

for(const person of musketeers){
    console.log(person)
}