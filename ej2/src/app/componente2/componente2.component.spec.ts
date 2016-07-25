/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Componente2Component } from './componente2.component';

describe('Component: Componente2', () => {
  it('should create an instance', () => {
    let component = new Componente2Component();
    expect(component).toBeTruthy();
  });
});
