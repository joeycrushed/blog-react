import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    // data: blogs - grab the data but call it blogs in the context

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading ... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
// npx json-server --watch data/db.json --port 8000

export default Home;