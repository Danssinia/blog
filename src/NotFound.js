import {Link } from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page Doesn't Found</p>
            <Link to='/'>Return To Homepage</Link>
        </div>
     );
}
 
export default NotFound;