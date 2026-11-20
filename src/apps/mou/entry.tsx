import App, { type MouPageKey } from './App';

export default function Entry({ page = 'mou' }: { page?: MouPageKey }) {
  return <App page={page} />;
}