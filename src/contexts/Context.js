import React, { useState } from 'react';

import productList from '../products.json';

const Context = React.createContext();

export function ConstProvider({children}){

    const [products, setProducts] = useState(productList);
    const [showProduct, setShowProduct] = useState(false);
    const [chosenProduct, setChosenProduct] = useState(productList[0]);
    const [cart, setCart] = useState([]);
    const [buttonGroup, setButtonGroup] = useState(buttons);
    const [filterChoices, setFilterChoices] = useState(chosenChoices);

    const addToCart = (product) => {
        const shoeSizeSelected = product.sizes.some(size => size.status === true);
        if(!shoeSizeSelected){
            alert("You need to choose a shoe size");
            return;
        }
       const getSelectedShoeSize = product.sizes.filter(size => size.status === true);
      
       const newProductToAdd = {
            id: product.id,
            title: product.title,
            photo: product.photos[0],
            size: getSelectedShoeSize[0].size,
            quantity: 1,
            price: product.price,
            color: product.color[0],
            total: 0
       }
       const filterId = cart.filter(item => item.id === newProductToAdd.id && item.size === newProductToAdd.size);

       if(filterId.length > 0){
            const existingItemIndex = cart.findIndex( item => item.id === filterId[0].id && item.size === newProductToAdd.size);
            cart[existingItemIndex].quantity++;
            setCart([...cart]); 
            return
       }
        setCart([...cart, newProductToAdd]); 
    }

    const resetAllButton = (buttonGroupCopy) => {
        const newArr = {...buttonGroupCopy};
        const removeActivity = resetButtons(newArr, "activity");
        const removeTerrain = resetButtons(removeActivity, "terrain");
        const removeLevel = resetButtons(removeTerrain, "level"); 
        const removeWidth = resetButtons(removeLevel, "width");
        const removeCushioning = resetButtons(removeWidth, "cushioning");

        const copyOfFilterChoices = {...filterChoices}
        Object.keys(copyOfFilterChoices).forEach(key => {
            copyOfFilterChoices[key] = '';
        })
        setFilterChoices(copyOfFilterChoices)

        setShowProduct(false);
        setButtonGroup(removeCushioning);
    };

    const chosenButton = (buttonGroupCopy, type, index, value) => {

       filterChoices[type] = value;
       setFilterChoices(filterChoices);
       const newArr = {...buttonGroupCopy};
       const removeActive = resetButtons(newArr, type);
       removeActive[type][index].status = true;
       setButtonGroup(removeActive);
      
    }

    const chosenSize = (currentProduct, type, index) => {
        const newProduct = {...currentProduct};
        newProduct.sizes.forEach(element => {
            element.status = false;
        });
        newProduct.sizes[index].status = true;
        setChosenProduct(newProduct);
     }

    const resetButtons = (array, type) => {
        array[type].map(group => group.status = false);
        return array;
    }

    const chooseOppGender = (id) => {
        window.scrollTo(0, 0);
        const newShoe = products.filter( product => product.id === id);
        setChosenProduct({...newShoe[0]});
    }

    const filterAndRecommend = () => {
       
        const filterBy = Object.values(filterChoices);
        const removeBlanks = filterBy.reduce((acc, cur) => {
            return cur? [...acc, cur] : acc
        }, [])
        
        if(removeBlanks.length < 1) return alert("Please choose at least one type.");
        window.scrollTo(0, 0);
        setShowProduct(true);
        const calulatedArry = products.map((product, index) => {
            const addedValues = removeBlanks.reduce( (acc, cur) => {
                return product.filterStatus[cur] + acc;
            }, 0)
            return [Math.round(addedValues / removeBlanks.length), index];
        })

        let indexOfMax = null;
        let maxNum = null;

        calulatedArry.forEach(array => {
            if(maxNum < array[0]){
                maxNum = array[0];
                indexOfMax = array[1];
            }
        })

        setChosenProduct(products[indexOfMax]);
    }

    return(
        <Context.Provider value={{
            products,
            showProduct, 
            setShowProduct,
            chosenProduct,
            setChosenProduct,
            addToCart,
            buttonGroup,
            setButtonGroup,
            resetAllButton,
            chosenButton,
            chosenSize,
            chooseOppGender,
            filterAndRecommend,
            cart,
            setCart
        }}>
        {children}
        </Context.Provider>
    )

}

export default Context;


const buttons = {
    activity: [{name: "Fells", status: false, value: 'fells'}, {name:"Mountains", status: false, value: 'mountains'}, {name:"Trails", status: false, value: 'trails'}, {name:"Ultra", status: false, value: 'ultra'}, {name:"OCR", status: false, value: 'ocr'},  {name:"Orienteering", status: false, value: 'orienteering'}, {name:"Park Run", status: false, value: 'parkRun'}, {name:"Road", status: false, value: 'road'}, {name:"SwimRun", status: false, value: 'swimrun'} ],
    terrain: [{name:"Hard & Rocky", status: false, value: 'hardAndRocky'}, {name:"Soft & Muddy", status: false, value: 'softAndMuddy'}, {name:"Roads", status: false, value: 'roads'}, {name:"Path & Trails", status: false, value: 'pathAndTrails'},{name:"Ice & Snow", status: false, value: 'iceAndSnow'}],
    level: [{name:"Daily", status: false, value: 'daily'}, {name:"Training", status: false, value: 'training'}, {name:"Competition", status: false, value: 'competition'}],
    width: [{name:"Narrow", status: false, value: 'narrow'}, {name:"Normal", status: false, value: 'normal'}, {name:"Wide", status: false, value: 'wide'}],
    cushioning: [{name:"soft", status: false, value: 'soft'}, {name:"moderate", status: false, value: 'moderate'}, {name:"firm", status: false, value: 'firm'}],
}

const chosenChoices = {
    activity: '',
    terrain: '',
    level: '',
    width: '',
    cushioning: ''
}
