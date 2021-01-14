import App from './App.svelte'
import './styles/index.css'

let app = new App({
  target: document.body,
})

export default app

// Hot Module Replacement (HMR): https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
