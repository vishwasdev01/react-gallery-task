import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';
import UserCard from '../common/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAlbums, setPhotos, setUsers } from '../../redux/gallerySlice';
import { baseUrl } from '../services/apis';

const UsersPage = () => {

    const dispatch = useDispatch();
    const gUsers = useSelector((state: any) => state?.users)

    const fetchUsers = async () => {
        try {
            const res = await axios.get(baseUrl + 'users');
            dispatch(setUsers(res.data));
        } catch (err) {
            console.log('err', err)
        }
    }

    const fetchAlbums = async () => {
        try {
            const res = await axios.get(baseUrl + 'albums',);
            dispatch(setAlbums(res.data));
        } catch (err) {
            console.log('err', err)
        }
    }

    const fetchPhotos = async () => {
        try {
            const res = await axios.get(baseUrl + 'photos',);
            dispatch(setPhotos(res.data));
        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        fetchUsers();
        fetchAlbums();
        fetchPhotos();
    }, [])


    return (
        <Layout heading="Users">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {gUsers && gUsers.map((user: any) => <UserCard
                    key={`user_id${user?.id}`}
                    id={user?.id}
                    name={user?.name}
                    username={user?.username}
                    email={user?.email}
                    phone={user?.phone}
                    website={user?.website}
                    address={user?.address}
                />)}

            </div>
        </Layout>
    )
}

export default UsersPage;