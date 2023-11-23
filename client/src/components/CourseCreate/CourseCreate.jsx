import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as courseService from '../../services/courseService';

// const formInitialState = {
//     title: '',
//     category: '',
//     maxLevel: '',
//     trainer: '',
//     imageUrl: '',
//     summary: '',
// };


export default function CourseCreate() {


    // const [formValues, setFormValues] = useState(formInitialState);
    const navigate = useNavigate();

    // const changeHandler = (e) => {
    //     e.preventDefault();
    //     setFormValues(state => ({
    //         ...state,
    //         [e.target.name]: e.target.value,
    //     })); 
    // }
    
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
            <form onSubmit={createCourseSubmitHandler} id="create" >
                <div className="container">
                    <h1>Create Course</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" /*value={formValues.title} onChange={changeHandler} */ placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" /* value={formValues.category} onChange={changeHandler} */ placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" /* value={formValues.maxLevel} onChange={changeHandler} */ min="1" placeholder="1" />

                    <label htmlFor="levels">Trainer:</label>
                    <input type="text" id="trainer" name="trainer" /* value={formValues.trainer} onChange={changeHandler} */ placeholder="Trainer name" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" /* value={formValues.imageUrl} onChange={changeHandler} */ placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" /* value={formValues.summary} onChange={changeHandler} */ id="summary"></textarea>
                    <input className="btn submit" type="submit"  value="Create Course" />
                </div>
            </form>
        </section>
    );
}
