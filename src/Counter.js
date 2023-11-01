import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(null || 0)
    const [colorChanges, setColorChanges] = useState()

    const ClickToChangetheValues = (type, color) => {
        if (type == '+') {
            console.log("color", color);
            setNumber(number + 1)
            setColorChanges(color)
        } else if (type == '-') {
            let checkNumber = number - 1 == -1 ? 0 : number - 1;
            setNumber(checkNumber)
            setColorChanges(color)
        } else {
            console.log("*****", type.length);
            let checkNumber = type == 0 ? 0 : type;
            setNumber(checkNumber)
        }

    }

    return (
        <>
            <div style={{ margin: '0 auto', display: 'table', }}>
                <div style={{ margin: '10px' }}>
                    <p style={{ fontSize: '30px', textAlign: 'center', color: colorChanges}}>{number}</p>
                    <input type='number' onChange={(e) => ClickToChangetheValues(e.target.value)} style={{ padding: '10px' }} />
                    <div style={{ margin: '0 auto', display: 'table', }}>
                        <button onClick={() => { ClickToChangetheValues('+', 'red') }} style={{ fontSize: '20px', fontWeight: '400', margin: '10px', color: 'red' }}>+</button>
                        <button onClick={() => { ClickToChangetheValues('-', 'black') }} style={{ fontSize: '20px', fontWeight: '400', margin: '10px', color: 'black' }}>-</button>
                    </div>
                </div>

                <button onClick={() => { setNumber(0) }} style={{ fontSize: '20px', fontWeight: '400', margin: '0 auto', display: 'table' }}>Reset Value</button>
            </div>

        </>
    )
}

export default Counter