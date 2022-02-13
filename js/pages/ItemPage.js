import { Carousel } from "../components/Carousel.js";
import { Expandable } from "../components/Expandable.js";
import { API } from "../utils/api.js";

const list = {
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
}

export const ItemPage = async (url) => {

    const data = await API.fetchData(url.type, url.hash);
    
    const date = data.release_date ?? data.first_air_date;
   
    const itemTitle = data.title ?? data.name,
        itemDate = new Date(date), 
        itemYear = itemDate.getFullYear(),
        itemDuration = data.runtime ? `${Math.floor(+data.runtime / 60)}hr ${data.runtime % 60}min` : `${data.number_of_seasons} seasons`; 
    
        console.log(data);
    // Create Jumbotron
    const jumbotron = document.createElement('section'),
        jumbotronContent = document.createElement('div'),
        title = document.createElement('h1'),
        buttonInfo = document.createElement('button'),
        buttonPlay = document.createElement('button'),

        jumbotronContentInfo = document.createElement('div'),

        jumbotronOverlay = document.createElement('div'),
        jumbotronImageContainter = document.createElement('div'),
        jumbotronImage = document.createElement('img');

    
    jumbotron.className = 'jumbotron'
    jumbotronContent.className = 'jumbotron-content'
    
    title.innerText = itemTitle
    
    const expandable = Expandable(data.overview);
    
    buttonInfo.className = 'faded-button big';
    buttonInfo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon-xs" viewBox="0 0 24 24"><path d="M2 24v-24l20 12-20 12z"/></svg> Play';
    buttonPlay.className = 'faded-button big';
    buttonPlay.innerHTML = 'More info';
    jumbotronContent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="0.8" stroke="#e50914" fill="#e50914" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    jumbotronContentInfo.className = 'jumbotron-info';
    jumbotronContentInfo.innerHTML = `<span>${itemYear}</span> <span class="label">${data.vote_average}</span> <span> ${itemDuration}</span>`
    jumbotronContent.append(title, jumbotronContentInfo, expandable, buttonInfo, buttonPlay)
    
    jumbotronOverlay.className = 'overlay';
    jumbotronImage.src = API.imageEndPoint(data.backdrop_path);
    jumbotronImageContainter.className = 'jumbotron-image';
    jumbotronImageContainter.append(jumbotronOverlay, jumbotronImage)
    
    jumbotron.append(jumbotronContent, jumbotronImageContainter);

    document.getElementById('app').append(jumbotron, Carousel({...list, key: 'popular'}))
}   