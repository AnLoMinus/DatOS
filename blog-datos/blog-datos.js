document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scroll behavior to read more links
  document.querySelectorAll(".read-more").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const article = e.target.closest(".blog-post");
      const content = article.querySelector(".post-content");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        e.target.textContent = "קרא עוד...";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        e.target.textContent = "קרא פחות";
      }
    });
  });

  // Add lazy loading for blog posts
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".blog-post").forEach((post) => {
    observer.observe(post);
  });
});
