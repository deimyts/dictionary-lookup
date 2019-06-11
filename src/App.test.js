import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('when a word has been selected', () => {
  it('passes the start & end indices to the "SelectableText" component', () => {
    const app = Enzyme.shallow(<App />);
    expect(app.find('SelectableText').prop('selectionStart')).not.toBeDefined()
    expect(app.find('SelectableText').prop('selectionEnd')).not.toBeDefined()

    app.setState({
      selectionStart: 0,
      selectionEnd: 1
    })
    expect(app.find('SelectableText').prop('selectionStart')).toBe(0)
    expect(app.find('SelectableText').prop('selectionEnd')).toBe(1)
  });
})

describe('when a word is clicked', () => {
  it('adds the selection to the state', () => {
    const app = Enzyme.shallow(<App />);
    const text = app.find('SelectableText');
    text.simulate('click')
    expect(app.state('selectionStart')).toBe(0);
    expect(app.state('selectionEnd')).toBe(5);
  })
})

