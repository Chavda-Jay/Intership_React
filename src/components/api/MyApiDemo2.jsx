import React, {useState} from 'react'
import axios from 'axios'

export const MyApiDemo2 = () => {
    const[message,setmessage] = useState("")
    const [comments,setcomments] = useState([])

    const getComments = async()=>{

    const response = await axios.get("https://dummyjson.com/comments")
     console.log(response)
        console.log(response.data)
        console.log(response.data.comments)
        setmessage("Comments Data Fetched Successfully")
        console.log(response.data.comments)
        setcomments(response.data.comments)
    }
  return (
    <div style={{textAlign:"center"}}><h1><b>ApiDemo2</b></h1>
    <button onClick={()=>{getComments()}}>GET</button>
    <h1>{message}</h1>
    
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Body</th>
                        <th>Post ID</th>
                        <th>User ID</th>
                        <th>Username</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        comments.map((comment)=>{
                            return <tr>
                                <td>{comment.id}</td>
                                <td>{comment.body}</td>
                                <td>{comment.postId}</td>
                                <td>{comment.user.id}</td>
                                <td>{comment.user.username}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
