import './style.css'

import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app')

const heading = document.createElement('h1')
heading.textContent = 'Hello Vanilla TypeScript!'

app?.appendChild(heading)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
