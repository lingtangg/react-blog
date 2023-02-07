import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams;
    const { data: blog, error, isPending } = useFetch('localhost/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('localhost/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blod-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.data}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;