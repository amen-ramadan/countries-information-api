/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    './index.html',           // ملف HTML الرئيسي
    './src/**/*.{js,ts,jsx,tsx}', // جميع الملفات في مجلد src مع الامتدادات المحددة
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

