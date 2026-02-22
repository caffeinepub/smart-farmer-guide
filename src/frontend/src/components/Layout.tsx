import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { STRINGS } from '../constants/strings';

export default function Layout() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-light to-earth-cream">
      {/* Header */}
      <header className="bg-earth-green shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {!isHome ? (
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate({ to: '/' })}
              className="text-white hover:bg-earth-dark/20 touch-target"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              {STRINGS.common.back}
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/logo.dim_512x512.png"
                alt={STRINGS.splash.appName}
                className="w-12 h-12"
              />
              <h1 className="text-xl font-bold text-white">
                {STRINGS.splash.appName}
              </h1>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-earth-brown text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {STRINGS.splash.appName}
          </p>
          <p className="text-xs mt-2 opacity-80">
            {STRINGS.footer.builtWith}{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
