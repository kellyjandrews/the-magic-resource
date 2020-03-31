import { useCarousel } from './useCarousel';
import FeaturedPostItem from './FeaturedPostItem';
import { Box, Icon } from "@chakra-ui/core";
import "./FeaturedPostSlider.css";

function lastToFirst(arr) {
  let lastItem = arr[arr.length - 1]
  return [lastItem, ...arr.slice(0, arr.length - 1)];
};

function firstToLast(arr) {
  let firstItem = arr[0];
  return [...arr.slice(1), firstItem];
};


const FeaturedPostSlider = ({ featureList = [], interval = 5000, slidesPresented = 1 }) => {
  const length = featureList.length;
  const numActive = Math.min(length, slidesPresented);
  const [active, setActive, handlers, style] = useCarousel(length, interval, { slidesPresented: numActive });

  return (
    <Box
      className="slider"
      w="100%"
      mb={6}
      position="relative"
      overflow="hidden"
    >
      <Box
        className="slider-container"
        display="flex"
        flexDirection="row"
        minH={"400px"}
        overflow="hidden"
        position={"relative"}
        style={style}
        {...handlers}
      >
        <FeaturedPostItem {...featureList[featureList.length-1]} />
        {featureList?.map((feature, index) => <FeaturedPostItem {...feature} id={index} key={feature.id} />)}
        <FeaturedPostItem {...featureList[0]} />
      </Box>
      <Icon name="chevron-left" focusable size={20} position="absolute" top="43%" left="0" zIndex={3} />
      <Icon name="chevron-right" focusable size={20} position="absolute" top="43%" right="0" zIndex={3} />
      {featureList?.map((feature, index) => <span key={index} onClick={() => setActive(index)} className={`dot ${active === index ? "active" : ""}`} />)}
    </Box>
  );
}

export default FeaturedPostSlider;