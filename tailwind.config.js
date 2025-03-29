/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      'sla-p1': '#FEE2E2',
      'sla-p2': '#FEF3C7',
      'sla-p3': '#DCFCE7',
      'sla-p4': '#DBEAFE',
    },
    animation: {
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
];
