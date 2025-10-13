// Функция для получения нужной лунки по индексу
function getHole(index) {
  return document.getElementById(`hole${index}`);
}

let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

// Регистрируем обработчик клика на каждую лунку
for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    // Проверяем, есть ли у лунки класс с кротом
    if (hole.classList.contains("hole_has-mole")) {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }

    // Проверяем условия победы
    if (Number(dead.textContent) === 10) {
      alert("Победа! Вы убили 10 кротов!");
      resetGame();
    }

    // Проверяем условия поражения
    if (Number(lost.textContent) === 5) {
      alert("Игра окончена. Вы промахнулись 5 раз!");
      resetGame();
    }
  };
}

// Функция сброса счётчиков
function resetGame() {
  dead.textContent = 0;
  lost.textContent = 0;
}
