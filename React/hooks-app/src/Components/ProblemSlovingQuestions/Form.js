import React, { useState } from 'react';
import usePostData from './usePostData';
import useFetch from '../Hooks/useFetch';

function Form() {
    const [data, setData] = useState({});
    const [result, loading, error, postData] = usePostData("https://jsonplaceholder.typicode.com/posts");
    // const [result1, loading1, error1, getUser] = useFetch("https://jsonplaceholder.typicode.com/posts")

    const handleChangeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // getUser()
        await postData(data);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="username" onChange={handleChangeInput} />
            <input type="password" name="password" onChange={handleChangeInput} />
            <button type='submit'>Submit</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {result && <p>Result: {JSON.stringify(result)}</p>}
            {/* {result1} */}
        </form>
    );
}

export default Form;
