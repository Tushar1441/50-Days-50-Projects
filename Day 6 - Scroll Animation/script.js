const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", showContent);

showContent();

function showContent() {
  const windowHeight = (window.innerHeight /5)*4;
  console.log(windowHeight)
  contents.forEach((content) => {
    const contentTop = content.getBoundingClientRect().top;
    console.log(contentTop);
    if (contentTop < windowHeight) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  });
}
