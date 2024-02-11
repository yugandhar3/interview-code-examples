import React, { useCallback, useEffect } from 'react'

function UseCallback() {
    const fetch = useCallback(() => {
        console.log('fetch some data here');
    }, []);

    useEffect(() => {
        // this will be triggered only when "fetch" value actually changes
        fetch();
    }, [fetch]);

    return (
        <div>
            UseCallBack
        </div>
    )
}

export default UseCallback
