import React from "react";
import Layout from "../layouts/Layout";
import AlbumCard from "../common/AlbumCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFitleredAlbums } from "../helpers/utils";
export interface PropTypes {
  users?: any;
}

const AlbumsPage = ({ users }: PropTypes) => {
  const gAlbums = useSelector((state: any) => state?.albums);
  const { userId } = useParams()

  return (
    <Layout heading="Albums">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {gAlbums &&
          getFitleredAlbums(gAlbums, userId).map((album: any) => {
            return (
              <AlbumCard
                key={`user_id${album?.id}`}
                id={album?.id}
                title={album?.title}
                userId={album?.userId}
              />
            );
          })}
      </div>
    </Layout>
  );
};

export default AlbumsPage;
