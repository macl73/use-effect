import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Details({selected}) {

    const [info, setInfo] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selected}.json`)
            .then(response => response.json())
            .then(json => setInfo(json))
        };

        if (selected === undefined) {
            return;
        };

        fetchData();
        return setInfo(null);
    }, [selected]);


    return ( info === null ? <div></div> :
        <div className="card">
            <img className="user-avatar" src={info.avatar} alt={info.name} />
            <div className="user-name">{info.name}</div>
            <div className="user-city">City: {info.details.city}</div>
            <div className="user-company">Company: {info.details.company}</div>
            <div className="user-position">Position: {info.details.position}</div>
        </div>
    );
};

Details.propTypes = {
    selected: PropTypes.number
  };