import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits, handleOnClickImage }) => (
  <ul className={css['image-gallery']} onClick={e => handleOnClickImage(e)}>
    {hits?.map(image => (
      <ImageGalleryItem key={image.id} image={image} />
    ))}
  </ul>
);

export { ImageGallery };
