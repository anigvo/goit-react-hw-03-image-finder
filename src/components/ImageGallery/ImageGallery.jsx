import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ searchValue }) => {
    return (
      <ul className="gallery">
        {searchValue.map(item => (
          <ImageGalleryItem
            key={item.id}
            smallImgUrl={item.webformatURL}
                largeImgUrl={item.largeImageURL}
                tags={item.tags}
          />
        ))}
      </ul>
    );
};



