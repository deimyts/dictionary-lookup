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

describe.skip('when a word is clicked', () => {
  it('highlights the word', () => {
    const app = Enzyme.shallow(<App />);
    const text = app.find('p');
    text.simulate('click')
  })
})

describe('when a word has been selected', () => {
  it('passes the start & end indices to the "SelectableText" component', () => {
    const app = Enzyme.shallow(<App />);
    const selection = {
      start: 0,
      end: 3
    }

    app.setState({ selection })
    expect(app.exists('SelectableText')).toBe(true);
  });
})
