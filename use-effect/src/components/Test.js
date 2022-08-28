import React, { useEffect, useState } from 'react'

function Test()
{
    const [content1, setContent1]=useState('posts')
    const [count,setCount]=useState(0)
    const [item,setItem]=useState([])
    useEffect(()=>{
        console.log("component did mount")
    },[])
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/'+content1)
        .then(response=>response.json())
        .then(json=>setItem(json))


        console.log("componentDidUpdate")
        // cleaning after unmount
        return ()=>{
            console.log("componentunmount")
        }
    },[content1])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} >Count</button>
            <button onClick={()=>setContent1('posts')} >Post</button>
            <button onClick={()=>setContent1('users')} >User</button>
            <button onClick={()=>setContent1('comments')} >Comemnts</button>
            <h1>{content1}</h1>
            <ul>
                {item && item.map(item=>
                    {
                      return  <li key={item.id} >{item.id}</li>
                    })}
            </ul>
        </div>
    )
}

// function Test()
// {
//     const [content1,setcontent1]=useState("post")
//     const [count,setCount]=useState(0)
//     const [item,setItem]=useState([])

//     useEffect(()=>
//     {
//         console.log("didmount")
//     },[])

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/"+content1)
//         .then(response=>response.json())
//         .then(json=>setItem(json))
//         return()=>{
//             console.log("unmount")
//         }
//     },[content1])

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)} >count</button>
//             <button onClick={()=>setcontent1("post")} >Post</button>
//             <button onClick={()=>setcontent1("user")}>User</button>
//             <button onClick={()=>setcontent1("comments")} >Comemnts</button>
//             <h1>{content1}</h1>
//             <ul>
//                 {item && item.map(item=>{
//                     return <li key={item.id}>{item.id}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }
export default Test