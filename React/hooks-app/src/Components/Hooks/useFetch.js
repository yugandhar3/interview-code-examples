import { useState } from 'react'
import axios from "axios"

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUser = async () => {
        try {
            setLoading(true)
            await axios.get(url).then((res) => setData(res.data))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }

    }

    return [data, loading, error, getUser]
}

export default useFetch
