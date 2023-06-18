import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, Img } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImgUrl, tags, closeModal } = this.props;
    return (
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <Img src={largeImgUrl} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImgUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export { Modal };
