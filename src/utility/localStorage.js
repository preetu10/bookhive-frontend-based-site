const getReadFromLocalStorage=()=>{
    const getAllRead=localStorage.getItem('read');
    if(getAllRead){
        return JSON.parse(getAllRead);
    }
    return [];

};

const saveReadIntoLocalStorages=(bookId)=>{
    const getAllRead=getReadFromLocalStorage();
    const checkRead=getAllRead.find(r=>r===parseInt(bookId));
    if(!checkRead){
        getAllRead.push(bookId);
        localStorage.setItem("read",JSON.stringify(getAllRead));
        return true;
    }
    else{
        return false;
    }
};

const checkIfRead=(id)=>{
    const result=getReadFromLocalStorage();
    const check=result.find(p=>p===parseInt(id));
    if(check) return true;
    return false;
}


const getAllWishlist=()=>{
    const getAllWish=localStorage.getItem("wish");
    if(getAllWish){
        return JSON.parse(getAllWish);
    }
    return [];

}
const addToWishStorage=(id)=>{
    const getAllWish=getAllWishlist();
    const checkWish=getAllWish.find(r=>r===parseInt(id));
    if(!checkWish){
        getAllWish.push(id);
        localStorage.setItem("wish",JSON.stringify(getAllWish));
        return true;
    }
    else{
        return false;
    }
}

export {getReadFromLocalStorage, saveReadIntoLocalStorages, checkIfRead, getAllWishlist, addToWishStorage};