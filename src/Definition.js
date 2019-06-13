import React from 'react';
import './Definition.scss';

export default function Definition(props) {
  return <div className='definition' style={props.style}>{`${props.word}: ${props.definition}`}</div>
}

export function Overlay(props) {
  return <div className="overlay" onClick={props.handleClick}/>
}


