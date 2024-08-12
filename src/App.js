import { Container} from "react-bootstrap";
import person from "./data";
import DateCount from "./component/DateCount";
import DateList from "./component/DateList";
import DateAction from "./component/DateAction";
import { useEffect, useState } from "react";
function App() {
const [personData, setPersonData]=useState(person)
const onDelete=()=>{
  setPersonData([]);
}
const onViewData=()=>{
  setPersonData(person);
}
useEffect(()=>{
  setPersonData([]);
},[])
  return (
    <div className="font">
      <Container className="py-5">
        <DateCount person={personData} />
        <DateList person={personData}/>
        <DateAction deleteData={onDelete} viewdata={onViewData}/>
      </Container>
    </div>
  );
}

export default App;
