import { useState } from 'react';

import './ProductItem.css'
import Card from './Card';
import ProductDate from './ProductDate';



function ProductItem(props) {

    const [title, setTitle] = useState(props.title);

    function clickHandler(){

        if (title === "Television"){
            setTitle(props.title);
        }
        else {
            setTitle("Television");
        }
        
        console.log("Button Clicked");
    }


    return (
        <Card className="product-item">
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item-description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    );
}

export default ProductItem;
