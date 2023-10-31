import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Create = () => {
     const [title,setTitle]=useState("");
     const [body,setBody]=useState("");
     const [author,setAuthor]=useState("Daniel");
     const navigate=useNavigate();

     const handleSubmit= (e)=>{
          e.preventDefault();
          const blog={title,body,author};

          fetch('http://localhost:8000/blogs',{
               method:'POST',
               headers:{"content-Type" : "application/json"},
               body:JSON.stringify(blog)
          }).then(()=>{
               console.log("Form Submitted Succesfully");
               navigate('/');
          })
     }
    return ( 
        <div className="create">
             <h2>Add a New Blog</h2>
             <form onSubmit={handleSubmit}>
               <label>Blog Title:</label>
               <input type="text"
               required
               value={title}
               onChange={(e)=>setTitle(e.target.value)}
               />
               <label>Blog Body:</label>
               <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
               >
               </textarea>
               <label>Blog Author:</label>
               <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Daniel">Daniel</option>
                    <option value="Natnael">Natnael</option>
               </select>
               <button>Add Blog</button>
               <p>{title}</p>
               <p>{body}</p>
               <p>{author}</p>
             </form>
        </div>
     );
}
 
export default Create;