import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../Main/UseCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch]= UseCart();
    console.log(cart);
    const total= cart.reduce((sum,item)=>item.price+sum, 0)

    const handleDeleteCart=(item)=>{
        Swal.fire({
            title: 'Are you sure delete food?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${item._id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount> 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your food has been deleted.',
                            'success'
                          )
                    }
                    
                })
             
            }
          })

    }


    return (
        <div className='mb-10 mt-40 w-full'>
             <Helmet>
                <title>Restaurant | My Cart </title>
            </Helmet>
            <div className='flex justify-evenly mb-5 bg-red-800 text-white rounded-lg p-4'>
                <h2 className='uppercase font-semibold'>Total Order : {cart.length}</h2>
                <h2 className='uppercase font-semibold'>Total Price : ${total}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table ">
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
        {
            cart.map((item, index)=><tr key={item._id}>
                <th>{index+1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                <button onClick={()=>handleDeleteCart(item)} className="btn btn-error text-white bg-red-700"><FaTrash></FaTrash></button>
                </th>
              </tr>)
        }
      
   
    </tbody>
   
    
  </table>
</div>
           
        </div>
    );
};

export default MyCart;