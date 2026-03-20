import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import WithLogging from '../HOC/WithLogging';

const courseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

export const CourseList = ({ courses = [] }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(courseShape),
};

const CourseListWithLogging = WithLogging(CourseList);

export default CourseListWithLogging;
