// To understand lets make button comp in jsx 

// now to define how the basic structure of button will look like we will define interface just like we do in function sum(a:number , b:number){}
interface ButtonInterface{
    title : string , 
    size : "lg" | "md" | "sm"
}

// now for size field there are multiple choice so for each choice we have to define an if condition so to remove that we will make an object containing values and we will access then by sizeStyle[props.size]
const sizeStyles = {
    "lg" : "px-8 py-4 text-xl",
    "md" : "px-6 py-3",
    "sm" : "px-4 py-2",
}

export function Button (props : ButtonInterface){
    return <button className={sizeStyles[props.size]}>
        {props.title}
    </button>
}
