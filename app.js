/*Pentru particule(stelute)*/

particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/*Pentru carousel orizontal*/
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

/*Pentru slider-stanga*/

scrollTo = (element) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });

  console;
};

document.getElementById("point2").addEventListener("click", () => {
  scrollTo(document.getElementById("offers"));
});

document.getElementById("point3").addEventListener("click", () => {
  scrollTo(document.getElementById("about"));
});

document.getElementById("point4").addEventListener("click", () => {
  scrollTo(document.getElementById("service"));
});

document.getElementById("point1.2").addEventListener("click", () => {
  scrollTo(document.getElementById("intro"));
});

document.getElementById("point3.2").addEventListener("click", () => {
  scrollTo(document.getElementById("about"));
});

document.getElementById("point4.2").addEventListener("click", () => {
  scrollTo(document.getElementById("service"));
});

document.getElementById("point1.3").addEventListener("click", () => {
  scrollTo(document.getElementById("intro"));
});

document.getElementById("point2.3").addEventListener("click", () => {
  scrollTo(document.getElementById("offers"));
});

document.getElementById("point4.3").addEventListener("click", () => {
  scrollTo(document.getElementById("service"));
});

document.getElementById("point1.4").addEventListener("click", () => {
  scrollTo(document.getElementById("intro"));
});

document.getElementById("point2.4").addEventListener("click", () => {
  scrollTo(document.getElementById("offers"));
});

document.getElementById("point3.4").addEventListener("click", () => {
  scrollTo(document.getElementById("about"));
});

/*Pentru miscare categorii*/

$(".service-category").click(function () {
  $(".service-categories").attr("planet-center", this.id);
  if (this.id == "category1") centerPlanet1();
  if (this.id == "category2") centerPlanet2();
  if (this.id == "category3") centerPlanet3();
});

function centerPlanet1() {
  var tl = new TimelineMax()
    .to("#category1", 1, { xPercent: 0, z: 1 }, 0)
    .to("#category2", 1, { xPercent: 140, z: -800 }, 0)
    .to("#category3", 1, { xPercent: -140, z: -800 }, 0);
}

function centerPlanet2() {
  var tl = new TimelineMax()
    .to("#category1", 1, { xPercent: -140, z: -800 }, 0)
    .to("#category2", 1, { xPercent: 0, z: 1 }, 0)
    .to("#category3", 1, { xPercent: 140, z: -800 }, 0);
}

function centerPlanet3() {
  var tl = new TimelineMax()
    .to("#category1", 1, { xPercent: 140, z: -800 }, 0)
    .to("#category2", 1, { xPercent: -140, z: -800 }, 0)
    .to("#category3", 1, { xPercent: 0, z: 1 }, 0);
}

$(function () {
  centerPlanet2();
});

/*Pentru afisare servicii*/

$(".service-category").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $(".service-deals").removeClass("active").eq(position).addClass("active");

  $siblings.removeClass("active");
  $this.addClass("active");
});

/*Pentru Portfolio*/

function openGallery(id) {
  closeAll();
  const gallery = document.getElementById("gallery-" + id);
  const card = document.getElementById("card-" + id);
  gallery.classList.add("Gallery--active");
  card.classList.add("Card--active");
}

function closeAll() {
  const galleryActv = document.querySelector(".Gallery--active");
  const cardActv = document.querySelector(".Card--active");
  if (galleryActv) {
    galleryActv.classList.remove("Gallery--active");
  }
  if (cardActv) {
    cardActv.classList.remove("Card--active");
  }
}
