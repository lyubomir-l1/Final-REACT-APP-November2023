import { useNavigate } from 'react-router-dom';

import * as courseService from '../../services/courseService';

export default function CourseCreate() {
    const navigate = useNavigate();
    
    const createCourseSubmitHandler = async (e) => {
        e.preventDefault();

        const courseData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await courseService.create(courseData);

            navigate('/courses');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createCourseSubmitHandler}>
                <div className="container">
                    <h1>Create Course</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="levels">Trainer:</label>
                    <input type="text" id="trainer" name="trainer" placeholder="Trainer name" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Course" />
                </div>
            </form>
        </section>
    );
}
