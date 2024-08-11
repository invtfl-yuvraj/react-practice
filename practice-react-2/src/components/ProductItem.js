import './ProductItem.css'
import Card from './Card';
import ProductDate from './ProductDate';


function clickHandler(){
    console.log("Button Clicked");
}

function ProductItem(props) {

    return (
        <Card className="product-item">
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item-description'>
                <h2>{props.title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    );
}

export default ProductItem;
