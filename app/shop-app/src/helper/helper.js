const shortenTitle = text =>{
    return text.split(" ").slice(0,3).join(" ");
}

const searchFilter = (products, search) => {
    if(!search) return products;
    const productSearch = products.filter(p => p.title.toLowerCase().includes(search));
    return productSearch;
}

const categoryFilter = (products, category) => {
    if(!category) return products;
    const productCategory = products.filter(p => p.category == category);
    return productCategory;
}

const createQueryObject = (currentQuery, newQuery) => {
    if(newQuery.category === "all"){
        const {category, ...rest} = currentQuery;
        return rest;
    }
    if(newQuery.search === ""){
        const {search, ...rest} = currentQuery;
        return rest;
    }
    return {...currentQuery, ...newQuery}
}

const getInitialQuery = (searchParams) => {
        const query = {};
        const search = searchParams.get("search");
        const category = searchParams.get("category");
        if(search) query.search = search
        if(category) query.category = category
        return query
}

export {shortenTitle, searchFilter, categoryFilter, createQueryObject, getInitialQuery}