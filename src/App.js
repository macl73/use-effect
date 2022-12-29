import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List.jsx';
import Details from './components/Details.jsx';
import PropTypes from 'prop-types';


function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    .then(response => response.json())
    .then(json => setData(json))
  }, []);

  const [selected, setSelected] = useState(undefined);


  const handleClick = (e) => {
    setSelected(Number(e.target.id));
  };

  return (
    <div className="container">
      <List 
        data={data}
        onSelect={(e) => handleClick(e)} />

      <Details
        selected={selected} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  selected: PropTypes.number
};

export default App;
