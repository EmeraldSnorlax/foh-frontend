/* eslint-disable default-case */
export function update(): void {
  if (localStorage.theme === 'dark' || (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.theme)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function toggle(): void {
  if (!localStorage.theme) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  } else {
    switch (localStorage.theme) {
      case 'dark':
        localStorage.setItem('theme', 'light');
        break;
      case 'light':
        localStorage.setItem('theme', 'dark');
        break;
    }
  }
  update();
}
