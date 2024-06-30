import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'

const Fakeapi = () => {
    const [fake,setfake]=useState([]);
    const [fliter,setFliter]=useState(fake);
    const [loading,setLoading]=useState(false);
   let component=true;
    useEffect(()=>{
        const getapiset=async()=>{
            setLoading(true)
            const response=await fetch("https://fakestoreapi.com/products");
            if (component){
                setfake(await response.clone().json());
                setFliter(await response.json());
                setLoading(false)
                console.log(fliter)
            }
            return ()=>{
                component=false;
            }
         }
      getapiset()
    },[]);

    const Loading=()=>{
        return(
            <>
            <div class="spinner-border" role="status">
           <span class="sr-only">Loading...</span>
          </div>
            </>
        )
    }
    const fliterProduct=(d)=>{
        const updateList=fake.filter((x)=>x.category===d);
        setFliter(updateList);
    }
    const Showproduct=()=>{
        return(
            <>
            <div className='buttons d-flex justify-content-center me-2 mb-2 card-all'>
            <button className='btn btn-outline-dark m-2' onClick={()=>
                setFliter(fake) }>All</button>
            <button className='btn btn-outline-dark m-2'
            onClick={()=>fliterProduct("men's clothing")}>Men's Clothing</button>
            <button className='btn btn-outline-dark m-2' onClick={()=>fliterProduct("women's clothing")}>Women's Clothing</button>
            <button className='btn btn-outline-dark m-2' onClick={()=>fliterProduct("jewelery")}>Jewelery</button>
            <button className='btn btn-outline-dark m-2' onClick={()=>fliterProduct("electronics")}>Electronic</button>
        </div>
        {fliter.map((value)=>{
            return(
                <>
                <div className='col-md-3 mb-4'>
                <div className="card h-100 text-center p-4 m-2" key={value.id}>
                 <img src={value.image} className="card-img-top" height="250px" alt={value.title}/>
                  <div className="card-body">
                    <h5 className="card-title">{value.title.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">{value.price}</p>
                    <NavLink to={`/Product/${value.id}`} className="btn btn-outline-dark">Buy Nom </NavLink>
                  </div>
                 </div>
                 </div>
                </>                  
            )
        })}
        </>
        )
  }
     
  return (
    <div>
        <div className='container my-3'>
           <div className='row'>
             <div className='col-12 mb-5'>
              <h1 className='text-center'>Latest Products</h1>
             </div>
           </div>
           <div className='row justify-content-center'>
             {loading ? <Loading/> : <Showproduct/>}     
           </div>
        </div>
    </div>
  )
}

export default Fakeapi