import React from 'react';
import './Definition.scss';

export default function Definition(props) {
  const text = props.definition ? `${props.word}: ${props.definition}` : ''
  return (
    <React.Fragment>
      <div className='definition' style={props.style}>{text}</div>
      <Overlay handleClick={props.overlayClickHandler} />
    </React.Fragment>
  )
}

export function Overlay(props) {
  return <div className="overlay" onClick={props.handleClick}/>
}


