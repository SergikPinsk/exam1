import React from "react";
import s from "../TabloSettings/TabloSettings.module.css";
type OnClickHandler = {
    onClick:()=>void
    resultMax:number
    lokalMax:string
    disabled:boolean

}
export const ButtonSettings =(props:OnClickHandler)=> {
    let loc = +props.lokalMax
    return (
        <div className={s.button}>
            <button disabled={props.disabled} onClick={()=>props.onClick()}>SET</button>
        </div>

    )
}