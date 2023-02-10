import React from 'react';

interface PropsTypes {
    id: string,
    title: string,
    albumId: string,
    url: string,
    thumbnailUrl: string,
} 

const ImageCard = (props: PropsTypes) => {
    const { id, title, url, thumbnailUrl, albumId } = props;
    return (
        <div className="flex items-center w-full justify-center">

            <div className="max-w-xs w-full">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-full mx-auto" src={thumbnailUrl ? thumbnailUrl : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center h-20 text-gray-900">
                            {title}
                        </h3>
                        <p className='text-center'>Album Id: {albumId}</p>

                        {/* <div className="text-center my-3">
                            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Full Image</span>
                        </div> */}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ImageCard;