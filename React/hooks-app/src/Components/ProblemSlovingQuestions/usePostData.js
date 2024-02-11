import { useState } from 'react';
import axios from 'axios';

const usePostData = (url) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(url, data);
            setResult(response.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    return [result, loading, error, postData];
};

export default usePostData;
