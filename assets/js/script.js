
function createElement(tagElement, classElement, textElement) {
  tagElement = document.createElement(tagElement);
  tagElement.classList.add(classElement);
  textElement = document.createTextNode(textElement);
  tagElement.appendChild(textElement);
  return tagElement;
}

// mouse element
const cursorDot = createElement('div', "cursor", "");
document.body.appendChild(cursorDot);

const cursorOutline = createElement('div', "outline", "");
document.body.appendChild(cursorOutline);

//all element container
const container = createElement('div', "container", "");
document.body.appendChild(container);

//container for title element
const titleContainer = createElement('div', "titleContainer", "");
container.appendChild(titleContainer);

const title = createElement('h1', "title", "CONTATORE");
titleContainer.appendChild(title);

//counter element
const result = createElement('p', "result", "0");
container.appendChild(result);

//counter element
const noticeContainer = createElement('div', "noticeContainer", "");
container.appendChild(noticeContainer);

//button container
const buttonContainer = createElement('div', "buttonContainer", "");
noticeContainer.appendChild(buttonContainer);

const buttonIncrement = createElement('button', "increase", "+");
buttonContainer.appendChild(buttonIncrement);

const buttonDecrement = createElement('button', "decrease", `−`);
buttonContainer.appendChild(buttonDecrement);

const buttonReset = createElement('button', "reset", "RESET");
buttonContainer.appendChild(buttonReset);

//counter notification
const notice = createElement('p', "notice", "...");
noticeContainer.appendChild(notice);

//advertising reset button
const securityContainer = createElement('div', "security", "");
noticeContainer.appendChild(securityContainer);

const confirmButton = createElement('button', "confirm", "CONFIRM");
securityContainer.appendChild(confirmButton);

const deleteButton = createElement('button', "delete", "CANCEL");
securityContainer.appendChild(deleteButton);