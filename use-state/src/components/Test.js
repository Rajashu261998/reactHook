import React,{useState} from 'react'

function Test()
{
    const [state,setState]=useState({count:0,name:"Raj"})
    const count=state.count
    const name=state.name

    function increment()
    {
        setState(prevState=>{
            return{...prevState,count:prevState.count+1}
        })
    }
    function decrement()
    {
        setState(prevState=>{
            return{
                ...prevState,count:prevState.count-1
            }
        })
    }
    return (
        <div>
            <h1>{name}</h1>
            <h2>{count}</h2>
            <button onClick={increment} >Incre...</button>
            <button onClick={decrement} >Decre...</button>
        </div>
    )
}
export default Test