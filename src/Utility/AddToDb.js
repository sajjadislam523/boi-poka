const getStoredReadList = () => {
    //read-list
    const storedListString = localStorage.getItem('read-list')
    if (storedListString) {
        const storedList = JSON.parse(storedListString);
        return storedList
    }
    else {
        return [];
    }

}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList()
    if (storedList.includes(id)) {
        console.log("Already exist")
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }

}


const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list')
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList
    }
    else {
        return [];
    }
}


const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList()
    if (storedWishList.includes(id)) {
        console.log("Already exist")
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}


export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList }