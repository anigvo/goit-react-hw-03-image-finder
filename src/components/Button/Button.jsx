export const Button = ({ loadMore }) => {
  const handleButtonClick = () => {
    loadMore();
  };
  return (
    <button type="button" onClick={handleButtonClick}>
      Load more
    </button>
  );
};

