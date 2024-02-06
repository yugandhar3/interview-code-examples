import React, { useState } from 'react'

function UseState() {
    const [state, setState] = useState({ count: 0, name: "yugandhar" })
    const handleCounter = () => {
        setState((prev) => ({ ...prev, count: prev.count + 1 }))
    }
    return (
        <div>
            <p>{state.count} {state.name}</p>
            <button onClick={handleCounter}>Counter</button>
        </div>
    )
}

export default UseState
