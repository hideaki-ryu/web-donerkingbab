import data from "../data.json" assert { type: "json" };

const createBlog = (title, images, introduction, sub) => `
<h1 class="blog__title">${title}</h1>
<div class="blog__line"></div>
<div class="blog__introduction__wrapper">
  <div class="blog__introduction__img">
    ${images.map((i) => `<img src="${i}"/>`).join("")}
  </div>
  <p class="blog__introduction">
    ${introduction}
  </p>
  ${sub.map((s) => createSub(s.subtitle, s.text)).join("")}
</div>
<button class="blog__button" onclick="window.location.replace('../blog')">Read other blog</button>
`;

const createSub = (subtitle, text) => `
<div class="blog__sub">
  <h2 class="blog__sub__title">${subtitle}</h2>
  <div class="blog__line"></div>
  <p class="blog__sub__text">
    ${text}
  </p>
</div>`;

const fileName =
  document.querySelector("#blog").getAttribute("data-blog-title") + ".html";
const container = document.querySelector("#blog > div");

const blogData = data.find((d) => d.file_name === fileName);

container.innerHTML = createBlog(
  blogData.title,
  blogData.images,
  blogData.introduction,
  blogData.contents
);
