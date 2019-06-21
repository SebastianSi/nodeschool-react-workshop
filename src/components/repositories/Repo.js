import React from 'react';

function Repo(props) {
    const {title, description, language, numberOfStars} = props;
    return (
        <li>
            <h3>{title}</h3>
            <div>{description}</div>
            <h4 style={{color: "#EF6C00"}}>{language}</h4>
            <h4>Number of stars: {numberOfStars}</h4>
            <hr style={{maxWidth: "50%"}}/>
        </li>
    );
}

export default Repo;
