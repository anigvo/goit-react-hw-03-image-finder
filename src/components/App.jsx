import React, { Component } from 'react';
import axios from 'axios';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader'
import { AppContainer, FailLoad } from './App.styled.jsx';

class App extends Component {
  state = {
    response: [],
    isLoading: false,
    isFind: false,
    page: 1,
    value: null,
    showLoadMore: false,
    hasMoreImages: true,
  };

  onSubmit = inputValue => {
    this.setState(
      prevState => {
        if (prevState.value === inputValue) {
          return {
            page: prevState.page + 1,
            isLoading: true,
          };
        } else {
          return {
            isLoading: true,
            isFind: false,
            value: inputValue,
            page: 1,
            response: [],
          };
        }
      },
      () => {
        const API_KEY = '35918866-0b9867c5c5e6a777413a575db';
        const requestUrl = `https://pixabay.com/api/?q=${inputValue}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
        
        axios
          .get(requestUrl)
          .then(response => {
            const totalResponse = [...this.state.response, ...response.data.hits];
            const hasMoreImages =
              response.data.hits.length >= 12 &&
              totalResponse.length < response.data.totalHits;

            this.setState({
              response: totalResponse,
              showLoadMore: hasMoreImages,
              hasMoreImages: hasMoreImages,
            });
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.setState(prevState => ({
              isLoading: false,
              isFind: prevState.response.length === 0,
            }));
          });
        scroll.scrollToBottom({
          duration: 500, // Продолжительность анимации в миллисекундах
          delay: 100, // Задержка перед началом анимации
          smooth: 'easeInOutQuart', // Тип плавности анимации
        });
      }
    );
  };

  loadMore = () => {
    this.onSubmit(this.state.value);
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isFind && <FailLoad>Упс, за таким запитом немає результатів :( </FailLoad>}
        <ImageGallery searchValue={this.state.response} />
        {this.state.isLoading ? (
          <Loader />
        ) : this.state.showLoadMore ? (
          <Button loadMore={this.loadMore} />
        ) : null}
      </AppContainer>
    );
  }
}

export { App };
