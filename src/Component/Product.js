import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const [fake,setFake]=useState([]);
    const [loading,setloading]=useState(false)
    const {id}=useParams();
    
    useEffect(()=>{
        const getdata=async()=>{
            setloading(true);
            const respance=await fetch(`https://fakestoreapi.com/products/${id}`);
            setFake(await respance.json());
            setloading(false);
        }
        getdata();
    },[])

    const Loading=()=>{
        return(
            <>
            <div className='d-flex justify-content-center'>
            <div className="spinner-border " role="status">
           <span className="sr-only">Loading...</span>
          </div>
          </div>
            </>
        )
    }
    const Showproduct=()=>{
        return(
            <>  
            <div className='card-flow'>
                <div className="m-3 ">
                    <img src={fake.image} alt='fake' height="400px" width="350px"/>
                  </div>
                  <div className="card-1 m-4">
                     <h1>{fake.title}</h1>
                     <p>{fake.description}</p>
                     <p className='para'>Price:${fake.price}</p>
                     <div>
                     <button className='btn btn-outline-dark '>Add Cart</button>
                     </div>
                  </div>
                  </div>
            </>
        )
    }

  return (
    <div>
     <div className="container">
        <div className="row">
            {loading ? <Loading/> : <Showproduct/>}
        </div>
     </div>
    </div>

  )
}

export default Product