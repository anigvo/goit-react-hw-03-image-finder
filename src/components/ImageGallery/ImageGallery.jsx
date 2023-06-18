import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { List } from './ImageGallery.styled'

export const ImageGallery = ({ searchValue }) => {
    return (
      <List className="gallery">
        {searchValue.map(item => (
          <ImageGalleryItem
            key={item.id}
            smallImgUrl={item.webformatURL}
                largeImgUrl={item.largeImageURL}
                tags={item.tags}
          />
        ))}
      </List>
    );
};

ImageGallery.propTypes = {
  searchValue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};


