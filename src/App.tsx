import { PageLayout } from './components/templates/PageLayout';
import { HomePage } from './components/pages/HomePage';
import type { Lang } from './domain';

interface AppProps { lang?: Lang; }

export function App({ lang }: AppProps) {
  return (
    <PageLayout lang={lang}>
      <HomePage />
    </PageLayout>
  );
}
