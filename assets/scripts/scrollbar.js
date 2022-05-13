export function scrollAnim() {
  const html = document.querySelector("html");
  const hideScrollThumb = () => {
    html.className = "hidden-scroll-thumb";
  };
  const showScrollThumb = () => {
    html.className = "show-scroll-thumb";
  };

  showScrollThumb();
  setTimeout(hideScrollThumb, 750);
}
