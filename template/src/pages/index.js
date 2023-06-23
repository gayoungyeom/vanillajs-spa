import HomePage from './HomePage.js';
import CounterPage from './CounterPage.js';
import FetchPage from './FetchPage.js';

export default (main) => {
  const home = () => new HomePage(main);
  const counter = () => new CounterPage(main);
  const fetch = () => new FetchPage(main);

  return {
    home,
    counter,
    fetch,
  };
};
