import React from "react";
import {useForm} from 'react-hook-form'
const AddContact = () => {
    const {handleSubmit,register,formState:{errors},reset} =useForm()
    console.log(errors,"err");
    const submit=(data)=>{
        console.log(data,'>>>>>>>>>>>');

    }
    return (
        <div className="container bg-secondary rounded border border-dark mt-5" style={{height:'500px', width:'500px',  border: '2px black'}}>
            <div className="mt-3" style={{textAlign:"center"}}>
                  <h1 className="mt-2">Add New Contact</h1>
            <form onSubmit={handleSubmit(submit)}>
            <div className='mt-3'>
                <p>Name</p>
                <input className='mt-0 border rounded' style={{width:'75%',height:'40px'}}   {...register("name", {required: 'Name Required'})} type="text" />
                <br />
                  {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
               <br />
    
                <p>Email</p>
                <input className='mt-0 border  rounded' style={{width:'75%',height:'40px'}} {...register("email",{required: 'Email required'})} type="text" />
                <br />
                {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                <br />
    
                <p>Phone</p>
                <input className='mt-0 border  rounded' style={{width:'75%',height:'40px'}} {...register("phone",{required: "Number required"})} type="text" />
                <br />
                {errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
                <br />
            </div>
            <button type='submit' className='btn btn-outline-dark mt-3'>Submit</button>
            </form>

            </div>
          
        </div>
      )
    };

export default AddContact;
