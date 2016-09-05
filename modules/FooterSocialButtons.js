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
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

    return (
      <div className="text-muted">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="pull-right">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="pull-right">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

          <GooglePlusShareButton
            url={shareUrl}
            className="pull-right">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
        </div>
    );
  },
});
