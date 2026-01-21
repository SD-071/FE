export const storeData = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item))
}

export const getData = (key) => {
    return JSON.parse(localStorage.getItem(key)) || []
}

export const updateArray = (key, item, array) => {
    let newArray = array.filter((element) => element !== item);
    storeData(key, newArray)
}

export const removeItem = (key) => {
    localStorage.removeItem(key);
}

export const clearData = () => {
    localStorage.clear()
}
