import React from 'react';
import { Link } from 'react-router-dom';

interface PropsTypes {
    id: string | number,
    title: string,
    userId: string,
} 

const AlbumCard = (props: PropsTypes) => {
    const { id, userId, title } = props;
    return (
        <div className="flex items-center w-full justify-center">

            <div className="w-full">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="p-2">
                        <h3 className="text-center h-20 text-gray-900 font-medium">
                            {title}
                        </h3>
                        <p className='text-center'>User Id: {userId}</p>
                        <div className="text-center my-3">
                            <Link to={`/user/${userId}/album/${id}`}>
                                <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Photos</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard;