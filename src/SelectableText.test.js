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
})

