import React from 'react';
import './Definition.scss';

export default function Definition(props) {
  return <div className='definition' style={props.style}>{`${props.word}: ${props.definition}`}</div>
}

export function Overlay() {
  return <div className="overlay" />
}


