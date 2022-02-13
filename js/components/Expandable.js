export const Expandable = (message, height = 250) => {
    const expandContent = (data, event) => {
        data.classList.toggle('expand')
        event.target.innerText = event.target.innerText === 'more' ? 'less' : 'more'; 
    }

    const expandable = document.createElement('div'),
        expandableContent = document.createElement('p'), 
        expandButton = document.createElement('button');

    expandable.className = 'expandable';
    expandableContent.innerText = message;
    if (message.length > 240) expandableContent.className = 'expandable-content';
     
    expandable.append(expandableContent)
    
    // Expandable Button
    if (message.length > 240) {
        expandButton.className = 'expandable-button';
        expandButton.innerText = 'more';
        expandButton.addEventListener('click', expandContent.bind(this, expandableContent));
        expandable.append(expandButton)
    }

    return expandable;
}