function fakeApiCall() {
    return {
      // Fake article data
      id: "XYZ-123",
      image: "https://picsum.photos/800/200",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }
  }
  
  function stopLoading() {
    const article = document.querySelector("article");
    // Patch the article class to remove the loading class
    article.classList.remove("loading");
  }
  
  function updateArticle(data) {
    // Search the document for the root element we want to update
    const article = document.querySelector("article");
    // Search inside the article for the elements we want to update
    const img = article.querySelector("img");
    const h2 = article.querySelector("h2");
    const p = article.querySelector("p");
  
    // Patch each child element
    img.src = data.image;
    h2.textContent = data.title;
    p.textContent = data.description;
  
    // Patch the article id
    article.id = data.id;
  
    // Return a reference in case we need this later
    return article;
  }
  
  async function example() {
    const data = fakeApiCall();
    const article = updateArticle(data);
    console.log(article);
    stopLoading();
  }
  
  function reset() {
    const article = document.querySelector("article");
    article.classList.add("loading");
    article.id = "";
    article.querySelector("img").src = "";
    article.querySelector("h2").textContent = "";
    article.querySelector("p").textContent = "";
  }