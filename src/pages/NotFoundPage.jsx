import Header from "../components/Header";
import './NotFoundPage.css'

function NotFoundPage () {
    return (
        <>
            <title>404 (Not Found)</title>
            <Header/>
            <p className="not-found-message">Page not found</p>
        </>
    );
}

export default NotFoundPage;