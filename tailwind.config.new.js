/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // เพิ่มสีเฉพาะสำหรับโปรเจกต์
      colors: {
        'custom-purple': '#8B5CF6',
        'custom-cyan': '#06B6D4',
      },
      // เพิ่ม font family ถ้าต้องการ
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      // เพิ่มขนาด spacing พิเศษ
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
    },
  },
  plugins: [],
}
