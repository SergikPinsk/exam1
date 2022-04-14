import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from './Components/Button.tsx/Button';
import {Tablo} from './Components/Tablo/Tablo';
import {TabloSettings} from "./Components/TabloSettings/TabloSettings";

function App() {

    const [valueMax, setValueMax] = useState("")
    const [valueMin, setValueMin] = useState("")
    const [lokalMax, setLokalMax] = useState('')
    const [lokalMin, setLokalMin] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('Братан Так делать нельзя ')
    const [num, setNum] = useState(0)
    const resultMax = +valueMax
    const resultMin = +valueMin

   const  onClickHandler = () => {
        setDisabled(true)
        setValueMax(lokalMax)
        setValueMin(lokalMin)
        setNum(+lokalMin)

    }
    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        setLokalMax(event.currentTarget.value)
        setDisabled(false)

    }
    const onChangeHandlerMin = (event: ChangeEvent<HTMLInputElement>) => {
        setLokalMin(event.currentTarget.value)
        setDisabled(false)
        debugger
    }
    const ChangeNumber = () => {
        setNum(num + 1);
    }
    const ResetButton = () => {
        setNum(resultMin)
    }

    return (
        <div className="App">
            <div className="Counter">
                <Tablo
                    num={num}
                    valueMax={valueMax}
                    error={error}
                    lokalMax={lokalMax}
                    lokalMin={lokalMin}

                />
                <Button changeNumber={ChangeNumber}
                        resetButton={ResetButton}
                        num={num}
                        valueMax={resultMax}
                        valueMin={resultMin}

                />
            </div>
            <div className="Settings">
                <TabloSettings
                    valueMax={valueMax}
                    setValueMax={setValueMax}
                    setValueMin={setValueMin}
                    onClick={onClickHandler}
                    onChangeHandlerMax={onChangeHandlerMax}
                    onChangeHandlerMin={onChangeHandlerMin}
                    resultMax={resultMax}
                    lokalMax={lokalMax}
                    disabled={disabled}
                />
            </div>

        </div>
    );
}

export default App;
