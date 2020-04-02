import { useCarousel } from './useCarousel';
import FeaturedPostItem from './FeaturedPostItem';
import { Box, Icon } from "@chakra-ui/core";
import "./FeaturedPostSlider.css";

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
      display="flex"
      flexDirection="column"
      overflow="hidden"
      alignContent="center"
    >
      <Box
        className="slider-container"
        display="flex"
        flexDirection="row"
        pb={6}
        minH={"400px"}
        overflow="hidden"
        position={"relative"}
        style={style}
        {...handlers}
      >
        <FeaturedPostItem {...featureList[featureList.length - 1]} />
        {featureList?.map((feature, index) => <FeaturedPostItem {...feature} id={index} key={feature.id} />)}
        <FeaturedPostItem {...featureList[0]} />
      </Box>
      <Icon name="chevron-left" onClick={() => active === 0 ? setActive(featureList.length) : setActive(active - 1)} focusable size={20} position="absolute" top="35%" left="0" zIndex={3} />
      <Icon name="chevron-right"
        onClick={() => active === featureList.length - 1 ? setActive(0) : setActive(active + 1)} focusable size={20} position="absolute" top="35%" right="0" zIndex={3} />
      <Box textAlign="center">
        {featureList?.map((_, index) => <span key={index} onClick={() => setActive(index)} className={`dot ${active === index ? "active" : ""}`} />)}
      </Box>
    </Box>
  );
}

export default FeaturedPostSlider;