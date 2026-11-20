import { useEffect } from 'react';
import App, { type MouPageKey } from './App';
import './index.css';

const FONT = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap';

export default function Entry({ page = 'mou' }: { page?: MouPageKey }) {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);
  return <App page={page} />;
}
