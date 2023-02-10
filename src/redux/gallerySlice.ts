import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface GallaryState {
    users: [],
    albums: [],
    photos: [],
}

// Define the initial state using that type
const initialState: GallaryState = {
    users: [],
    albums: [],
    photos: [],
}

export const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState,
    reducers: {
        setUsers: (state, res: any) => {
            return state = { ...state, users: res.payload };
        },
        setAlbums: (state, res: any) => {
            return state = { ...state, albums: res.payload };
        },
        setPhotos: (state, res: any) => {
            return state = { ...state, photos: res.payload };
        },
    },
})

export const {
    setUsers,
    setAlbums,
    setPhotos
} = gallerySlice.actions


export default gallerySlice.reducer