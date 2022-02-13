import { HomePage } from './pages/HomePage.js';
import { ItemPage } from './pages/ItemPage.js';

const resetView = () => document.getElementById('app').innerHTML = '';

export const Rounter = (data) => {
    resetView();
    
    const urlHash = window.location.hash
    
    if (urlHash) {
        const type = urlHash.substr(1, 1) === 'm' ? 'movie' : 'tv',  
            hash = { hash: urlHash.substr(2, urlHash.length), type };
        ItemPage (hash);
    } else {
        HomePage ();
    }
}
