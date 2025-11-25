/**
 * Translations for Find it First
 * Supported languages: UA, EN, RU, ES
 */

export const translations = {
  ua: {
    // Header
    gameTitle: "Знайди Першим",
    gameSubtitle: "MindWorld School",
    
    // Menu
    playersCount: "Кількість гравців",
    difficulty: "Складність",
    difficultyEasy: "Легко",
    difficultyMedium: "Середньо",
    difficultyHard: "Складно",
    cardsInfo: "карт • символів",
    startGame: "Почати гру",
    
    // Game UI
    cardsRemaining: "Залишилось:",
    timer: "⏱️",
    pause: "Пауза",
    exit: "Вийти",
    
    // Player names
    player: "Гравець",
    deck: "Колода",
    
    // Pause modal
    pauseTitle: "Пауза",
    resume: "Продовжити",
    exitToMenu: "Вийти в меню",
    
    // Results
    gameOver: "Гра закінчена!",
    collectedCards: "Зібрано карт",
    time: "Час",
    accuracy: "Точність",
    playAgain: "Грати знову",
    toMenu: "В меню",
    
    // Loading
    loading: "Завантаження...",

    // Confirmations
    exitConfirmTitle: "Вийти з гри?",
    exitConfirm: "Так, вийти",
    exitCancel: "Скасувати",
    correctAnswers: "Правильних відповідей",
    wrongAnswers: "Помилкових",
    cards: "карт",

    // Timer
    moveTime: "Час на хід",
    timeUp: "Час вийшов!"
  },

  en: {
    // Header
    gameTitle: "Find it First",
    gameSubtitle: "MindWorld School",
    
    // Menu
    playersCount: "Number of players",
    difficulty: "Difficulty",
    difficultyEasy: "Easy",
    difficultyMedium: "Medium",
    difficultyHard: "Hard",
    cardsInfo: "cards • symbols",
    startGame: "Start Game",
    
    // Game UI
    cardsRemaining: "Remaining:",
    timer: "⏱️",
    pause: "Pause",
    exit: "Exit",
    
    // Player names
    player: "Player",
    deck: "Deck",
    
    // Pause modal
    pauseTitle: "Pause",
    resume: "Resume",
    exitToMenu: "Exit to Menu",
    
    // Results
    gameOver: "Game Over!",
    collectedCards: "Cards Collected",
    time: "Time",
    accuracy: "Accuracy",
    playAgain: "Play Again",
    toMenu: "To Menu",
    
    // Loading
    loading: "Loading...",

    // Confirmations
    exitConfirmTitle: "Exit game?",
    exitConfirm: "Yes, exit",
    exitCancel: "Cancel",
    correctAnswers: "Correct answers",
    wrongAnswers: "Wrong answers",
    cards: "cards",

    // Timer
    moveTime: "Move time",
    timeUp: "Time's up!"
  },

  ru: {
    // Header
    gameTitle: "Найди Первым",
    gameSubtitle: "MindWorld School",
    
    // Menu
    playersCount: "Количество игроков",
    difficulty: "Сложность",
    difficultyEasy: "Легко",
    difficultyMedium: "Средне",
    difficultyHard: "Сложно",
    cardsInfo: "карт • символов",
    startGame: "Начать игру",
    
    // Game UI
    cardsRemaining: "Осталось:",
    timer: "⏱️",
    pause: "Пауза",
    exit: "Выйти",
    
    // Player names
    player: "Игрок",
    deck: "Колода",
    
    // Pause modal
    pauseTitle: "Пауза",
    resume: "Продолжить",
    exitToMenu: "Выйти в меню",
    
    // Results
    gameOver: "Игра окончена!",
    collectedCards: "Собрано карт",
    time: "Время",
    accuracy: "Точность",
    playAgain: "Играть снова",
    toMenu: "В меню",
    
    // Loading
    loading: "Загрузка...",

    // Confirmations
    exitConfirmTitle: "Выйти из игры?",
    exitConfirm: "Да, выйти",
    exitCancel: "Отмена",
    correctAnswers: "Правильных ответов",
    wrongAnswers: "Ошибок",
    cards: "карт",

    // Timer
    moveTime: "Время на ход",
    timeUp: "Время вышло!"
  },

  es: {
    // Header
    gameTitle: "Encuéntralo Primero",
    gameSubtitle: "MindWorld School",
    
    // Menu
    playersCount: "Número de jugadores",
    difficulty: "Dificultad",
    difficultyEasy: "Fácil",
    difficultyMedium: "Medio",
    difficultyHard: "Difícil",
    cardsInfo: "cartas • símbolos",
    startGame: "Comenzar Juego",
    
    // Game UI
    cardsRemaining: "Restante:",
    timer: "⏱️",
    pause: "Pausa",
    exit: "Salir",
    
    // Player names
    player: "Jugador",
    deck: "Mazo",
    
    // Pause modal
    pauseTitle: "Pausa",
    resume: "Continuar",
    exitToMenu: "Salir al Menú",
    
    // Results
    gameOver: "¡Juego Terminado!",
    collectedCards: "Cartas Recogidas",
    time: "Tiempo",
    accuracy: "Precisión",
    playAgain: "Jugar de Nuevo",
    toMenu: "Al Menú",
    
    // Loading
    loading: "Cargando...",

    // Confirmations
    exitConfirmTitle: "¿Salir del juego?",
    exitConfirm: "Sí, salir",
    exitCancel: "Cancelar",
    correctAnswers: "Respuestas correctas",
    wrongAnswers: "Errores",
    cards: "cartas",

    // Timer
    moveTime: "Tiempo por turno",
    timeUp: "¡Se acabó el tiempo!"
  }
};

/**
 * Отримати переклад для поточної мови
 */
export function t(key, lang = 'ua') {
  return translations[lang]?.[key] || translations.ua[key] || key;
}

/**
 * Визначити мову з URL або браузера
 */
export function detectLanguage() {
  // 1. Спробувати отримати з URL параметра (?lang=ua)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && translations[urlLang]) {
    console.log(`🌍 Language detected from URL parameter: ${urlLang}`);
    return urlLang;
  }

  // 2. Спробувати визначити з поточного URL шляху (наприклад, /en/finditfirst)
  const currentPath = window.location.pathname.toLowerCase();
  console.log(`🌍 Checking current path: ${currentPath}`);

  if (currentPath.includes('/ua/') || currentPath.includes('/uk/')) {
    console.log('🌍 Language detected from current path: ua');
    return 'ua';
  }
  if (currentPath.includes('/en/') || currentPath.includes('/english/')) {
    console.log('🌍 Language detected from current path: en');
    return 'en';
  }
  if (currentPath.includes('/ru/') || currentPath.includes('/russian/')) {
    console.log('🌍 Language detected from current path: ru');
    return 'ru';
  }
  if (currentPath.includes('/es/') || currentPath.includes('/spanish/')) {
    console.log('🌍 Language detected from current path: es');
    return 'es';
  }

  // 3. Якщо відкрито в iframe, спробувати визначити з URL батьківського вікна
  try {
    if (window.parent && window.parent !== window) {
      // Спробувати отримати URL батьківського вікна (працює якщо той самий домен)
      const parentUrl = window.parent.location.href.toLowerCase();
      console.log(`🌍 Checking parent URL: ${parentUrl}`);

      if (parentUrl.includes('/ua/') || parentUrl.includes('/uk/') || parentUrl.includes('.ua/') || parentUrl.includes('lang=ua') || parentUrl.includes('lang=uk')) {
        console.log('🌍 Language detected from parent URL: ua');
        return 'ua';
      }
      if (parentUrl.includes('/en/') || parentUrl.includes('/english/') || parentUrl.includes('lang=en')) {
        console.log('🌍 Language detected from parent URL: en');
        return 'en';
      }
      if (parentUrl.includes('/ru/') || parentUrl.includes('/russian/') || parentUrl.includes('.ru/') || parentUrl.includes('lang=ru')) {
        console.log('🌍 Language detected from parent URL: ru');
        return 'ru';
      }
      if (parentUrl.includes('/es/') || parentUrl.includes('/spanish/') || parentUrl.includes('.es/') || parentUrl.includes('lang=es')) {
        console.log('🌍 Language detected from parent URL: es');
        return 'es';
      }
    }
  } catch (e) {
    // Cross-origin iframe - не маємо доступу до parent.location
    console.log('🌍 Cannot access parent URL (cross-origin), checking referrer...');
  }

  // 4. Спробувати визначити з referrer URL
  const referrer = document.referrer.toLowerCase();
  if (referrer) {
    console.log(`🌍 Checking referrer: ${referrer}`);

    // Check for language indicators in referrer URL
    if (referrer.includes('/ua/') || referrer.includes('/uk/') || referrer.includes('.ua/') || referrer.includes('lang=ua') || referrer.includes('lang=uk')) {
      console.log('🌍 Language detected from referrer: ua');
      return 'ua';
    }
    if (referrer.includes('/en/') || referrer.includes('/english/') || referrer.includes('lang=en')) {
      console.log('🌍 Language detected from referrer: en');
      return 'en';
    }
    if (referrer.includes('/ru/') || referrer.includes('/russian/') || referrer.includes('.ru/') || referrer.includes('lang=ru')) {
      console.log('🌍 Language detected from referrer: ru');
      return 'ru';
    }
    if (referrer.includes('/es/') || referrer.includes('/spanish/') || referrer.includes('.es/') || referrer.includes('lang=es')) {
      console.log('🌍 Language detected from referrer: es');
      return 'es';
    }
  }

  // 5. Спробувати визначити з мови браузера
  const browserLang = navigator.language.toLowerCase();
  console.log(`🌍 Browser language: ${browserLang}`);

  if (browserLang.startsWith('uk')) {
    console.log('🌍 Language detected from browser: ua');
    return 'ua';
  }
  if (browserLang.startsWith('ru')) {
    console.log('🌍 Language detected from browser: ru');
    return 'ru';
  }
  if (browserLang.startsWith('es')) {
    console.log('🌍 Language detected from browser: es');
    return 'es';
  }
  if (browserLang.startsWith('en')) {
    console.log('🌍 Language detected from browser: en');
    return 'en';
  }

  // 6. За замовчуванням українська
  console.log('🌍 Using default language: ua');
  return 'ua';
}
