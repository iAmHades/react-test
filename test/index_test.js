import 'should';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme';
import Index from '../src/index'

describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Hello PAJK', function() {
    let cp = ReactDOM.render(<Index/>, container);
    let welcome = TestUtils.findRenderedComponentWithType(cp, Index);
    // ReactDOM.findDOMNode(welcome).textContent.should.be.eql('Hello Tmall');
  });
});
