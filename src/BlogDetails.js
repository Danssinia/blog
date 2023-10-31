import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}= useParams();
    const {data:blog,isPending,error}=useFetch('http://localhost:8000/blogs/'+id);

    const navigate=useNavigate();

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE',
        }).then(()=>{
            console.log("Blog Deleted Succefully");
            navigate('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && <div>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div> {blog.body}</div>
                <button onClick={handleClick}>Delete Blog</button>
                </div>}
        </div>
     );
}
 
export default BlogDetails;