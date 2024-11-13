import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { PropTypes } from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log("images ==> ", images);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Cargando...</p>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
