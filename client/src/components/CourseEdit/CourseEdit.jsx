import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as courseService from '../../services/courseService';
import useForm from '../../hooks/useForm';

export default function CourseEdit() {

    const navigate = useNavigate();
    const {courseId} = useParams();
    const [course, setCourse] = useState({});
    useEffect(() => {
        courseService.getOne(courseId)
        .then(result => {
            setCourse(result)
        })
    }, [courseId])
    const createCourseSubmitHandler = async (values) => {

        try {
            await courseService.create(values);
            navigate('/courses');

        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const { values, onChange, onSubmit } = useForm(createCourseSubmitHandler, {
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    })

    return (
        <section id="create-page" className="auth">
            <form onSubmit={onSubmit} id="create" >
                <div className="container">
                    <h1>Edit Course</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onChange} placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={onChange} placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={values.maxLevel} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="levels">Trainer:</label>
                    <input type="text" id="trainer" name="trainer" value={values.trainer} onChange={onChange} placeholder="Trainer name" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={values.summary} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit"  value="Edit Course" />
                </div>
            </form>
        </section>
    );
}
