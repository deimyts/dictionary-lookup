import React from 'react';
import './Definition.scss';

export default function Definition(props) {
  return <React.Fragment>
    <div className='definition' style={props.style}>{`${props.word}: ${props.definition}`}</div>
    <Overlay handleClick={props.overlayClickHandler} />
  </React.Fragment>
}

export function Overlay(props) {
  return <div className="overlay" onClick={props.handleClick}/>
}


