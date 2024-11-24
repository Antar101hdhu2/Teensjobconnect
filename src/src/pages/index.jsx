@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #000000;
  --secondary: #ffffff;
  --accent: #404040;
}

body {
  background: var(--primary);
  color: var(--secondary);
}

@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes fade-out {
  0% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
}

.animate-bounce-in {
  animation: bounce-in 1s ease-out;
}

.animate-fade-out {
  animation: fade-out 2.5s forwards;
}

.job-card {
  transition: all 0.2s ease-in-out;
}

.job-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
