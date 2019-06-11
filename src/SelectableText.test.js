import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import SelectableText from './SelectableText';

describe('SelectableText', () => {
  describe('when no word is selected', () => {
    it('should display the full text', () => {
      const sampleText = 'TEXT FOR TESTING';
      const clickableText = Enzyme.shallow(<SelectableText>{sampleText}</SelectableText>);
      expect(clickableText.text()).toBe(sampleText);
      expect(clickableText.exists('Highlight')).toBe(false);
    });
  });

  describe('when a word is selected', () => {
    it('should wrap the selected word in a "Highlight" component', () => {
      const selectedText = 'TEXT';
      const sampleText = `${selectedText} FOR TESTING`;
      const selectableText = Enzyme.mount(<SelectableText selectionStart={0} selectionEnd={4}>{sampleText}</SelectableText>);
      expect(selectableText.text()).toBe(sampleText);
      expect(selectableText.exists('Highlight')).toBe(true);
      expect(selectableText.find('Highlight').text()).toBe(selectedText);
    });
  });
})

