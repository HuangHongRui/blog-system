import React from 'react';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';
import './Article.css';

const Articles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5vh;
`;

class Article extends React.PureComponent<ArticleItemProps> {
  constructor(props: ArticleItemProps) {
    super(props);
    this.state = {};
  }

  render() {
    const articleData = [
      {
        title: '第一章',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        likes: '666',
        createTimes: '2018年03月04日'
      },
      {
        title: '第一章',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        likes: '666',
        createTimes: '2018年03月04日'
      }
    ];
    return (
      <Articles>
        {
          articleData.map( (item, i) => {
            return (
              <div
                key={i}
                className="articleItem"
              >
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div>
                  <span className="like">
                    <Icon type="heart-o" />
                     点赞{item.likes}
                  </span>
                  <span>{item.createTimes}</span>
                </div>
              </div>
            );
          })
        }
      </Articles>
    );
  }
}

interface ArticleItemProps {

}
export default Article;
