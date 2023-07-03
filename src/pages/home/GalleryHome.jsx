import React from "react";
import { useQuery } from "../../hooks/useQuery";
import { galleryService } from "../../service/galleryService";
import Flickity from "react-flickity-component";
const GalleryHome = () => {
  const { data } = useQuery(() => galleryService.getGallery());
  if (!data) return;
  const gallery = data.galleries[0]?.images || [];
  return (
    <section className="gallery">
      <div className="heading --noline --center">
        <h2 className="heading__title title --t2">
          <span className="color--primary">CFD Circle</span> Là Một Team
        </h2>
      </div>
      <Flickity
        options={{
          contain: true,
          wrapAround: false,
          freeScroll: true,
          cellAlign: "left",
          lazyLoad: 6,
          imagesLoaded: true,
          wrapAround: true,
          prevNextButtons: false,
        }}
        className="list"
      >
        {gallery.length > 0 &&
          gallery.map((item, index) => (
            <img key={index} data-flickity-lazyload={item} alt="" />
          ))}
      </Flickity>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
};

export default GalleryHome;
