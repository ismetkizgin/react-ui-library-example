import { render } from '@testing-library/react';
import React from 'react';
import { IScrollTopButton, ScrollTopButton } from '..';
import { ScrollTopButtonFaker } from './_fixture';

describe('Scroll Top Button Component Test', () => {
  let mockScrollTopButtonData: IScrollTopButton;

  beforeEach(() => {
    mockScrollTopButtonData = ScrollTopButtonFaker.generator();
  });

  it('Should not render when scrollY is less than the threshold', () => {
    window.scrollY = mockScrollTopButtonData.scrollY! - 500;
    const { queryByTestId } = render(
      <ScrollTopButton {...mockScrollTopButtonData} />
    );

    expect(queryByTestId('scroll-top-button')).toBeNull();
  });
});
