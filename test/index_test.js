import 'should';
import ReactDOM from 'react-dom';
import React from 'react';
import { expect } from 'chai';
// import TestUtils from 'react-addons-test-utils'
import { shallow } from 'enzyme';
import Index from '../src/index'

describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Hello PAJK', function() {
    let cp = ReactDOM.render(<Index/>, container);
    // let welcome = TestUtils.findRenderedComponentWithType(cp, Index);
    // ReactDOM.findDOMNode(welcome).textContent.should.be.eql('Hello Tmall');
  });
});

// import { shallow, mount, render } from "enzyme";
// import basic from "../src/basic";
// import { expect } from 'chai';

// describe("<MyComponent />", () => {
//   const wrapper = shallow(<basic />);
//   // expect(wrapper.find(basic)).to.have.length(3);
// });