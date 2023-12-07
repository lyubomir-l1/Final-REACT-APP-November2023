import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./create-edit.css";
import * as courseService from '../../services/courseService';

export default function CourseEdit() {

    const navigate = useNavigate();
    const { courseId } = useParams();
    const [course, setCourse] = useState({
        courseName: '',
        typeOfGun: '',
        price: '',
        trainer: '',
        imageUrl: '',
        description: '',
    });
    useEffect(() => {
        courseService.getOne(courseId)
            .then(result => {
                setCourse(result)
            })
    }, [courseId]);

    const editCourseSubmitHandler = async (e) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await courseService.edit(courseId, values);
            navigate('/courses');

        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setCourse(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <section id="create-page" className="auth">
            <form onSubmit={editCourseSubmitHandler} id="create" >
                <div className="container">
                    <h1>Edit Course</h1>
                    <label htmlFor="courseName">Course Name:</label>
                    <input type="text" id="courseName" name="courseName" value={course.courseName} onChange={onChange} placeholder="Enter name of the course..." />

                    <label htmlFor="typeOfGun">Type Of Gun:</label>
                    <input type="text" id="typeOfGun" name="typeOfGun" value={course.typeOfGun} onChange={onChange} placeholder="Enter type of the weapon..." />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={course.price} onChange={onChange} min="1" placeholder="Enter a number..." />

                    <label htmlFor="trainer">Trainer:</label>
                    <input type="text" id="trainer" name="trainer" value={course.trainer} onChange={onChange} placeholder="Enter trainer name..." />

                    <label htmlFor="course-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={course.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" value={course.description} onChange={onChange} id="description" placeholder="Enter description of the course..."></textarea>
                    <input className="btn submit" type="submit" value="Edit Course" />
                </div>
            </form>
        </section>
    );
}
