// --- Переключение вкладок (Франция/Германия/Англия) ---
document.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab-btn'); // ищем кнопку-таба
  if (!tab) return;

  // Снимаем активность со всех табов
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('is-active'));
  // Назначаем активность нажатому
  tab.classList.add('is-active');

  // Прячем все страницы
  document.querySelectorAll('.page').forEach(p => p.classList.remove('is-active'));
  // Показываем выбранную страницу
  const targetSelector = tab.getAttribute('data-target'); // "#France" / "#Germany" / "#England"
  const page = document.querySelector(targetSelector);
  if (page) page.classList.add('is-active');
});

// --- Счётчик в корзине (по клику «В корзину») ---
const basketEl = document.querySelector('.basket');               // кнопка корзины
const basketCountEl = document.querySelector('.basket__count');   // бейдж
let cartCount = 0;                                                // текущее количество

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.add-to-cart'); // любая кнопка «В корзину»
  if (!btn) return;

  cartCount += 1;                              // увеличиваем счётчик
  basketCountEl.textContent = cartCount;       // обновляем бейдж
  basketEl.classList.add('added');             // короткая анимация на корзине
  setTimeout(() => basketEl.classList.remove('added'), 450); // убираем класс
});