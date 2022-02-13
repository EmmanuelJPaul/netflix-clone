import { API } from "../utils/api.js";
import { setRedirectURL } from "../utils/redirect.js";

export const Carousel = (props) => {
    const { title, items, key } = props;    
    const [carouselWrapper, carousel] = API.generateCarousel(key, title); 

    items.forEach(async (item) => {
        const data = await API.fetchData(item.type, item.id);
        const thumbnail = API.generateThumbnail(data);
        thumbnail.addEventListener('click', setRedirectURL.bind(this, { id: data.id, type: item.type.substr(0, 1) }))
        carousel.append(thumbnail);
    });

    return carouselWrapper;
}