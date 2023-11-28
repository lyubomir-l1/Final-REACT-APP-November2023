import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as courseService from '../../services/courseService';
import * as commentService from '../../services/commentService';
import AuthContext from "../contexts/authContext";
import useForm from "../../hooks/useForm";

export default function CourseDetails() {
    const {email, userId} = useContext(AuthContext)
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
            // formData.get('username'),
            // formData.get('comment')
        );



        setComments(state => [...state, {...newComment, owner: {email}}]);
    }
    const {values, onChange, onSubmit} = useForm(addCommentHandler, {
        comment: '',

    });

    return (
        <section id="game-details">
            <h1>Course Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={course.imageUrl} alt={course.title} />
                    <h1>{course.title}</h1>
                    <span className="levels">MaxLevel: {course.maxLevel}</span>
                    <p className="type">{course.category}</p>
                </div>

                <p className="text">{course.summary}</p>

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

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {userId === course._ownerId && (
                        <div className="buttons">
                            <a href="#" className="button">Edit</a>
                            <a href="#" className="button">Delete</a>
                        </div>
                )}

            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    {/* <input type="text" name="username" placeholder="username" /> */}
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}
