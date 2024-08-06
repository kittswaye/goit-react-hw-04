import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images }) {
  console.log(images);
  return (
    <ul className={css.gallery}>
      {images.map(({ id, urls, description }) => (
        <li key={id}>
          <ImageCard urls={urls} description={description} />
        </li>
      ))}
    </ul>
  );
}
