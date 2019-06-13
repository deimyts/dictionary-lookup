import React from 'react';

const Highlight = (props) => <span style={{background: 'yellow', display: 'inline-block'}}>{props.children}</span>

const TextWithHighlight = ({ start, middle, end }) => {
  return (
    <React.Fragment>
      <span>{start}</span>
      <Highlight>{middle}</Highlight>
      <span>{end}</span>
    </React.Fragment>
  )
}

export default class SelectableText extends React.Component {
  render() {
    const text = this.props.children;
    const sections = this.props.sections;
    // console.log('TEXT: ', text)
    // if(this.props.highlightActive) {
    //   text = <span>{text.substring(0, this.props.selectionStart)}<Highlight text={text.substring(this.props.selectionStart, this.props.selectionEnd)} />{text.substring(this.props.selectionEnd, text.length)}</span>
    // }
    return (
      <React.Fragment>
        { this.props.highlightActive ? 
          <TextWithHighlight start={sections[0]} middle={sections[1]} end={sections[2]}/> :
          <div onClick={this.props.handleClick}>{text}</div> }
      </React.Fragment>
    );
  }
}
