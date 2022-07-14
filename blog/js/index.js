import data from "../data.json" assert { type: "json" };

const postCard = (imgPath, title, date, desc, pageURL) => `
<div class="card">
  <div class="card__img" style="background-image: url('${imgPath}')">
  </div>
  <div class="card__text">
    <h3 class="card__text__title">${title}</h3>
    <p class="card__text__date">${date}</p>
    <p class="card__text__desc">${desc}</p>
    <button onclick="window.location.replace('./${pageURL}')">
      <p>Read full article</p>
    </button>
  </div>
</div>
`;

const blogPosts = document.querySelector(".blog__post");

blogPosts.innerHTML = data
  .map((p) =>
    postCard(p.images[0], p.title, p.post_date, p.preview, p.file_name)
  )
  .join("");
