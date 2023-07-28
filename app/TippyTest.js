'use client'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function TippyComponent() {
  return (
    <Tippy content="Hello">
      <button>My button</button>
    </Tippy>
  )
}