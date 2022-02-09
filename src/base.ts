let a1: number = 1
let a2: number = 0x123
let a3: number = 0o17
let a4: number = 0b1010

console.log('number type')
console.log(a1,a2,a3,a4,)

let b1: string = 'zyc'

let und: undefined = undefined

let nul: null = null


let list1: number[] = [1,2,3,4]
let list2: Array<boolean> = [true, false, false]


let t1: [number, boolean]
t1 = [12, false]

enum gener {
  man, 
  woman
}

console.log('enumeration', gener)
console.log(typeof gener)

let zyc: gener = gener.man
let hmr: gener = gener.woman
