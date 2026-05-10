import Home from './pages/Home.jsx';
import Terms from './pages/Terms.jsx';
import VoiceConsent from './pages/VoiceConsent.jsx';

function getRoutePath() {
  const path = window.location.pathname.replace(/\/$/, '');

  if (path.endsWith('/terms')) return '/terms';
  if (path.endsWith('/voice-consent')) return '/voice-consent';

  return '/';
}

export default function App() {
  const path = getRoutePath();

  if (path === '/terms') return <Terms />;
  if (path === '/voice-consent') return <VoiceConsent />;

  return <Home />;
}
