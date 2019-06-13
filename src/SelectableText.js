import React from 'react';

const Highlight = (props) => <span style={{background: 'yellow', display: 'block'}}>{props.children}</span>

const TextWithHighlight = ({ start, middle, end }) => {
  return (
    <React.Fragment>
      <div>{start}</div>
      <Highlight>{middle}</Highlight>
      <div>{end}</div>
    </React.Fragment>
  )
}

export default class SelectableText extends React.Component {
  render() {
    let text = this.props.children;
    // console.log('TEXT: ', text)
    // if(this.props.highlightActive) {
    //   text = <span>{text.substring(0, this.props.selectionStart)}<Highlight text={text.substring(this.props.selectionStart, this.props.selectionEnd)} />{text.substring(this.props.selectionEnd, text.length)}</span>
    // }
    return (
      <React.Fragment>
        <TextWithHighlight start='foo' middle={text} end='baz'/>
        <div onClick={this.props.handleClick}>{text}</div>
      </React.Fragment>
    );
  }
}
