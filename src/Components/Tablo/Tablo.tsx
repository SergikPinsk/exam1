import React from "react";
import './Tablo.css'

type TabloPropsType = {
    valueMax: string
    num: number
    error: string
    lokalMax:string
    lokalMin:string
}

export const Tablo =(props: TabloPropsType)=> {


    return (
        <div className="tablo">
            <div> <h3 className={props.num === +props.valueMax ? 'active' : ''}> {props.lokalMax === props.lokalMin && +props.lokalMax || +props.lokalMin < 0 ? props.error : props.num}</h3></div>
        </div>
    )
}