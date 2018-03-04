import React from 'react';
import styled from 'styled-components';
import './Home.css';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import Article from './ArticleItem/Article';

const HomeView = styled.div`

`;
export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <HomeView className="home">
        <div className="articles">
          <CategoryMenu />
          <Article />
          <div className="component"/>
        </div>
      </HomeView>
    );
  }
}
