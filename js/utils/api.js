export class API {
    static #API_KEY = 'd482ac52fd2476add67250a9e5d8584f';
    
    constructor () {}

    static #generateEndPoint (type, id) {
        return `https://api.themoviedb.org/3/${type}/${id}?api_key=${this.#API_KEY}&language=en-US`;
    } 

    static imageEndPoint (file, size = 'original') {
        return `https://image.tmdb.org/t/p/${size}${file}`;
    }

    static generateThumbnail (data) {
        const imageURL = this.imageEndPoint(data.poster_path, 'w500'),
            posterWrapper = document.createElement('div'),
            poster = document.createElement('img');
        posterWrapper.className = 'item__poster';
        poster.src = imageURL;
        posterWrapper.appendChild(poster)
        
        return posterWrapper;
    }

    static generateCarousel (catergory, title) {
        const carouselWrapper = document.createElement('section'),
            carouselTitle = document.createElement('h2'),
            carousel = document.createElement('div');

        // Configure Carousel
        carouselWrapper.id = catergory;
        carouselWrapper.className = 'wrapper';
        carouselTitle.textContent = title;
        carousel.className = 'carousel';    
        carouselWrapper.append(carouselTitle, carousel)
        
        return [carouselWrapper, carousel];
    }

    static fetchData (type, id, callback = null) {
        return new Promise ((resolve, reject) => {
            const endPoint = this.#generateEndPoint(type, id);
            fetch(endPoint)
                .then(response => response.json())
                .then(data => {
                    if (typeof callback !== 'function') {
                        resolve(data);
                    }
                    callback(data);
                    resolve()
                })
                .catch(err => reject(err))
        })
    }

}