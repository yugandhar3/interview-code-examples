import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [state, setState] = useState(0)
    useEffect(() => {
        console.log("state", state)
        document.title = `${state} message`
        return () => {
            console.log("clean up", state)
        }
    }, [state])

    const handleCounter = () => {
        setState(state + 1)
    }
    return (
        <div>
            {state}
            <button onClick={handleCounter}>counter</button>
        </div>
    )
}

export default UseEffect
