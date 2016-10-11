import React from 'react'

class FooterSocialButtons extends React.Component {
  render() {
    const shareUrl = window.location.href;
    const title = document.title;

    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl;
    const twitterUrl = 'http://twitter.com/share?text='+ escape(title)+ '&url=' + shareUrl;
    const pinterestUrl = 'http://pinterest.com/pin/create/button/?url='+ shareUrl +'&description=' + escape(title);
    return (
      <div className="social_col">
        <a aria-label="facebook" href={facebookUrl} target="_blank"><i aria-hidden="true" className="fa fa-facebook"></i></a>
        <a aria-label="twitter" href={twitterUrl} target="_blank"><i aria-hidden="true" className="fa fa-twitter"></i></a>
        <a aria-label="pinterest" href={pinterestUrl} target="_blank"><i aria-hidden="true" className="fa fa-pinterest-p"></i></a>
      </div>
    );
  }
}

export default FooterSocialButtons;
