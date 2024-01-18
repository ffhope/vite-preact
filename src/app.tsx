import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Button, Input } from 'letd';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p></p>
        <Input value={count}/>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
