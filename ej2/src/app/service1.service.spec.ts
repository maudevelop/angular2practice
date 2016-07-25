/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Service1Service } from './service1.service';

describe('Service1 Service', () => {
  beforeEachProviders(() => [Service1Service]);

  it('should ...',
      inject([Service1Service], (service: Service1Service) => {
    expect(service).toBeTruthy();
  }));
});
