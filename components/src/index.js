import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author= "Di Me May"
        timeAgo="Today at 9:00AM"
        content="Troi oi tao cuoi tao ia"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author= "Cam Lan Suc"
        timeAgo="Today at 11:00PM"
        content="con bong long xien"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author= "Chan Mu"
        timeAgo="Today at 12:00PM"
        content="Hoa mi hoa mi hot"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
