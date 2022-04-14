import React from "react";
import './Button.css'

type ButtonPropsType = {
    changeNumber: ()=>void,
    resetButton: ()=> void,
    num: number
    valueMax:number
    valueMin: number
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div className="click">
            <button disabled={props.num >= props.valueMax ? true : false } onClick={()=> props.changeNumber()}>inc</button>
            <button disabled={props.num === props.valueMin ? true : false} onClick={()=> props.resetButton()}>reset</button>
        </div>
    )
}