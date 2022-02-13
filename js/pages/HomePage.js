import { Carousel } from "../components/Carousel.js";

const list = {
    popular: {
        title: 'Popular on Netflix',
        items: [
            { id: 93405, type: 'tv' },
            { id: 550988, type: 'movie' },
            { id: 429617, type: 'movie' },
            { id: 1668, type: 'tv' },
            { id: 370172, type: 'movie' },
            { id: 1412, type: 'tv' },
            { id: 438631, type: 'movie' },
            { id: 66732, type: 'tv' },
            { id: 460465, type: 'movie' },
            { id: 60574, type: 'tv' },
            { id: 315635, type: 'movie' },
            { id: 1403, type: 'tv' },
            { id: 60735, type: 'tv' },

        ]
    },
    trending: {
        title: 'Trending Now',
        items: [
            { id: 370172, type: 'movie' },
            { id: 512195, type: 'movie' },
            { id: 617653, type: 'movie' },
            { id: 44217, type: 'tv' },
            { id: 72213, type: 'movie' },
            { id: 412656, type: 'movie' },
            { id: 795778, type: 'movie' }
        ]
    },
    continue: {
        title: 'Continue Watching',
        items: [
            { id: 1396, type: 'tv' },
            { id: 857, type: 'movie' },
            { id: 522241, type: 'movie' },
            { id: 888482, type: 'movie' },
            { id: 795778, type: 'movie' },
            { id: 299536, type: 'movie' },
            { id: 79744, type: 'tv' }
        ]
    },
    hindi: {
        title: 'In Hindi',
        items: [
            { id: 86165, type: 'tv' },
            { id: 84310, type: 'tv' },
            { id: 100612, type: 'tv' },
            { id: 104692, type: 'tv' },
            { id: 87508, type: 'tv' },
            { id: 128217, type: 'tv' },
            { id: 94144, type: 'tv' },
        ]
    }
}

export const HomePage = () => {
    // Generate Movie Carousel
    const div = document.createElement('div');
        div.className = 'home-page'
    for (const key in list) {
        div.append(Carousel({...list[key], key}))
    }
    document.getElementById('app').append(div)
} 