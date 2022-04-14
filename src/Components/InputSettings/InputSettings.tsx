import React, {ChangeEvent, useState} from "react";
import s from "../TabloSettings/TabloSettings.module.css";

type InputPropsType = {
    setValueMax: (e:string)=> void
    setValueMin: (e:string)=> void
    onChangeHandlerMax:(e:ChangeEvent<HTMLInputElement>)=> void
    onChangeHandlerMin:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const InputSettings = (props:InputPropsType) => {

    return (
        <div>
            <div className={s.max}>
                <span>max value</span>
                <input type="number" onChange={props.onChangeHandlerMax}/>
            </div>
            <div className={s.min}>
                <span>min value</span>
                <input type="number" onChange={props.onChangeHandlerMin}/>
            </div>
        </div>
    )
}