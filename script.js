

const fe=document.querySelector("form");
const inp=document.getElementById("search-input");
const srs=document.querySelector(".sr");
const sm=document.getElementById("sho");

let inpd="";
let page= 1;
 async function searchImage(){
    inpd=inp.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inpd}&client_id=${"6-dp7WHLONkHcmxLRbnOfsRsRAYMly-GAWNx0o7MLp0"}`;
    const response=await fetch(url);
    const data=await response.json();

    const results =data.results;
    if(page===1){
        srs.innerHTML="";
    }

    results.map( (result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("s");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imlink = document.createElement("a");
        imlink.href = result.links.html;
        imlink.target = "_blank";
        imlink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imlink);
        srs.appendChild(imageWrapper);

    });

    page++;
    if(page > 1){
        sm.style.display="block";
    }
}
fe.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImage();

})
sm.addEventListener("click",()=>{
    searchImage();
})

