document.querySelector('#search-form').addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.search.value;
    // const config = {params: {q : searchTerm , isFunny:'colt'}};we can also use these two comment line instead of that below line
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    makeImages(res.data);
    form.elements.search.value = '';

})
const makeImages = (shows)=>{
    for(let result of shows){
        if(result.show.image){
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        const body = document.querySelector('#body');
        body.append(img);
        }

    }

}