import { useEffect, useState } from 'react';
import * as courseService from '../../services/courseService';
import OldestCourse from './OldestCourse';

export default function Home() {

    const [oldestCourses, setOldestCourses] = useState([]);

    useEffect(() => {
        courseService.getOldest()
            .then(result => setOldestCourses(result))
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Come with us for</h2>
                <h3>A NEW JOURNEY IN HUNTING</h3>
            </div>
            <img src="./images/5b8ab123a639e004e1cab50b.png" alt="hero" />

            <div id="home-page">
                <h1>Oldest Courses</h1>

                {oldestCourses.map(course => <OldestCourse {...course} />)}

                {!oldestCourses.length && <p className="no-articles">No courses yet</p>}

            </div>
        </section>
    );
}
