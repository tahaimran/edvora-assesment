import { useEffect, useState } from 'react';
import axios from 'axios';
import { ValueContext } from './Config/Context';
import SecondSide from './Components/secondSide';
import FirstSide from './Components/FirstSide';
import { Paper, Grid } from '@mui/material'

function App() {

  const [data, setData] = useState([]);
  const [age, setAge] = useState('');

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    await axios('https://assessment-edvora.herokuapp.com/')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <ValueContext.Provider value={{ data,setData, age , setAge }} >
      <Grid container>
        <Grid item sm={2}>
          <FirstSide />
        </Grid>
        <Grid item sm={10}>
          <SecondSide />
        </Grid>
      </Grid>
    </ValueContext.Provider>
  );
}

export default App;
