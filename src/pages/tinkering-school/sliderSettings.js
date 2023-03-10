import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

export const ImageSliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  prevArrow: (
    <ArrowBackIosNewOutlined
      size="sm"
      sx={{
        color: "black",
        width: "15px",
        height: "15px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  nextArrow: (
    <ArrowForwardIosOutlined
      sx={{
        color: "black",
        width: "15px",
        height: "15px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 855,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const VideoSliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: (
    <ArrowBackIosNewOutlined
      size="sm"
      sx={{
        color: "black",
        width: "15px",
        height: "15px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  nextArrow: (
    <ArrowForwardIosOutlined
      sx={{
        color: "black",
        width: "15px",
        height: "15px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 855,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
