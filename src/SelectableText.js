import React from 'react';
import getWord from './getWord'

// function Highlight({ children }) {
//   return <span style={{background: '#f00'}}>{children}</span>
// }

export default class SelectableText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.children
    }
    this.setSelection = this.setSelection.bind(this)
  }

  setSelection() {
    // console.log('SETTING SELECTION');
    const selection = document.getSelection();
    const text = selection.anchorNode.textContent;
    // const text = this.props.children;
    // const text = this.state.text;
    const offset = selection.anchorOffset;
    const { selectionStart, selectionEnd } = getWord(text, offset);
    const range = document.createRange();
    range.setStart(selection.anchorNode, selectionStart)
    range.setEnd(selection.anchorNode, selectionEnd)
    // selection.extend(selection.anchorNode, selectionEnd)  
    selection.addRange(range);
    console.log('selection: ', selection)
    console.log('offset: ', offset)
    console.log('text: ', text)
    console.log('start: ', selectionStart)
    console.log('end: ', selectionEnd)
    // this.setState({ selectionStart, selectionEnd });
  }

  render() {
    const {selectionStart, selectionEnd, text} = this.state
    const children = this.props.children;
    // if(selectionStart && selectionEnd) {
    //   return (
    //     <span onClick={this.setSelection}>
    //       {children.substring(0, selectionStart)}
    //       <Highlight>
    //         {children.substring(selectionStart, selectionEnd)}
    //       </Highlight>
    //       {children.substring(selectionEnd, text.length)}
    //     </span>)
    // }
    return <span onClick={this.setSelection}>{text}</span>;
  }
}
