import './ProductDate.css'
import Card from './Card';

function ProductDate(props){

    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const year = props.date.getFullYear();


    return (
        <Card className='product-date'>
            <div className='product-date-month'>{month}</div>
            <div className='product-date-year'>{year}</div>
            <div className='product-date-day'>{day}</div>
        </Card>
    );
}

export default ProductDate;