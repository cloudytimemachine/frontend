import React from 'react'
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');

export default React.createClass({
  render() {
    const shareUrl = window.location.href;
    const title = 'Cloudy Time Machine: ' + window.location.title;

    return (
      <div className="row content text-muted">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="pull-left">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="pull-left">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

          <GooglePlusShareButton
            url={shareUrl}
            className="pull-left">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
        </div>
    );
  },
});
