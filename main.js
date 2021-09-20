/* ------------start header--------------- */
let header = document.createElement("header"),
    container = document.createElement("div"),
    logo = document.createElement("h1"),
    ulLinks = document.createElement("ul"),
    liLinks;
logo.innerHTML = "Elzero";
container.className = "countainer";
for (let i = 0; i < 4; i++) {
    liLinks = document.createElement("li");
    ulLinks.appendChild(liLinks);
};
ulLinks.childNodes[0].textContent = "Home";
ulLinks.childNodes[1].textContent = "About";
ulLinks.childNodes[2].textContent = "Services";
ulLinks.childNodes[3].textContent = "Contact";
document.body.style.fontFamily = "'Roboto', sans-serif"
logo.style.color = "#68a972";
logo.style.fontWeight = "800";
document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.backgroundColor = "#ececec";
container.style.padding = "0 20px 0 20px";
container.style.backgroundColor = "#ffffff";
ulLinks.style.display = "flex";
ulLinks.style.listStyle = "none";
ulLinks.style.color = "#78737d";
ulLinks.querySelectorAll("li:not(:last-child)").forEach(e => e.style.paddingRight = "20px");
header.appendChild(logo);
header.appendChild(ulLinks);
container.appendChild(header);
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.classList = "website-head"
document.body.appendChild(container);
logo.className = "logo";
ulLinks.className = "menu"
let containerTwo = document.createElement("div")
for (let i = 0; i < 15; i++) {
    let box = document.createElement("div"),
        boxItems = document.createElement("div"),
        productTitle = document.createElement("h1"),
        productP = document.createElement("p");
    box.style.borderRadius = "5px";
    box.style.width = "31%";
    box.style.height = "100px";
    box.style.margin = "7px"
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.className = "product";
    productTitle.style.fontWeight = "400";
    boxItems.style.display = "flex";
    boxItems.style.flexDirection = "column";
    boxItems.style.justifyContent = "center";
    boxItems.style.alignItems = "center";
    productP.innerHTML = "Product";
    box.style.backgroundColor = "#fff"
    productTitle.innerHTML = `${i+1}`;
    productTitle.style.margin = "0";
    productTitle.style.padding = "0";
    productP.style.color = "#78737d";
    productP.style.margin = "0";
    productP.style.margin = "0";
    boxItems.appendChild(productTitle);
    boxItems.appendChild(productP);
    box.appendChild(boxItems);
    containerTwo.appendChild(box);
}
// containerTwo.style.padding = "0 20px 0 20px";
containerTwo.style.margin = "7px 0 0 0";
containerTwo.style.display = "flex";
containerTwo.style.flexWrap = "wrap";
containerTwo.style.justifyContent = "center"
document.body.appendChild(containerTwo);
/*-----------start footer----------------- */
let footer = document.createElement("footer"),
    footerText = document.createElement("p");
footerText.innerHTML = "Copyright 2021"
footerText.style.color = "#fff";
footerText.style.fontWeight = "400";
footerText.style.fontSize = "20px";
footerText.style.padding = "20px";
footerText.style.margin = "18px 0 0px 0px";
footerText.style.textAlign = "center";
footer.style.backgroundColor = "#66a56f"
footer.appendChild(footerText);
containerTwo.className = "content";
document.body.appendChild(footer);