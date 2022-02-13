export const SpinLoader = (state) => {
    const loader = document.createElement('div');
    loader.className = "load-spinner";
    loader.innerText = "loading...";
    if (!state) loader = '';

    document.getElementById('app').innerHtml = loader;   
} 