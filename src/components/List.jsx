import React from 'react';
import PropTypes from 'prop-types';

export default function List({data, onSelect}) {

    return (
        <ul className="user-list">
            {data.map(user => <li key={user.id} className="user" id={user.id} onClick={onSelect}>{user.name}</li>)}
        </ul>
    );
};

List.propTypes = {
    data: PropTypes.array,
    onSelect: PropTypes.func
  };