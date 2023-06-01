import { useQuery } from '@tanstack/react-query'
import { AuthContest } from '../Auth/AuthProvider'
import { useContext } from 'react';

const UseCart = () => {
    const { user } = useContext(AuthContest);

    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            return res.json();
        },
    })
    return [carts, refetch]
}

export default UseCart;
