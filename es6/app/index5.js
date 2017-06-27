let z = [4,5,6]
//let four = z[0]
//let five = z[1]
// matches the order of the array you extract data from
let [four, five] = z
console.log(four, five)

// searches for consecutive elements and set to var in [ ]
let animal = ['Simba', 'Ed', 'Zazu']
let [lion, bird] = animal
console.log(lion, bird)

/*let king = {
   name: 'Mufasa',
   kids: 1
}

// can do the same in assignment with objects
// gets the variables one by one and assigns in order
//let {name, kids} = king
console.log(name, kids)
*/
let son = {
   name: 'Simba',
   parents: 2
}

// will cause error with no ( ) b/c of the scope of variables
let name, parents;
({name, parents} = son);
console.log(name, parents);
