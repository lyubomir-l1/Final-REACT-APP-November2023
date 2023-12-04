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
    if(formValues.courseName.length === 0){
        alert('Invalid Form, 0 special characters in password')
    }

    return (
        <section id="create-page" className="auth">
            <form onSubmit={createCourseSubmitHandler} id="create" >
                <div className="container">
                    <h1>Set New Course</h1>
                    <label htmlFor="courseName">Course Name:</label>
                    <input type="text" id="courseName" name="courseName" value={formValues.courseName} onChange={onChange} placeholder="Enter name of the course..." />
                    

                    <label htmlFor="typeOfGun">Type Of Gun:</label>
                    <input type="text" id="typeOfGun" name="typeOfGun" value={formValues.typeOfGun} onChange={onChange} placeholder="Enter type of the weapon..." />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={formValues.price} onChange={onChange} min="1" placeholder="Enter a number..." />

                    <label htmlFor="trainer">Trainer:</label>
                    <input type="text" id="trainer" name="trainer" value={formValues.trainer} onChange={onChange} placeholder="Enter trainer name..." />

                    <label htmlFor="course-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formValues.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" value={formValues.description} onChange={onChange} id="description" placeholder="Enter description of the course..."></textarea>
                    <input className="btn submit" type="submit" value="Create Course" />
                </div>
            </form>
        </section>
    );
}
