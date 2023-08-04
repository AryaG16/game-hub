import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import fire from "../assets/fire.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 30) return null;

  //index signature
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "Recommended", boxSize: "25px" },
    5: { src: fire, alt: "Exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
