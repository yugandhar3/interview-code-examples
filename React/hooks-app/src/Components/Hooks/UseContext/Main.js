import React, { createContext } from 'react'
import CompA from './CompA'

export const LoginContext = createContext();
function Main() {
    return (
        <LoginContext.Provider value={"yugandhar"}>
            <div>
                <CompA />
            </div>
        </LoginContext.Provider>
    )
}

export default Main
