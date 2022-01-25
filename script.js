// Grabbing Container of card
let container = document.querySelector(".container-card");

// Creating a AJAX request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=24757a1849b94f7da820fc7ed1aa4acd",
  true
);

// Response is ready
xhr.onload = function () {
  if (this.status === 200) {
    // 200 is http code means ok
    // console.log(this.responseText);
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach((element) => {
      //   console.log(element.description);
      if (element.description === null) {
        news = `<div class="card">
                <img src=${element.urlToImage} alt="Sorry! This Image is Not Available">
                <div class="card-body">
                    <h3 class="title">${element.title}</h3>
                    <p> The description for this news is not available...</p>
                    <button class="btn"><a href=${element.url} target="_blank">Read More</a></button>
    
                </div>
            </div>`;
      } else {
        news = `<div class="card">
                <img src=${element.urlToImage} alt="Sorry! This Image is Not Available">
                <div class="card-body">
                    <h3 class="title">${element.title}</h3>
                    <p> ${element.description}...</p>
                    <button class="btn"><a href=${element.url} target="_blank">Read More</a></button>
    
                </div>
            </div>`;
      }
      newsHtml += news;
    });
    container.innerHTML = newsHtml;
  } else {
    console.error("Some error occured");
  }
};

xhr.send();
