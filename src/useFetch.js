import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        let timer = setTimeout(()=>{
            fetch(url)
        .then(response=>{
            if(!response.ok){
                throw Error("can not fetch the data from the resource");
            }
            response.json()
            .then(data=>{
                setData(data);
                setIsPending(false);
            })
            .catch(err=>{
                setError(err.message)
            })
        })
        },1000);
        return ()=>clearTimeout(timer);
    },[url])
    return {data,isPending,error};
}
 
export default useFetch;