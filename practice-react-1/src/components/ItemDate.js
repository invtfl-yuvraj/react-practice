import './ItemDate.css'

function ItemDate(props){

    const day = props.date;
    const month = props.month;
    const year = props.year;

    return (
        <div className='ItemDates'>
            <span> {day} </span>
            <span> {month}</span>
            <span> {year} </span>
        </div>
    )
}

export default ItemDate;