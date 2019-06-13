import React from 'react';

export default class SelectableText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.children
    }
  }

  render() {
    const {text} = this.state
    return (
      <React.Fragment>
        <div onClick={this.props.handleClick}>{text}</div>
      </React.Fragment>
    );
  }
}
