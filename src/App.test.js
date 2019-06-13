import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';
import getWord from './getWord'

jest.mock('./getWord');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe.skip('when a word has been selected', () => {
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

describe.skip('when a word is clicked', () => {
  it('adds the selection to the state', () => {
    const mockSelection = {
      anchorNode: {
        textContent: 'TEST CONTENT'
      },
      anchorOffset: 0
    }
    document.getSelection = jest.fn().mockReturnValue(mockSelection);
    getWord.mockReturnValue({ selectionStart: 0, selectionEnd: 4 })
    const app = Enzyme.shallow(<App />);
    const text = app.find('p');
    text.simulate('click')
    expect(getWord).toHaveBeenCalled();
    expect(app.state('selectionStart')).toBe(0);
    expect(app.state('selectionEnd')).toBe(4);
  })
})

