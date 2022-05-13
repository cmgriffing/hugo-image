document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fullSizeImageElement = entry.target.querySelector(
            ".hugo-image-full-size"
          );

          fullSizeImageElement.addEventListener("load", function (event) {
            event.target.classList.add("hugo-image-loaded");
          });

          fullSizeImageElement.addEventListener("error", function (event) {
            // console.log("error", { event });
          });
          fullSizeImageElement.src =
            fullSizeImageElement.getAttribute("data-full-size-src");
        }
      });
    },
    {
      root: document.querySelector("window"),
      rootMargin: "0px",
      threshold: 1.0,
    }
  );
  document.querySelectorAll(".hugo-image-wrapper").forEach((imageWrapper) => {
    observer.observe(imageWrapper);
  });
});
