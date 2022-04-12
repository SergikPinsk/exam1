import React from "react";
import './Button.css'

type ButtonPropsType = {
    changeNumber: ()=>void,
    resetButton: ()=> void,
    num: number
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div className="click">
            <button disabled={props.num >= 5 ? true : false } onClick={()=> props.changeNumber()}>inc</button>
            <button disabled={props.num === 0 ? true : false} onClick={()=> props.resetButton()}>reset</button>
        </div>
    )
}