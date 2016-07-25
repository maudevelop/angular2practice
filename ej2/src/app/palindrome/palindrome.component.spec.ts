/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PalindromeComponent } from './palindrome.component';

describe('Component: Palindrome', () => {
  it('should create an instance', () => {
    let component = new PalindromeComponent();
    expect(component).toBeTruthy();
  });
});
