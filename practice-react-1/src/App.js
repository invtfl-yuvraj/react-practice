import './App.css';
import './components/Items'
import Items from './components/Items';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const response = [
    {
      itemName: "Smart Phone",
      itemDate: "20",
      itemMonth: "July",
      itemYear: "2020"
    },
    {
      itemName: "Laptop",
      itemDate: "25",
      itemMonth: "August",
      itemYear: "2021"
    },
    {
      itemName: "Tablet",
      itemDate: "23",
      itemMonth: "December",
      itemYear: "2023"
    },

  ];

  return (

    <div>
      <Card>
        <Items name={response[0].itemName}>
          My 1st item is {response[0].itemName}
        </Items>
        <ItemDate date={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Items name={response[1].itemName}></Items>
        <ItemDate date={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Items name={response[2].itemName}></Items>
        <ItemDate date={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      </Card>

      <p className="App"> Electronic Devices </p>

    </div>
  );
}

export default App;
