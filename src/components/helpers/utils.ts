// city
// geo
// street
// suite
// zipcode
export const getLocationName = (address: any) => {
    return `${address?.street}, ${address?.city}, ${address?.zipcode}`
}


export const getFilteredPhotos = (photos: any, albumId: any) => {

    if (photos && photos.length > 0) {
        return photos.filter((pho: any) => pho.albumId == albumId)
    }

    return photos.slice(0, 20) // Initially showing only 20 / Loader can be used later
}

export const getFitleredAlbums = (albums: any, userId: any) => {

    if (albums && albums.length > 0) {
        return albums.filter((alb: any) => alb.userId == userId)
    }
     
    return albums.slice(0, 20)  // Initially showing only 20 / Loader can be used later
}


