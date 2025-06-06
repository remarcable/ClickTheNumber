import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import "./ShareScore.css";

/**
 * @typedef {Object} ShareScoreProps
 * @property {number} highscore - The highscore to be shared.
 */

/**
 * A component for sharing the game score on social media.
 * @param {ShareScoreProps} props - The props for the ShareScore component.
 */
const ShareScore = ({ highscore }) => {
  const shareButtonProps = {
    url: "https://projects.marcnitzsche.de/ClickTheNumber/",
  };
  const title = `My best time in Click The Number is ${highscore}s. What's yours?`;

  const iconProps = {
    size: 40,
    round: true,
  };

  return (
    <div className="share-score">
      <FacebookShareButton {...shareButtonProps} quote={title} hashtag="ClickTheNumber">
        <FacebookIcon {...iconProps} />
      </FacebookShareButton>
      <TwitterShareButton
        {...shareButtonProps}
        title={title}
        hashtags={["game", "ClickTheNumber"]}
        related={["marc_nitzsche"]}
      >
        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <WhatsappShareButton {...shareButtonProps} title={title}>
        <WhatsappIcon {...iconProps} />
      </WhatsappShareButton>
      <EmailShareButton {...shareButtonProps} body={title}>
        <EmailIcon {...iconProps} />
      </EmailShareButton>
    </div>
  );
};

export default ShareScore;
