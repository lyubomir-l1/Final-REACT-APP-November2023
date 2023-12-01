import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as courseService from '../../services/courseService';


export default function CourseCreate() {

    const [formValues, setFormValues] = useState({
        courseName: '',
        typeOfGun: '',
        price: '',
        trainer: '',
        imageUrl: '',
        description: '',
    });

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

        const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        })); 
    }

    return (
        <section id="create-page" className="auth">
            <form onSubmit={createCourseSubmitHandler} id="create" >
                <div className="container">
                    <h1>Set New Course</h1>
                    <label htmlFor="leg-title">Course Name:</label>
                    <input type="text" id="title" name="courseName" value={formValues.courseName} onChange={onChange} placeholder="Enter game title..." />

                    <label htmlFor="category">Type Of Gun:</label>
                    <input type="text" id="category" name="typeOfGun" value={formValues.typeOfGun} onChange={onChange} placeholder="Enter game category..." />

                    <label htmlFor="levels">Price:</label>
                    <input type="number" id="maxLevel" name="price" value={formValues.price} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="levels">Trainer:</label>
                    <input type="text" id="trainer" name="trainer" value={formValues.trainer} onChange={onChange} placeholder="Trainer name" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formValues.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Description:</label>
                    <textarea name="description" value={formValues.description} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit"  value="Create Course" />
                </div>
            </form>
        </section>
    );
}
