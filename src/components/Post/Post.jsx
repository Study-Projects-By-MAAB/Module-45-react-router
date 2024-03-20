import { Link, useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Post = ({ post }) => {
    // eslint-disable-next-line react/prop-types
    const { title, id } = post

    const navigate = useNavigate()

    const postStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px",
    }
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <p>id: {id}</p>
            <h2>this is post: {title} </h2>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetail}>Click to see Details</button>
        </div>
    )
}

export default Post
