export const setRedirectURL = (payload, event) => {
    location.hash = `${payload.type}${payload.id}`;
}