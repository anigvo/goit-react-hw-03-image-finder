export const ImageGalleryItem = ({ smallImgUrl, largeImgUrl, tags }) => {
  return (
    <li className="gallery-item">
      <img src={smallImgUrl} alt={tags} />
    </li>
  );
};
