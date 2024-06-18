import React, { useEffect, useState } from 'react';
import HomeScreen from './screen';
import { useIsFocused } from '@react-navigation/native';
import { setAddToCart, setRemoveFromCart } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from '../../../helpers/toaster';

const data = require('../../../../Listing.json');


function Home(props) {
    const [carsListing, setCarsListing] = useState([]);
    const isFocus = useIsFocused();
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartReducer.products);

    
    useEffect(() => {
        if (data && data.list && cartList) {
            let list = data.list
            for (let i in list) {
                list[i]["checked"] = false
                for (let j in cartList) {
                    if (cartList[j].id == list[i].id) {
                        list[i]["checked"] = true
                    }
                }
            }
            setCarsListing(list);
        }
        else {
            setCarsListing([]);
        }
    }, [isFocus, cartList]);



    const handleAddToCart = (item) => {
        let list = [...carsListing]
        let existed_item = cartList.find(data => data.id === item.id)
        for (let i in list) {
            if (list[i].id === item.id && existed_item) {
                list[i].checked = false
                dispatch(setRemoveFromCart(item));
                new Toaster().error('Item removed from your cart.')
            }
            else if (list[i].id === item.id && !existed_item) {
                list[i].checked = true
                dispatch(setAddToCart(item));
                new Toaster().success('Item added to your cart!')
            }
            else;
        }
        setCarsListing(list);
    };


    return (
        <HomeScreen
            carsListing={carsListing}
            handleAddToCart={handleAddToCart}
            navigation={props.navigation}
        />
    );
};

export default Home;
