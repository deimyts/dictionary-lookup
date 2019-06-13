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
    return (
      <React.Fragment>
        { this.props.highlightActive ? 
          <TextWithHighlight start={sections[0]} middle={sections[1]} end={sections[2]}/> :
          <div onClick={this.props.handleClick}>{text}</div> }
      </React.Fragment>
    );
  }
}
