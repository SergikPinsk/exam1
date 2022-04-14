import React, {ChangeEvent, useState} from "react";
import s from './TabloSettings.module.css'
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {ButtonSettings} from "../ButtonSettings/ButtonSettings";
import {InputSettings} from "../InputSettings/InputSettings";

export type SettingsPropsType = {
    valueMax:string
    setValueMax: (e:string)=>void
    setValueMin: (e:string)=> void
    onClick: ()=> void
    onChangeHandlerMax:(e:ChangeEvent<HTMLInputElement>)=>void
    onChangeHandlerMin:(e:ChangeEvent<HTMLInputElement>)=>void
    resultMax: number
    lokalMax:string
    disabled: boolean
}

export const TabloSettings = (props:SettingsPropsType) => {

  return (
        <div className={s.tablo}>
            <InputSettings
                setValueMax={props.setValueMax}
                setValueMin={props.setValueMin}
                onChangeHandlerMax={props.onChangeHandlerMax}
                onChangeHandlerMin={props.onChangeHandlerMin}
            />
            <ButtonSettings
                onClick={props.onClick}
                resultMax={props.resultMax}
                lokalMax={props.lokalMax}
                disabled={props.disabled}
            />
        </div>
    )
}

