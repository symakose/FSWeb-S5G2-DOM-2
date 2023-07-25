import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
//document.querySelector("h1").addEventListener("click", function (e) {
//alert("Bana tıkladın!");
//});

// Kodlar buraya gelecek!

window.addEventListener("load", () => {
  alert("Eğlence Otobüsü Sitesine Hoşgeldin!");
});
window.addEventListener("scroll", () => {
  console.log("Sayfa kaydırıldı!");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.body.style.backgroundColor = "lightgray";
  }
});

const pageTitle = document.querySelector("h1.logo-heading");
pageTitle.addEventListener("mouseover", () => {
  pageTitle.style.color = "rgb(48, 214, 200)";
});
pageTitle.addEventListener("mouseout", () => {
  pageTitle.style.color = "";
});

const menuItems = document.querySelectorAll("nav.nav a");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("mouseover", () => {
    menuItem.style.color = "rgb(48, 214, 200)";
  });

  menuItem.addEventListener("mouseout", () => {
    menuItem.style.color = "";
  });
});

const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
      img.style.width = "200px";
    } else {
      img.style.width = "100px";
    }
  });
});

const changeTextButtons = document.querySelectorAll(".btn");
changeTextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Beni de Al!") {
      button.textContent = "Yönlendirme Başarılı!";
    } else {
      button.textContent = "Beni de Al!";
    }
  });
});
const resim = document.querySelectorAll("img");
resim.forEach((image) => {
  image.addEventListener("dblclick", () => {
    if (image.style.width === "200px") {
      image.style.width = "500px";
    } else {
      image.style.width = "200px";
    }
  });
});

const title = document.querySelector("h1.logo-heading");
const windowWidth = window.innerWidth;

function handleResize() {
  if (windowWidth >= 768) {
    title.style.fontSize = "48px";
  } else if (windowWidth >= 576) {
    title.style.fontSize = "36px";
  } else {
    title.style.fontSize = "24px";
  }
}
window.addEventListener("resize", handleResize);
handleResize();

//const draggable = documen.querySelector(".img-fluid rounded");
//let draggingElement = null;
//function dragStartHandler(event) {
//draggingElement = event.target;
//event.dataTransfer.setData("text/plain", "");
//}
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "https://www.example.com";
    });
  });
});
