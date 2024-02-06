import React, { useState, useEffect } from 'react'
import axios from "axios"

function useFetch(url) {
    const [data, setData] = useState([])
    const getUser = async () => {
        await axios.get(url).then((res) => setData(res.data))
    }
    useEffect(() => {
        getUser()
    }, [])

    return data
}

export default useFetch
