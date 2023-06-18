import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <InfinitySpin width="200" color="#3f51b5" />;
    </LoaderContainer>
  );
};
