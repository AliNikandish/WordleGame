type LetterProps={
    letterPos:number
    attemptVal:number
}

type letterState="correct"|"almost"|"error"

type KeyProps={
    keyVal:string
    bigKey?:boolean
    disabled?:boolean
}