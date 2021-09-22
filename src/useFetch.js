import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
            fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error('Could Not Fetch The Data')
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(error => {
                alert("SYSTEM FAILLLUURREEE! GET OUT OF THERE!!!")
                setIsPending(false)
                setError(error.message)          
            })
    }, [url])

    return { data, isPending, error }
}



export default useFetch