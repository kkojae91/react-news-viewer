import React, { useState, useCallback } from 'react';
import { NewsList, Categories } from './components';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
}

export default App;
