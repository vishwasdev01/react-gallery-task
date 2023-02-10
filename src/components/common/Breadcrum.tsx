import React from "react";
import {
    Link,
    NavLink,
    Outlet,
    useLocation,
    useParams,
} from "react-router-dom";
 
const Breadcrumb = () => {
    const { userId } = useParams();
    const { albumId } = useParams();
    const location = useLocation();
    const userPath = "/";
    const albumPath = `/user/${userId}/albums`;
    const photosPath = `/user/${userId}/album/${albumId}`;

    return (
        <>
            <nav
                className="flex px-5 py-3 text-gray-700 bg-gray-100 dark:bg-gray-800"
                aria-label="Breadcrumb"
            >
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm text-blue-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                            Home
                        </Link>
                    </li>
                    {photosPath === location.pathname.toString() ||
                        albumPath === location.pathname.toString() ? (
                        <li>
                            <div className="flex items-center">
                                /
                                <Link
                                    to={`/user/${userId}/albums`}
                                    className="ml-1 text-sm text-blue-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Albums
                                </Link>
                            </div>
                        </li>
                    ) : null}
                    {photosPath === location.pathname.toString() ? (
                        <li>
                            <div className="flex items-center">
                                /
                                <span className="ml-1 text-sm text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Photos
                                </span>
                            </div>
                        </li>
                    ) : null}
                </ol>
            </nav>
            <Outlet />
        </>
    );
};

export default Breadcrumb;
