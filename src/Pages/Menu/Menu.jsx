import React, { useEffect, useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu//soup-bg.jpg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Menu = () => {
    const [offered, setMenuItem] = useState([])
    const [desserted, setDessert] = useState([])
    const [soups, setSoups] = useState([])
    const [pizzas, setPizza] = useState([])

    // Offered
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'offered')
                setMenuItem(polularItem)
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


    return (
        <div className='mb-10'>
             <Helmet>
                <title>Restaurant | Menu </title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"} text={"Would You Like To Try Our Food"}></Cover>
            <div>
                <div className='text-center mx-auto my-10 border-y-4 md:w-3/12 sm:w-5/12 lg:w-3/12'>
                    <p className='text-red-600 font-semibold italic'>---- Don't Miss ----</p>
                    <h3 className='uppercase text-4xl font-bold'>Today's Offer</h3>
                </div>
            </div>

            {/* Offered */}
            <div className=' grid md:grid-cols-2 gap-4 mb-2'>
                {
                    offered.map(offer => <>
                        <div className='flex mx-auto flex justify-center'>
                            <div>
                                <img src={offer.image} className="w-[100px]" style={{ borderRadius: '0px 200px 200px 200px' }}></img>
                            </div>
                            <div className='mr-3 ml-3 w-6/12'>
                                <h2 className='text-2xl mb-3'>{offer.name}------------</h2>
                                <p>{offer.recipe}</p>
                            </div>
                            <p className='text-red-600 mr-0'>${offer.price}</p>
                        </div>
                    </>)
                }

            </div>
            <div className="card-actions flex justify-center mb-10">
                <Link to='/order'>
                <button className="bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Order Your Favourite Food</button>
                </Link>
            </div>

            {/* Dessert */}
            <Cover img={desertImg} title={"dessert"} text={"Delicious Dessert With Zero Sugger"} className='h[400px]'></Cover>
            <div className=' grid md:grid-cols-2 gap-4 mb-2 mt-10'>
                {
                    desserted.map(dessert => <>
                        <div className='flex mx-auto flex justify-center'>
                            <div>
                                <img src={dessert.image} className="w-[100px]" style={{ borderRadius: '0px 200px 200px 200px' }}></img>
                            </div>
                            <div className='mr-3 ml-3 w-6/12'>
                                <h2 className='text-2xl mb-3'>{dessert.name}------------</h2>
                                <p>{dessert.recipe}</p>
                            </div>
                            <p className='text-red-600 mr-0'>${dessert.price}</p>
                        </div>
                    </>)
                }

            </div>
            <div className="card-actions flex justify-center mb-10">
            <Link to='/order'>
                <button className="bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Order Your Favourite Food</button>
                </Link>
            </div>

            {/* Pizza */}
            <Cover img={pizzaImg} title={"pizza"} text={"Tasty Pizza You Would To Like Eat"} className='h[400px]'></Cover>
            <div className=' grid md:grid-cols-2 gap-4 mb-2 mt-10'>
                {
                    pizzas.map(pizz => <>
                        <div className='flex mx-auto flex justify-center'>
                            <div>
                                <img src={pizz.image} className="w-[100px]" style={{ borderRadius: '0px 200px 200px 200px' }}></img>
                            </div>
                            <div className='mr-3 ml-3 w-6/12'>
                                <h2 className='text-2xl mb-3'>{pizz.name}------------</h2>
                                <p>{pizz.recipe}</p>
                            </div>
                            <p className='text-red-600 mr-0'>${pizz.price}</p>
                        </div>
                    </>)
                }
            </div>

            <div className="card-actions flex justify-center">
            <Link to='/order'>
                <button className="bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary mb-10">Order Your Favourite Food</button>
                </Link>
            </div>

            {/* Soup */}
            <Cover img={soupImg} title={"soup"} text={"Thik And Yammy Soup For Your Refreshment"} className='h[400px]'></Cover>
            <div className=' grid md:grid-cols-2 gap-4 mb-2 mt-10'>
                {
                    soups.map(soup => <>
                        <div className='flex mx-auto flex justify-center'>
                            <div>
                                <img src={soup.image} className="w-[100px]" style={{ borderRadius: '0px 200px 200px 200px' }}></img>
                            </div>
                            <div className='mr-3 ml-3 w-6/12'>
                                <h2 className='text-2xl mb-3'>{soup.name}------------</h2>
                                <p>{soup.recipe}</p>
                            </div>
                            <p className='text-red-600 mr-0'>${soup.price}</p>
                        </div>
                    </>)
                }

            </div>
            <div className="card-actions flex justify-center">
            <Link to='/order'>
                <button className="bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Order Your Favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;