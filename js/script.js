console.log("Hello World!");
const myName ="Hajar Muhammed";
const h1 = document.querySelector(".heading-primary");

console.log(myName);
console.log(h1);





///////////////MAKE THE NAVIGATION WORK///////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click" , function(){
headerEl.classList.toggle("nav-open")
});


//////////////SET CURRENT YEAR//////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear;

//////////////SMOOTH SCROLLING ANIMATION ON ANY BROWSER///////////////
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link){
link.addEventListener("click" , function (e) {
e.preventDefault();
const href = link.getAttribute("href");

///////////////////////SCROLL BACK TO TOP////////////////////////////////
if (href=== "#")
window.scrollTo({
  top: 0,
  behavior: "smooth"});


///////////////////SCROLL TO OTHER LINKS////////////////////////////////////
if (href!=="#" && href.startsWith("#")){
  const sectionEl = document.querySelector(href);
  sectionEl.scrollIntoView({behavior: "smooth"});
}

///////////////////////CLOSE MOBILE NAVIGATION//////////////////////////
if (link.classList.contains("main-nav-link")){
    headerEl.classList.toggle("nav-open");
  }
});
});

/////////////////////STICKY NAVIGATION////////////////////////////
const heroSectionEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true ) {
      document.body.classList.remove("sticky");
    }
  },
  {
    ////////////////In the viewport//////////////////
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);


///////////// Fixing flexbox gap property missing in some Safari versions//////////
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

