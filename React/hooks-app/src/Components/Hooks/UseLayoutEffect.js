import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
    const [state, setState] = useState(false)
    const divRef = useRef()
    useEffect(() => {
        console.log("useEffect")
        if (divRef.current != null) {
            divRef.current.style.paddingTop = "100px"
        }
    }, [state])
    useLayoutEffect(() => {
        console.log("useLayoutEffect")
        if (divRef.current != null) {
            divRef.current.style.paddingTop = "50px"
        }

    }, [state])
    return (
        <div>
            <button onClick={() => setState(!state)}>toggle</button>
            {state && <div ref={divRef}>This is the code</div>}
        </div>
    )
}

export default UseLayoutEffect
