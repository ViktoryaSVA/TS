const isFetching: boolean = true
const ifLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1,1,2,3,5,8,13]
const numberArray2: Array<number> = [5,3,8,5,7,9,45]

const stringArray: string[] = ['Hello', 'How are you?']

// Tuple
const contact: [string, number] = ['Vika', 123456789]

// Any
let variable: any = 42
variable = 'New String'

// =====>
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Vika')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type

type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = 'string'

type SomeType = string | null | undefined

