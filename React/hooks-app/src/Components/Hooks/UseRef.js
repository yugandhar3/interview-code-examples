import React, { useState, useRef, useEffect } from 'react'

function UseRef() {
    const [state, setState] = useState("");
    const count = useRef(0);
    const inputRef = useRef()
    useEffect(() => {
        count.current = count.current + 1

    })
    const handleFocus = () => {
        inputRef.current.focus()
        inputRef.current.style.width = "300px"
    }
    return (
        <div>
            <input type="text" onChange={(e) => setState(e.target.value)} ref={inputRef} />
            {state}
            {count.current}
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default UseRef
