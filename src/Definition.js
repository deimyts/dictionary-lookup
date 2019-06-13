import React from 'react';
import './Definition.scss';

export default function Definition(props) {
  const text = props.definition ? `${props.word}: ${props.definition}` : ''
  const status = props.definition ? 'active' : 'inactive'
  return (
    <React.Fragment>
      <div className={`definition ${status}`} style={props.style}>{text}</div>
      <Overlay handleClick={props.overlayClickHandler} />
    </React.Fragment>
  )
}

export function Overlay(props) {
  return <div className="overlay" onClick={props.handleClick}/>
}


