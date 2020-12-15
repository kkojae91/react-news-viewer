import React, { useState } from 'react';
import { NewsList } from './components';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=a0de237571414b3db6b0b6763b28c845',
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NewsList />
    </div>
  );
}

export default App;
