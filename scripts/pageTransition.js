export default function pageTransition(btn, direction, clipPath) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    clipPath.style.transition = "0.7s ease-out";
    clipPath.style.clipPath = "circle(2200px at var(--x) var(--y))";
    setTimeout(() => {
      window.location.href = `./pages/${direction}`;
    }, 700);
  });
}
