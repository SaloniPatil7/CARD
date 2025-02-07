import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
            .then(response => response.json())
            .then(data => setUser(data.results[0]))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='cardBox'>
            <div className="card" id="userCard">
                {user && (
                    <>
                        <img id="userPhoto" src={user.picture.large} alt="User Photo" />
                        <div className="card-content">
                            <h2 id="userName">{`${user.name.first} ${user.name.last}`}</h2>
                            <p id="userGender">{`Gender: ${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}`}</p>
                            <p id="userPhone">{`Phone: ${user.phone}`}</p>
                        </div>

                    </>
                )}
            </div>
        </div>

    );
};

export default Card;
