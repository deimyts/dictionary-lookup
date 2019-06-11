import React from 'react';

function Highlight(props) {
  return <span style={{background: '#f00'}}>{props.children}</span>
}

 
export default function SelectableText(props) {
  if(props.selectionStart >= 0 && props.selectionEnd) {
    return (
      <span>
        {props.children.substring(0, props.selectionStart)}
        <Highlight>
          {props.children.substring(props.selectionStart, props.selectionEnd)}
        </Highlight>
        {props.children.substring(props.selectionEnd, props.children.length)}
      </span>)
  }
  return <span>{props.children}</span>;
}
