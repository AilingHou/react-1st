
import React from 'react';
import './css/NewsItem.css';
import url from 'url';
import moment from 'moment';
import vote from './img/grayarrow2x.gif'
import _ from 'lodash'


var NewsItem = React.createClass({
  getDomain: function(){
    return url.parse(this.props.item.url).hostname;
  },
  getCommentLink: function(){
    var commentText = 'discuss';
    if(this.props.item.kids && this.props.item.kids.length){
        commentText = this.props.item.kids.length + '  comments';
    }
    return (<a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>);
  },
  getSubtext: function(){
    return(
             <div className="newsItem-subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
        );
  },
  getRank: function(){
    return(
        <div className="newsItem-rank">
            {this.props.rank}.
        </div>)
  },
  getVote:function(){
    return(<div className="newsItem-vote">
            <a href={'https://news.ycombinator.com/vote?for='+this.props.item.id+'&dir=up&whence=news'}>
                <img src={vote} width="10" alt='pic here'/>
            </a>
        </div>)
  },
  getTitle: function () {
    return (
      <div className="newsItem-title">
        <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        <span className="newsItem-domain">
          ({this.getDomain()})
        </span>
      </div>
    );
  },
  render: function() {
    return (
      <div className="newsItem">
        {this.getRank()}
        {this.getVote()}
        <div className="newsItem-itemText">
            {this.getTitle()}
            {this.getSubtext()}
        </div>
      </div>
    );
  }
});

export default NewsItem;
