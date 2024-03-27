export type ThemeType = 'light' | 'dark'

export class Theme {
  static theme: ThemeType = (window.localStorage.getItem('theme') as ThemeType) || 'light'

  static setThemeToHTML(t?: ThemeType) {
    if (t) {
      this.theme = t
    }
    window.localStorage.setItem('theme', this.theme)
    window.dispatchEvent(new CustomEvent('theme', { detail: { theme: this.theme } }))
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(this.theme)
  }

  static toggleTheme() {
    this.setThemeToHTML(this.theme === 'light' ? 'dark' : 'light')
  }
}
