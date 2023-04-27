import view from "../view/products.html";

export default () => {
    const content = document.createElement('article');
    content.innerHTML = view;

    return content;
}