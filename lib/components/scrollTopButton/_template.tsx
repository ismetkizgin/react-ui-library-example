import React, { useEffect, useState } from 'react';
import { ScrollTopButtonBase, ArrowUpIcon } from './_style';
import { IScrollTopButton } from './_type';

export const ScrollTopButton = ({ scrollY = 400 }: IScrollTopButton) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollY) setVisible(true);
      else setVisible(false);
    });
  }, []);

  return visible ? (
    <ScrollTopButtonBase
      data-testid="scroll-top-button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}
    >
      <ArrowUpIcon>&#8593;</ArrowUpIcon>
    </ScrollTopButtonBase>
  ) : null;
};
