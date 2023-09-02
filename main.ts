// let username = 'dave'
// console.log (username)

// let myName: string = 'gio'
// let meaningOfLife:number;
// let isLoading:boolean;
// let album:any;

// myName = 'gio'
// meaningOfLife = 40
// isLoading = true
// album = 5051

// const sum =(a:number, b:string) =>{
//     return a + b
// }

// let postId: string | number

// let re: RegExp = /\w+/g

// let stringArr = ['one', 'hey', 'dave']

// let guitars = ['strat', 'les paul', 5150]

// let mixedData = ['evh', 1984, true]

// stringArr[0] = 'john'
// stringArr.push('hey')

// guitars[0] = 1984
// guitars.unshift('jim')

// // Tuple
// let myTuple:[string,number,boolean] = ['john', 42, true]

// let mixed = ['john', 50, false]

// mixed = myTuple
// // myTuple = mixed                  es shecdomaaa
// myTuple[1] = 42

// Objects

// let myObj: object 
// myObj = []



// ====================GAKVETILI MEORE   ARRAYS==================


// // ==== type an interface==============
// type Guitarist = {
//     name?: string,
//     active: boolean,
//     albums: (string|number)[]
// }

// let evh: Guitarist ={
//     name: 'eddie',
//     active: false,
//     albums: [1984, 5150, 'ou765']
// }

// let pj: Guitarist ={
//     name: 'giorgi',
//     active: true,
//     albums: [1984, 5150, 'ou765']
// }

// pj = evh

// const greetGuitarist = (guitarist: Guitarist) => {
//     return 'hello ${guitarist.name}'
// }

// console.log (greetGuitarist(pj))



// // ==== Enums ========
// enum Grade{
//     U = 1,
//     D,
//     C,
//     A,
//     B,
// }




// =========== MESAME GAKVETILI FUNCTIONS===============

// ======== Aliases==========

type stringornumber = string | number

type stringornumberarray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringornumberarray
}

type userId = stringornumber


// ========== Literal Types====

let myName: 'john'

let username: 'dave' | 'amy' | 'giorgi'
username = 'dave'

// ===== functions =======
const add = (a:number, b:number,): number => {
    return a + b
}

// ====== void aris romelsac ar aqvs return ========
const logmsg = (message: any): void => {
    console.log(message)
}

logmsg('Hello')
logmsg(add(2, 3))

// ======== Mapping ================>

const store = new Map([
    ["t-shirt", 20],
    ["underwear", 30],
    ["jeans", 50],
    ["socks", 60]
  ]);
  
  store.forEach((_value, _key) => console.log('${key} $ ${value}'));