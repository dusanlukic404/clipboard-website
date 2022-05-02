"use strict";

const features = document.querySelectorAll(".feature");

const revealFeatures = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("feature--hidden");
  observer.unobserve(entry.target);
};

const featureObserver = new IntersectionObserver(revealFeatures, {
  root: null,
  treshold: 1,
});
features.forEach((feature) => {
  featureObserver.observe(feature);
  feature.classList.add("feature--hidden");
});
