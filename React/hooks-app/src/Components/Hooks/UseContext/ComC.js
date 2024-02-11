import React, { useContext } from 'react';
import { LoginContext } from './Main';

function ComC() {
    const name = useContext(LoginContext)
    return (
        <div>
            This is C component {name}
        </div>
    )
}

export default ComC
