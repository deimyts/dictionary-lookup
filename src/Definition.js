import React from 'react';
import './Definition.scss';

export default function Definition(props) {
  return <div className='definition'>{`${props.word}: ${props.definition}`}</div>
}


