import React from 'react';
import { Link } from 'react-router-dom';
import { getLocationName } from '../helpers/utils';

interface PropsTypes {
    id: string | number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address?: any,
    image?: string,
} 

const UserCard = (props: PropsTypes) => {
    const { id, name, username, email, phone, website, address, image } = props;
    return (
        <div className="flex items-center w-full justify-center">

            <div className="w-full">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-20 h-20 rounded-full mx-auto" src={image ? image : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                            {name}
                        </h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            {username}
                        </div>
                        <table className="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td className="px-2 py-2">{email}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td className="px-2 py-2">{phone}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Website</td>
                                    <td className="px-2 py-2">{website}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td className="px-2 py-2">{address ? getLocationName(address) : ""}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="text-center my-3">
                            <Link to={`/user/${id}/albums`}>
                                <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Albums</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserCard;