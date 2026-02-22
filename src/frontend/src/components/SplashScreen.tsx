import { STRINGS } from '../constants/strings';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-earth-green via-earth-brown to-earth-dark flex flex-col items-center justify-center">
      <div className="animate-fade-in">
        <img
          src="/assets/generated/logo.dim_512x512.png"
          alt={STRINGS.splash.appName}
          className="w-48 h-48 mb-8 drop-shadow-2xl"
        />
        <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
          {STRINGS.splash.appName}
        </h1>
        <p className="text-lg text-earth-light text-center mt-4">
          {STRINGS.splash.tagline}
        </p>
      </div>
    </div>
  );
}
