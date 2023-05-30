import React, { useEffect, useState } from 'react';
import orderImg from '../../assets/shop/order.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';


const OrderFood = () => {
    const [saladed, setSalad] = useState([])
    const [pizzas, setPizza] = useState([])
    const [soups, setSoups] = useState([])
    const [desserted, setDessert] = useState([])
    const [drinks, setDrinks] = useState([])

    //    Offered
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'salad')
                setSalad(polularItem)
            })
    }, [])

    // Pizza
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'pizza')
                setPizza(polularItem)
            })
    }, [])

    // Soups
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'soup')
                setSoups(polularItem)
            })
    }, [])

    // Dessert
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'dessert')
                setDessert(polularItem)
            })
    }, [])

    // Drinks
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'drinks')
                setDrinks(polularItem)
            })
    }, [])

    const handleAddToCart=()=>{

    }


    return (
        <div>
            <Helmet>
                <title>Restaurant | Order Food </title>
            </Helmet>

            <Cover img={orderImg} title={'order food'} text={'If You Hunger Then You Would Like To Order Food'}> </Cover>

            <div className='mt-10'>
                <Tabs>
                    <TabList className='uppercase text-center bg-red-600 text-white font-semibold rounded-lg'>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>desert</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    {/* Salad */}
                    <TabPanel className='flex justify-center mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center'>
                            {
                                saladed.map(salad => <div key={salad._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={salad.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{salad.name}</h2>
                                            <p>{salad.recipe}</p>
                                            <div className="card-actions">
                                                <button onClick={()=>handleAddToCart()} className="btn btn-primary bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </TabPanel>

                    {/* Pizza */}
                    <TabPanel className='flex justify-center mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center'>
                            {
                                pizzas.map(pizza => <div key={pizza._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={pizza.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{pizza.name}</h2>
                                            <p>{pizza.recipe}</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </TabPanel>

                    {/* Soups */}
                    <TabPanel className='flex justify-center mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center'>
                            {
                                soups.map(soup => <div key={soup._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={soup.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{soup.name}</h2>
                                            <p>{soup.recipe}</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </TabPanel>

                    {/* Dessert */}
                    <TabPanel className='flex justify-center mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center'>
                            {
                                desserted.map(dessert => <div key={dessert._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={dessert.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{dessert.name}</h2>
                                            <p>{dessert.recipe}</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </TabPanel>

                    {/* Drinks */}
                    <TabPanel className='flex justify-center mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center'>
                            {
                                drinks.map(drink => <div key={drink._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={drink.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{drink.name}</h2>
                                            <p>{drink.recipe}</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;