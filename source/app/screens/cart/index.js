import React, { useEffect, useState } from 'react';
import { setRemoveFromCart } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import MyCartScreen from './screen';
import { useIsFocused } from '@react-navigation/native';
import { Toaster } from '../../../helpers/toaster';


function MyCart(props) {
    const [loader, setLoader] = useState(false);
    const [cartListing, setCartListing] = useState([]);
    const isFocus = useIsFocused();
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0);
    const storedCartList = useSelector(state => state.cartReducer.products);


    useEffect(() => {
        if (isFocus) {
            setLoader(true);
            handleIntialStates();
        }
    }, [isFocus])


    useEffect(() => {
        handleTotalAmount();
    }, [storedCartList]);


    const handleIntialStates = () => {
        setCartListing(storedCartList);
        handleTotalAmount();
        setLoader(false);
    };


    const handleTotalAmount = () => {
        if (storedCartList && storedCartList.length > 0) {
            const sum = storedCartList.reduce((accumulator, object) => {
                return accumulator + (parseInt(object.price) * parseInt(object.quantity));
            }, 0);
            setTotalAmount(sum)
        }
    };


    const handleRemoveFromCart = (item) => {
        let list = [...storedCartList]
        for (let i in list) {
            if (list[i].id === item.id) {
                let updateList = list.filter((data) => data.id !== item.id)
                setCartListing(updateList);
            }
        }
        dispatch(setRemoveFromCart(item));
        new Toaster().error('Item removed from your cart.');
    };


    return (
        <MyCartScreen
            loader={loader}
            totalAmount={totalAmount}
            cartListing={cartListing}
            navigation={props.navigation}
            handleRemoveFromCart={handleRemoveFromCart}
        />
    );
};

export default MyCart;
