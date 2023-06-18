import { IScrollTopButton } from '../_type';
import { faker } from '@faker-js/faker';

export class ScrollTopButtonFaker {
  static generator(): IScrollTopButton {
    return {
      scrollY: faker.datatype.number({ min: 1000, max: 1500 })
    } as IScrollTopButton;
  }
}
