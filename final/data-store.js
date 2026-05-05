const MY_DATA = 'decision-app-data';

export const saveToLS = (array) => {
    localStorage.setItem(MY_DATA, JSON.stringify(array));
};

export const getFromLS = () => {
    const data = localStorage.getItem(MY_DATA);
    if (!data) return [];
    return JSON.parse(data);
};

export const generateUniqueId = () => {
    return Date.now().toString();
};