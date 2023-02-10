import React from "react";
import Layout from "../layouts/Layout";
import { useSelector } from "react-redux";
import ImageCard from "../common/ImageCard";
import { useParams } from "react-router-dom";
import { getFilteredPhotos } from "../helpers/utils";
export interface PropTypes {
  users?: any;
}

const PhotosPage = ({ users }: PropTypes) => {
  const gPhotos = useSelector((state: any) => state?.photos);
  const { albumId } = useParams();

  return (
    <Layout heading="Photos">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {gPhotos &&
          getFilteredPhotos(gPhotos, albumId).map((photo: any) => {
            return <ImageCard key={`user_id${photo?.id}`} {...photo} />;
          })}
      </div>
    </Layout>
  );
};

export default PhotosPage;
