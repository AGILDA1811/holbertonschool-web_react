import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
  ];

  it('renders 3 NotificationItem components', () => {
    const wrapper = shallow(<Notifications notifications={notificationsList} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders first item with correct type and value', () => {
    const wrapper = shallow(<Notifications notifications={notificationsList} />);
    const first = wrapper.find(NotificationItem).at(0);
    expect(first.prop('type')).toBe('default');
    expect(first.prop('value')).toBe('New course available');
  });

  it('renders second item with correct type and value', () => {
    const wrapper = shallow(<Notifications notifications={notificationsList} />);
    const second = wrapper.find(NotificationItem).at(1);
    expect(second.prop('type')).toBe('urgent');
    expect(second.prop('value')).toBe('New resume available');
  });

  it('renders third item with correct type and html', () => {
    const wrapper = shallow(<Notifications notifications={notificationsList} />);
    const third = wrapper.find(NotificationItem).at(2);
    expect(third.prop('type')).toBe('urgent');
    expect(third.prop('html')).toEqual({ __html: 'Urgent requirement - complete by EOD' });
  });

  it('renders with empty array when no notifications prop passed', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });
});