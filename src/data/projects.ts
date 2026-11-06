export type Project = {
  id: string;
  title: string;
  niche: string;
  short: string;
  pain: string;
  solution: string;
  stack: string[];
  demo?: string;
  repo: string;
  /** Скриншот: положи файл в public/projects и укажи, например "/projects/booking.png" */
  image?: string;
  colors: [string, string];
};

const G = "https://github.com/dscordik/";

export const projects: Project[] = [
  {
    id: "booking", title: "Платформа онлайн-записи", niche: "Для психологов, мастеров, салонов",
    short: "Клиент выбирает услугу и время, админ управляет расписанием. Двойная запись исключена, изменения видны всем в реальном времени.",
    pain: "Записи в мессенджерах путаются, а окошки простаивают пустыми.",
    solution: "Клиент сам выбирает свободное время, занятый слот сразу серый у всех. Запись идёт в одной транзакции с блокировкой строки, поэтому два человека не займут одно время. Вам и клиенту приходят уведомления в Telegram, статусы записей меняются в панели администратора.",
    stack: ["React 19", "TypeScript", "TanStack Query", "FastAPI", "PostgreSQL", "WebSocket", "Telegram Bot"],
    demo: "https://booking-platform-sigma-three.vercel.app", repo: G + "booking-platform", colors: ["#ff4a1c", "#2a0d06"],
  },
  {
    id: "store", title: "Misha Store", niche: "Для небольших магазинов электроники",
    image: "/projects/shop.png",
    short: "Интернет-магазин со своим бэкендом: каталог, фильтры и сортировка, корзина, избранное, вход по JWT.",
    pain: "Готовая CMS стоит дорого, а нужны только каталог и корзина.",
    solution: "Клиент сам находит товар через фильтры и сортировку, добавляет в корзину и избранное и оформляет заказ без звонка менеджеру. Владелец получает ровно тот функционал, который нужен для продаж, без лишних платежей за CMS.",
    stack: ["React", "TypeScript", "React Router", "FastAPI", "SQLAlchemy", "Pydantic", "JWT"],
    demo: "https://online-shop-seven-iota.vercel.app", repo: G + "online-shop", colors: ["#ff9a3c", "#2e1805"],
  },
  {
    id: "miniapp", title: "Telegram Mini App", niche: "Для бизнеса с аудиторией в Telegram",
    image: "/projects/tg-mini-app.png",
    short: "Каркас приложения внутри мессенджера: вход через Telegram, каталог, корзина, история заказов.",
    pain: "Ваши клиенты уже в Telegram, а ставить отдельное приложение они не хотят.",
    solution: "Продажи прямо в мессенджере: человек заходит в один клик, без регистрации и установки. Вход через Telegram WebApp initData проверяется криптографически на бэкенде, так что аккаунт нельзя подделать.",
    stack: ["React", "TypeScript", "Vite", "FastAPI", "JWT", "Telegram WebApp SDK"],
    repo: G + "tg-mini-app", colors: ["#e5334f", "#2a0610"],
  },
  {
    id: "cafe", title: "Cafe Fano", niche: "Для кафе и ресторанов",
    image: "/projects/cafe.png",
    short: "Лендинг кафе с меню по категориям и корзиной заказа.",
    pain: "Меню в виде фото в Instagram никто не листает и не ищет в нём блюдо.",
    solution: "Меню с категориями (закуски, горячее, десерты, напитки), корзина с изменением количества и форма заказа. Гость выбирает заранее, а вы получаете готовый заказ.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    demo: "https://cafe-landing-six.vercel.app", repo: G + "cafe-landing", colors: ["#ff6a3d", "#1d1d22"],
  },
  {
    id: "salon", title: "Premium Seltec", niche: "Для beauty-салонов и студий",
    image: "/projects/app.png",
    short: "Лендинг мобильного приложения для записи к мастеру, с мокапом и отзывами.",
    pain: "Приложение ещё не вышло, а клиентов нужно собирать уже сейчас.",
    solution: "Мокап телефона, блок возможностей и отзывы показывают продукт до релиза в сторах и собирают первых пользователей на запуск.",
    stack: ["React", "TypeScript", "Vite", "Responsive Design"],
    demo: "https://app-landing-ten-silk.vercel.app", repo: G + "app-landing", colors: ["#ff5a76", "#2a0f16"],
  },
  {
    id: "quiz", title: "Quiz: какой ты программист", niche: "Для IT-школ и сообществ",
    image: "/projects/kviz.png",
    short: "Квиз из 10 вопросов, который определяет роль в IT.",
    pain: "Сухая форма «оставьте заявку» почти не конвертирует.",
    solution: "Человек проходит квиз и получает что-то для себя, а вы получаете вовлечённого пользователя и повод для репоста в соцсетях.",
    stack: ["React", "TypeScript", "Vite", "State Management"],
    demo: "https://kviz-landing-ec3z.vercel.app", repo: G + "kviz-landing", colors: ["#7a5cff", "#14102a"],
  },
  {
    id: "master", title: "Визитка мастера", niche: "Для частных мастеров и специалистов",
    image: "/projects/vizitka.png",
    short: "Одностраничная визитка специалиста по ремонту электроники.",
    pain: "Незнакомому мастеру без сайта и отзывов не доверяют технику.",
    solution: "Услуги, опыт, статистика и контакты на одной странице. Клиент видит, что перед ним серьёзный специалист, и звонит увереннее.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    demo: "https://vizitka-land.vercel.app", repo: G + "vizitka-land", colors: ["#2f8bff", "#08152a"],
  },
  {
    id: "credit", title: "Калькулятор кредитов", niche: "Для банков и кредитных брокеров",
    image: "/projects/crediit-calc.png",
    short: "Расчёт ежемесячного платежа, переплаты и итоговой суммы кредита.",
    pain: "Менеджеры тратят время на клиентов, которые не проходят по доходу или пугаются переплаты.",
    solution: "Человек сам видит реальную переплату ещё на сайте. Лишние консультации отсеиваются, остаются заинтересованные клиенты.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    demo: "https://credits-calc-land.vercel.app", repo: G + "credits-calc-land", colors: ["#18c29a", "#06211c"],
  },
  {
    id: "todo", title: "To-Do List", niche: "Практика интерфейсов и состояния",
    image: "/projects/todo.png",
    short: "Планировщик задач с приоритетами, фильтрами, поиском и статистикой.",
    pain: "Список без приоритетов и фильтров быстро превращается в простыню, которую перестают открывать.",
    solution: "Приоритет и срочность видны сразу, есть поиск, фильтры, статистика и массовые действия. Данные сохраняются между сессиями.",
    stack: ["React", "TypeScript", "UUID", "Local Storage"],
    demo: "https://to-do-list-dscordik.vercel.app", repo: G + "to-do-list", colors: ["#e0b04a", "#241a05"],
  },
];