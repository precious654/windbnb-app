import React from 'react';
import star from './images/star.svg';

function Card(props) {
  return (
    <div className="card">
      <img src={props.item.photo} alt="photo" className="photo" />
      <div>

        <div className="flex">
          <span>
            {props.item.superHost && <span className="superhost">superhost</span>}
            <span className="type">{props.item.type}<span className="type">.{props.item.beds} beds</span></span>
          </span>
          <div className="stars">
            <img src={star} alt='icon' width="15" />
            <p className="rating">{props.item.rating}</p>
          </div>
        </div>
        <p className="title">{props.item.title}</p>
      </div>
    </div>
  )
}

export default Card;
