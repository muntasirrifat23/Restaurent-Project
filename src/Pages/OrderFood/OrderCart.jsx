import { useContext } from 'react';
import { AuthContest } from '../../Auth/AuthProvider';
import UseCart from '../../Main/UseCart';
import Swal from 'sweetalert2';

const OrderCart = ({salad}) => {
    const {user} = useContext(AuthContest)
    const{image,name, recipe,price}= salad;

    const[, refetch]= UseCart();
    
    const handleAddToCart=(salad)=>{
        console.log(salad)
        if(user){
            const orderItem= {menuId:"_id", name,price, image,  email:user.email}
        fetch('http://localhost:5000/cart',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderItem),
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                refetch();
                Swal.fire({
                    // position: 'top',
                    icon: 'success',
                    title: 'Added Your Food',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      },
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    }
    return (
        <div>
           
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p>{recipe}</p>
                            <div className="card-actions">
                                <button onClick={() => handleAddToCart(salad)} className="btn btn-primary bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>
            
        </div>
    );
};

export default OrderCart;