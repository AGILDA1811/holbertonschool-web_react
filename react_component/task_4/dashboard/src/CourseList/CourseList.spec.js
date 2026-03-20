import React from 'react';
import { render, screen } from '@testing-library/react';
import { CourseList } from './CourseList';

describe('CourseList component', () => {
  const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('renders 5 rows when courses array is provided', () => {
    const { container } = render(<CourseList courses={coursesList} />);
    expect(container.querySelectorAll('tr')).toHaveLength(5);
  });

  it('renders 3 rows when courses array is empty', () => {
    const { container } = render(<CourseList courses={[]} />);
    expect(container.querySelectorAll('tr')).toHaveLength(3);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });
});
