import React from 'react';
import useFetch from './useFetch';

function useCustome() {
    const data = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <div>
            {data.map((item) => item.name)}
        </div>
    )
}

export default useCustome
