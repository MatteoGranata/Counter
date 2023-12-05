
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

const confirmButton = createElement('button', "confirm", "CONFERMA");
securityContainer.appendChild(confirmButton);

const deleteButton = createElement('button', "delete", "ANNULLA");
securityContainer.appendChild(deleteButton);


//contatore
let number = 0

//increase function
buttonIncrement.addEventListener("click", function () {
  number++;
  result.innerHTML = number;
  result.style.fontSize = `${10}vh`;

  result.animate({
    fontSize: `${12}vh`
  },
    { duration: 200, fill: "forwards" });

  result.animate({
    fontSize: `${10}vh`,
  }, { duration: 200, fill: "forwards" });

  if (number % 10 == 0) {
    notice.innerHTML = `Complimenti sei arrivato a ${number}`;
  };
  confirmButton.style.display = 'none'
  deleteButton.style.display = 'none'
});

//decrease function
buttonDecrement.onclick = function () {
  number--;
  result.innerHTML = number;

  result.style.fontSize = `${10}vh`;
  result.animate({
    fontSize: `${12}vh`,
  }, { duration: 200, fill: "forwards" });

  result.animate({
    fontSize: `${10}vh`,
  }, { duration: 200, fill: "forwards" });

  if (number % 10 == 0) {
    notice.innerHTML = `Complimenti sei arrivato a ${number}`;
  };

  confirmButton.style.display = 'none'
  deleteButton.style.display = 'none'
};

//reset function
buttonReset.onclick = function () {
  deleteButton.style.display = 'block'
  confirmButton.style.display = 'block'
  notice.innerHTML = `SEI SICURO?`

  confirmButton.onclick = function () {
    number = 0;
    result.innerHTML = number;

    confirmButton.style.display = 'none'
    deleteButton.style.display = 'none'
    notice.innerHTML = `Contatore azzerato`
  };
  deleteButton.onclick = function () {
    confirmButton.style.display = 'none'
    deleteButton.style.display = 'none'
    notice.innerHTML = `Azione annullata`
  };
}

// cursor effect
window.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;
  cursorOutline.style.left = `${x}px`;
  cursorOutline.style.top = `${y}px`;

  cursorOutline.animate({
    left: `${x}px`,
    top: `${y}px`
  }, { duration: 80, fill: "forwards" });

});

document.addEventListener("mousedown", function (e) {

  cursorOutline.style.width = `${3}vh`;
  cursorOutline.style.height = `${3}vh`;
  cursorDot.style.width = `${1}vh`;
  cursorDot.style.height = `${1}vh`;

  cursorOutline.animate({
    width: `${5}vh`,
    height: `${5}vh`
  },
    {
      duration: 200, fill: "forwards"
    })

  cursorDot.animate({
    width: `${1.5}vh`,
    height: `${1.5}vh`
  },
    {
      duration: 50, fill: "forwards"
    })
    cursorOutline.animate({
      width: `${3}vh`,
      height: `${3}vh`
    }, {
      duration: 200, fill: "forwards"
  
    })
    cursorDot.animate({
      width: `${1}vh`,
      height: `${1}vh`
    }, {
      duration: 50, fill: "forwards"
  
    })
});