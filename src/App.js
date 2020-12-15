import React, { useState, useCallback } from 'react';
import { NewsList, Categories } from './components';
import { NewsPage } from './pages';
import { Route } from 'react-router-dom';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
