/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let currentDrug;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener('mousemove', (e) => {
  if (currentDrug) {
    currentDrug.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
    currentDrug.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
  }
});

export function createDiv() {
  const newDiv = document.createElement('div');
  const randomTop = randomInRange(0, 100);
  const randomLeft = randomInRange(0, 100);
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  newDiv.classList.add('draggable-div');
  newDiv.style.width = randomInRange(50, 200) + 'px';
  newDiv.style.height = randomInRange(50, 200) + 'px';
  newDiv.style.position = 'absolute';
  newDiv.style.top = randomTop + '%';
  newDiv.style.left = randomLeft + '%';
  newDiv.style.background = 'rgb(' + x + ',' + y + ',' + z + ')';

  newDiv.addEventListener('mousedown', (e) => {
    currentDrug = newDiv;
  });

  newDiv.addEventListener('mouseup', () => (currentDrug = false));
  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
