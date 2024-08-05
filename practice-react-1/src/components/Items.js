import './Items.css'

function Items(props){

    const itemName = props.name;

    return (
        <div className = "item">
            <p>{itemName}</p>
            {props.children}
        </div>
    )
}

export default Items;