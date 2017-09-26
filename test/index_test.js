import 'should';
import ReactDOM from 'react-dom';
import React from 'react';
import {
  expect
} from 'chai';
import {
  shallow
} from 'enzyme';
import Index from '../src/index'
import {
  SearchBar
} from "antd-mobile-web";

describe('<Index />', () => {
  it('Hello PAJK', () => {
    const wrapper = shallow(< Index /> )
    expect(wrapper.find(SearchBar).render().find('form.am-search').exists()).to.equal(false)
    // expect(wrapper.find('form.am-search').exists()).to.equal(true);
  })
})