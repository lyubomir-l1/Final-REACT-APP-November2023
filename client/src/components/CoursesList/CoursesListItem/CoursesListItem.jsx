import { Link } from "react-router-dom";

export default function CoursesListItem({
    _id,
    courseName,
    typeOfGun,
    imageUrl,
}) {
    return (
        <div className="allCourses">
            <div className="allCourses-info">
                <img src={imageUrl} />
                <h2>{courseName}</h2>
                <h6>{typeOfGun}</h6>
                <Link to={`/courses/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
