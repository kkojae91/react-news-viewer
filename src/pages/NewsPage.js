import React from 'react';
import { Categories, NewsList } from '../components';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  // console.log(match);
  // console.log(category);
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
