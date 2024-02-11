import React, { useContext, useState } from 'react'
import { ThemeContext } from './ContextProvider'

function Theme() {
    const { toggle, handleChangeToggle } = useContext(ThemeContext)
    return (
        <div style={{ background: toggle ? '#000' : '#FFF' }}>
            <h1 style={{ color: toggle ? "#FFF" : '#000' }}>Hello world</h1>
            <button onClick={handleChangeToggle}>Toggle</button>
        </div >
    )
}

export default Theme
