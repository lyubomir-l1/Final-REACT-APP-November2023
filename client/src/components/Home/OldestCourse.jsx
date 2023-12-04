import { Link } from 'react-router-dom';

export default function OldestCourse({
    _id,
    imageUrl,
    courseName,

}) {
    return (
        <div className="course">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{courseName}</h3>
            <div className="data-buttons">
                <Link to={`/courses/${_id}`} className="btn details-btn">Details</Link>
            </div>
        </div>
    )
}