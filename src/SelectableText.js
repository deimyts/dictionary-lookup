import React from 'react';

// const Highlight = ({ text }) => <span style={{background: 'yellow'}}>{text}</span>

export default class SelectableText extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div onClick={this.props.handleClick}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}
