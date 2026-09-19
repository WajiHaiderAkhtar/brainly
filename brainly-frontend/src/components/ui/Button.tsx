import type { ReactElement } from "react"

interface ButtonInterface{
    variant : "primary" | "secondary";
    text : string;
    startIcon : ReactElement ;
}
const variantClass = {
    "primary" : "bg-purple-600 text-white" ,
    "secondary" : "bg-purple-200 text-purple-600"
}

const defaultStyle = "px-4 py-2 rounded-md font-light flex items-center" 

export function Button({variant , text , startIcon} : ButtonInterface){
    return <button className={variantClass[variant] + " " + defaultStyle}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}







// BELOW WAS JUST TO LEARN , REAL CODE ABOVE

/*
// To understand lets make button comp in jsx 

import type { ReactElement } from "react"

// now to define how the basic structure of button will look like we will define interface just like we do in function sum(a:number , b:number){}
interface ButtonInterface{
    title : string,  // now in one button there can be string or an icon svg or say Element(react element). But doing this wont utilize full pow of typescript , so to write this in enhanced way we will accept only string as title and introduce new props start elment and end elem.
    size : "lg" | "md" | "sm",
    startIcon? : ReactElement, // here ? means its optional we can give and can not it wont show error
    endIcon? : ReactElement
}

// now for size field there are multiple choice so for each choice we have to define an if condition so to remove that we will make an object containing values and we will access then by sizeStyle[props.size]
const sizeStyles = {
    "lg" : "px-8 py-4 text-xl",
    "md" : "px-6 py-3",
    "sm" : "px-4 py-2",
}

export function Button (props : ButtonInterface){
    return <button className={sizeStyles[props.size]}>
        {props.startIcon}
        {props.title}
        {props.endIcon}
    </button>
}
*/