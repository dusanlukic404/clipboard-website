"use strict";

const features = document.querySelectorAll(".feature");
const h2 = document.querySelectorAll("h2");

const revealFeatures = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("feature--hidden");
  observer.unobserve(entry.target);
};

const featureObserver = new IntersectionObserver(revealFeatures, {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0,
});

features.forEach((feature) => {
  feature.classList.add("feature--hidden");
  featureObserver.observe(feature);
});

const revealHeading2 = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("h2--hidden");
  observer.unobserve(entry.target);
};

const heading2Observer = new IntersectionObserver(revealHeading2, {
  root: null,
  threshold: 1,
});

h2.forEach((heading) => {
  heading2Observer.observe(heading);
  heading.classList.add("h2--hidden");
});
