//paginacion para el blog 
//modulo

let currentPage=1;
const limit = 10;

export function getPagination(){
    const skip = (currentPage - 1) * limit;
    return {limit, skip};

}

export function nextPage(){
    currentPage++;

}

export function prevPage(){
    if(currentPage > 1){
        currentPage--;
    }
}

export function getCurrentPage(){
    return currentPage;
    
}
