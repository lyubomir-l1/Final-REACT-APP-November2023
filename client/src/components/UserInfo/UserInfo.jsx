import { Link } from 'react-router-dom';
import * as authContext from '../contexts/authContext'

export default function UserInfo(){
    return(
<>
<section className="userInfo-section">
    <div className="userInfo-wrap">

      <div className="userInfo-content">
        <h2 className="userInfo-h2">
            Username: 
        </h2>
        <h2 className="userInfo-h2">
            Email: 
        </h2>
        <button><Link to="/">Home</Link></button>
      </div>

    </div>
</section>
</>
    )
}