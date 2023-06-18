import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ loadMore }) => {
  const handleButtonClick = () => {
    loadMore();
  };
  return (
    <LoadMoreButton type="button" onClick={handleButtonClick}>
      Load more
    </LoadMoreButton>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
