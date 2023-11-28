import { useEffect, useState } from 'react';

import * as courseServise from '../../services/courseService';
import CoursesListItem from './CoursesListItem/CoursesListItem';

export default function CoursesList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        courseServise.getAll()
            .then(result => setCourses(result))
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Courses</h1>

            {courses.map(course => (
                <CoursesListItem key={course._id} {...course} />
            ))}

            {courses.length === 0 && (
                <h3 className="no-articles">No courses yet</h3>
            )}
        </section>
    );
}
