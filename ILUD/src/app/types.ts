

export  type CarouselItem = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export const setCarouselItems = (items: CarouselItem[]) => {
  return {
    type: "SET_CAROUSEL_ITEMS",
    items,
  };
};