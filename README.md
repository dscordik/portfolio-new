# Портфолио Misha (React + TypeScript + Vite)

Многостраничное портфолио: главная и страница-кейс для каждого проекта (`/projects/booking` и т.д.).
Анимации: GSAP ScrollTrigger + Lenis. Роутинг: React Router.

## Запуск
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # сборка в dist/
```

## Что поменять под себя
- **Контакты:** `src/data/site.ts` (Telegram, Email, GitHub).
- **Проекты и тексты «боли»:** `src/data/projects.ts`. Чтобы добавить проект, добавь объект в массив.
- **Скриншоты:** положи файл в `public/projects/` и укажи путь в поле `image`, например `"/projects/booking.png"`. Без `image` вместо картинки показывается большая цифра.
- **Домен:** замени `YOUR-DOMAIN.com` в `public/robots.txt` и `public/sitemap.xml`.
- **Цвета:** переменные в начале `src/styles/global.css` (`--a` — акцентный).

## Деплой на Vercel
1. Залей проект в GitHub-репозиторий.
2. Vercel → New Project → выбери репозиторий (Framework Preset: Vite).
3. `vercel.json` уже настроен, чтобы страницы вроде `/projects/booking` открывались при обновлении.

## SEO (следующие шаги)
- Свой домен, Яндекс Вебмастер и Google Search Console, отправить `sitemap.xml`.
- Сейчас это SPA: `title` и `description` меняются на каждой странице, но для лучшей индексации позже стоит перейти на предрендер (например, Astro или Next.js с SSG).
