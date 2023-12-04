import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as courseService from '../../services/courseService';
import * as commentService from '../../services/commentService';
import AuthContext from "../contexts/authContext";
import useForm from "../../hooks/useForm";

export default function CourseDetails() {
    const navigate = useNavigate();
    const { email, userId, isAuthenticated } = useContext(AuthContext)
    const [course, setCourse] = useState({});
    const [comments, setComments] = useState([]);
    const { courseId } = useParams();

    useEffect(() => {
        courseService.getOne(courseId)
            .then(setCourse);

        commentService.getAll(courseId)
            .then(setComments);
    }, [courseId]);

    const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            courseId,
            values.comment
        );



        setComments(state => [...state, { ...newComment, owner: { email } }]);
    }

    const deleteCourseHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${course.courseName}`);
        if (isConfirmed) {
            await courseService.remove(courseId);
            navigate('/courses');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {

        comment: '',
    });

    return (
        <section id="course-details">
            <h1>Course Details</h1>
            <div className="info-section">
                <div className="course-header">
                    <img className="course-img" src={course.imageUrl} alt={course.courseName} />
                    <h1>{course.courseName}</h1>
                    <span className="price">Price: {course.price} $</span>
                    <p className="type"> Type of Gun: {course.typeOfGun}</p>
                </div>

                <p className="text">{course.description}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this course )  --> */}

                {isAuthenticated && userId === course._ownerId && (
                    <div className="buttons">
                        <button className="button"><Link to={`/courses/${course._id}/edit`} className="button">Edit</Link></button>
                        <button className="button" onClick={deleteCourseHandler}>Delete</button>
                    </div>
                )}

            </div>
            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            )}

        </section>
    );
}
