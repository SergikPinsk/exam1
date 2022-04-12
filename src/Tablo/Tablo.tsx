import React from "react";
import './Tablo.css'

type TabloPropsType = {
    num: number
}

export const Tablo =(props: TabloPropsType)=> {
    return (
        <div className="tablo">
            <div> <h3 className={props.num === 5 ? 'active' : ''}>{props.num}</h3></div>
        </div>
    )
}