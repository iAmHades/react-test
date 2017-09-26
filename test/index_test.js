import 'should';
import ReactDOM from 'react-dom';
import React from 'react';
import {
  expect
} from 'chai';
import {
  shallow,
  mount
} from 'enzyme';
import {
  SearchBar
} from "antd-mobile-web";
// import Index from '../src/index'
import Basic from '../src/basic'

describe('<Index />', () => {
  it('Hello PAJK', () => {
    const wrapperBasic = shallow(<Basic />)
    expect(wrapperBasic.text()).to.equal('welcome to here!')
    expect(wrapperBasic.text()).to.equal('welcome to here!!')
    // const wrapper = mount(< Index /> )
    // expect(wrapper.find('form.am-search').length).to.equal(1)
    // expect(wrapper.find('form.am-search').exists()).to.equal(true);
  })
})