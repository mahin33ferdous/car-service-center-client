import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id,title,price}=useLoaderData();
    const {user}=useContext(AuthContext)
    
    const handlePlaceOrder =(e)=>{
        e.preventDefault()
        const form =e.target;
        const name =`${form.firstname.value} ${form.lastname.value}`;
        const phone= form.phone.value;
        const email=user?.email || 'unregistered';
        const text = form.text.value;

        const order ={
           service: _id,
           servicename :title,
           price,
           customer: name,
           email,
           phone,
           text
        }
        // if(phone.length>10)
        // {
        //     alert("phone number invalid")
        // }

        fetch('http://localhost:5000/orders',{
            method: 'post',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            if(data.acknowledged){
                alert("order placed")
                form.reset();
            }
    })
        .catch(err=>console.error(err))
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>{title}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name='firstname' type="text" placeholder="First Name" className="input input-bordered w-full " />
            <input name='lastname' type="text" placeholder="Last Name" className="input input-bordered w-full " />
            <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " required />
            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                </div>
         <textarea name='text' className="textarea textarea-bordered h-24 w-full" placeholder=""></textarea>
                <input className='btn' type='submit' value='place your order'></input>
              </form>
        </div>
    );
};

export default Checkout;