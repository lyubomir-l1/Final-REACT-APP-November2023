import { useEffect, useState } from 'react';
import "./welcome.css";
import "./footer.css";
import * as courseService from '../../services/courseService';
import OldestCourse from './OldestCourse';
import { Link } from 'react-router-dom';

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

                {oldestCourses.map(course => <OldestCourse key={course._id} {...course} />)}

                {!oldestCourses.length && <p className="no-articles">No courses yet</p>}

            </div>
            <footer>

                    <div className="section-footer">
                        <div className="container">
                            <p className="footer-message">© 2023, All Rights Reserved.</p>
                            <ul className="socials">
                                <li>
                                    <Link to="https://www.twitter.com/">
                                        <i className="fa-brands fa-twitter" />
                                        <span>Twitter</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.facebook.com/">
                                        <i className="fa-brands fa-facebook" />
                                        <span>Facebook</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/">
                                        <i className="fa-brands fa-instagram" />
                                        <span>Instagram</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
        </section>
                    
    );
}
