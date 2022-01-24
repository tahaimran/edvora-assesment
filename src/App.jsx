import { useEffect, useState } from 'react';
import axios from 'axios';
import { ValueContext } from './Config/Context';
import SecondSide from './Components/secondSide';
import FirstSide from './Components/FirstSide';
import { Grid } from '@mui/material'

function App() {

  const [data, setData] = useState([]);
  const [age, setAge] = useState('' );
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [show, setShow] = useState(true)
  const [showState, setShowState] = useState(false)

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    await axios('https://assessment-edvora.herokuapp.com/')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <ValueContext.Provider value={{ showState, setShowState, data,setData, age , setAge, show, setShow,state, setState, city, setCity }} >
      <Grid container>
        <Grid item  sm={2}>
          <FirstSide />
        </Grid>
        <Grid item xs={12}  sm={10}>
          <SecondSide />
        </Grid>
      </Grid>
    </ValueContext.Provider>
  );
}

export default App;
