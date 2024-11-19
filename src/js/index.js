import openContent from "./modules/open-content-down-header";
openContent();

// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const Live_Auction_Swiper = new Swiper('.live-auction-swiper',{
    slidesPerView: 3.5,
    spaceBetween: 42,
    
    navigation: {
      nextEl: '#live-auction-next',
      prevEl: '#live-auction-prev',
    },
  
  });

const Popular_collections_Swiper = new Swiper('.popular-collections-swiper',{
    slidesPerView: 3.2,
    spaceBetween: 36,
    
    navigation: {
      nextEl: '.popular-collections-button-next',
      prevEl: '.popular-collections-button-prev',
    },
  });

  const Explore_by_Categories_Swiper = new Swiper('.explore-by-categories-swiper',{
    slidesPerView: 3.5,
    spaceBetween: 42,
    
  });