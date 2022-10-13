import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'

function App() { 

  const [prod, setProd] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
    .then(res => setProd(res.data))
    .catch(err => console.log(err))
  }, [])


  return (
    <>
    <section className='sticky h-[5vh]'>
    <Header/>
    </section>


    {/* ladning page */  }


    {/* favorites */  }


    {/* our story */ }


    { /* collections */}


    {/* footer */ }

</>
  );
  }

export default App;
