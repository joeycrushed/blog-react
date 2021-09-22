import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok) {
                    throw Error('Could Not Fetch The Data')
                }
                return response.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(error => {
                alert("SYSTEM FAILLLUURREEE! GET OUT OF THERE!!!")
                setIsPending(false)
                setError(error.message)
                
            })
    }, [])
 
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading ... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;