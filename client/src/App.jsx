import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [backendData, setBackendData]=useState([{}]);
  useEffect(() => {
    fetchData();
     }, [])
 const fetchData= async()=>{
  const response =await fetch('http://localhost:5000/api');
  const data=await response.json();
  setBackendData(data);

 }

  

  return (
    <div className="App">
      <div>
        {(typeof backendData==='undefined')?(
          <p>Loading...</p>
        ):(backendData.map((item,index)=>(
          <p key={item.id}>{`${index+1},${item.name},${item.email}`}</p>
        )))}
      </div>
    </div>
  )
}

export default App
