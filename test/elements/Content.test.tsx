import * as React from 'react';
import { shallow } from 'enzyme';

import { Content } from './../../src';

describe('Content', () => {
    it('should render a div with .content', () => {
        const component = shallow(<Content>My Content</Content>);
        expect(component.contains(<div className='content'>My Content</div>)).toBe(true);
    });

    it('should render a div with .delete and custom classNames', () => {
        const component = shallow(<Content className='custom loader'>My Content</Content>);
        expect(component.hasClass('content')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});