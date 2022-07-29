let html = "";
let page = 1;

const paginationMax = (event)  =>{
    if(event.target)page++;
   ab(page);
}   
const paginationMin = (event)  =>{
    if(event.target){
    if(page >1) {page--}
    else{document.getElementById('min').classList.add('disabled')}
}
   ab(page);
}
ab();
console.log(page)
document.getElementById('pageNumb').innerHTML = `<a class="page-link">Page ${page}</a>`
function ab(page){
   if (page > 1){
        document.getElementById('min').classList.remove('disabled')
    }else{document.getElementById('min').classList.add('disabled')}
    document.getElementById('meniu').innerHTML = ''
    document.getElementById('pageNumb').innerHTML = `<a class="page-link">Page ${page}</a>`
    html = `http://www.omdbapi.com/?apikey=c50f0edf&s=Batman&page=${page}`
fetch(html)
.then(resp => resp.json())
.then(resp => {
    for(i = 0; i < 10; i++){
    let image = resp.Search[i].Poster;
    const  filmTitle = resp.Search[i].Title
    const filmYear = resp.Search[i].Year
    const filmType = resp.Search[i].Type  
    document.getElementById('meniu').innerHTML += `<div><img class="image" src="${image}" alt=""></img><br><h6>${filmTitle}</h5><br>
    <h6>${filmYear}</h6><br><h6>${filmType}</h6></div> `}
})}
