import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Item, Img } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal() {
    this.setState({ isModalOpen: true });
  }
  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { smallImgUrl, largeImgUrl, tags } = this.props;
    return (
      <>
        <Item>
          <Img src={smallImgUrl} alt={tags} onClick={() => this.openModal()} />
        </Item>

        {this.state.isModalOpen && (
          <Modal
            largeImgUrl={largeImgUrl}
            tags={tags}
            closeModal={() => this.closeModal()}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImgUrl: PropTypes.string.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export { ImageGalleryItem };
