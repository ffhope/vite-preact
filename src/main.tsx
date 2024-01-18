import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import microApp from '@micro-zoe/micro-app'

microApp.start()

render(<App />, document.getElementById('app')!)
