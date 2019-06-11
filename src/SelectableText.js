import React from 'react';

function Highlight({ children }) {
  return <span style={{background: '#f00'}}>{children}</span>
}

export default function SelectableText({selectionStart, selectionEnd, children}) {
  if(selectionStart >= 0 && selectionEnd) {
    return (
      <span>
        {children.substring(0, selectionStart)}
        <Highlight>
          {children.substring(selectionStart, selectionEnd)}
        </Highlight>
        {children.substring(selectionEnd, children.length)}
      </span>)
  }
  return <span>{children}</span>;
}
