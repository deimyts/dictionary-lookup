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

  describe('when highlighting a selection', () => {
    const renderWithSelection = (text, start, end) => Enzyme.mount(<SelectableText selectionStart={start} selectionEnd={end}>{text}</SelectableText>);

    describe('when the first word is selected', () => {
      it('should wrap the selected word in a "Highlight" component', () => {
        const selectedText = 'TEXT';
        const sampleText = `${selectedText} FOR TESTING`;
        const selectableText = renderWithSelection(sampleText, 0, 4)
        expect(selectableText.text()).toBe(sampleText);
        expect(selectableText.exists('Highlight')).toBe(true);
        expect(selectableText.find('Highlight').text()).toBe(selectedText);
      });
    });

    describe('when a word in the middle is selected', () => {
      it('should wrap the selected word in a "Highlight" component', () => {
        const selectedText = 'FOR';
        const sampleText = `TEXT ${selectedText} TESTING`;
        const selectableText = renderWithSelection(sampleText, 5, 8)
        expect(selectableText.text()).toBe(sampleText);
        expect(selectableText.exists('Highlight')).toBe(true);
        expect(selectableText.find('Highlight').text()).toBe(selectedText);
      });
    });

    describe('when the last word is selected', () => {
      it('should wrap the selected word in a "Highlight" component', () => {
        const selectedText = 'TESTING';
        const sampleText = `TEXT FOR ${selectedText}`;
        const selectableText = renderWithSelection(sampleText, 9, 16)
        expect(selectableText.text()).toBe(sampleText);
        expect(selectableText.exists('Highlight')).toBe(true);
        expect(selectableText.find('Highlight').text()).toBe(selectedText);
      });
    });
  });
})

