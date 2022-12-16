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

const ShareScore = ({ highscore }) => {
  const shareButtonProps = {
    url: "https://projects.marcnitzsche.de/ClickTheNumber",
  };
  const title = `My best time for Click The Number is ${highscore} seconds. Can you beat me?`;

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
        title="Click The Number speed test"
        hashtags={["game", "ClickTheNumber"]}
        related={["marc-nitzsche"]}
      >
        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <WhatsappShareButton {...shareButtonProps} title={title}>
        <WhatsappIcon {...iconProps} />
      </WhatsappShareButton>
      <EmailShareButton {...shareButtonProps} subject="Check out this game" body={title}>
        <EmailIcon {...iconProps} />
      </EmailShareButton>
    </div>
  );
};

export default ShareScore;
