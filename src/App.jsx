import './themes/style.css'
import {
  GithubIcon,
  XIcon,
  LinkedinIcon,
  Home,
  ServerIcon,
  HomeIcon,
} from 'lucide-react'
import {
  ServerStackIcon,
  EnvelopeIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
} from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl normal-case">warungmicky.shop</a>
        </div>
        <div className="flex-none pe-3">
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller hidden" value="latte" />
            {/* Sun Icon */}
            <SunIcon className="swap-on h-6 w-6 fill-current" />
            {/* Moon Icon */}
            <MoonIcon className="swap-off h-6 w-6 fill-current" />
          </label>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 flex-grow bg-base-200 flex flex-col items-center justify-center px-4">
        <div className="avatar mb-4">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 skeleton">
            <img src="https://avatars.githubusercontent.com/u/39564765?v=4" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-base-content">Anemonastrum</h1>
        <p className="text-base-content text-opacity-70 mb-6 text-center max-w-md">
          verum rex.
        </p>

        {/* Main Action Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs mb-6">
          <a className="btn btn-info relative pl-5" href="https://home.wariungmicky.shop/">
            <HomeIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2" />
            <span className="block w-full text-center">Homepage</span>
          </a>
          <a className="btn btn-success relative pl-5" href="https://status.warungmicky.shop/">
            <ServerStackIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2" />
            <span className="block w-full text-center">Server Status</span>
          </a>
          <a className="btn btn-warning relative pl-5" href="https://synology.warungmicky.shop/">
            <CloudIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2" />
            <span className="block w-full text-center">File Server</span>
          </a>
          <a className="btn btn-error relative pl-5" href="https://earsip.wariungmicky.shop/">
            <EnvelopeIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2" />
            <span className="block w-full text-center">E-ARSIP</span>
          </a>
        </div>

        {/* Social Media Circle Buttons */}
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/anemonastrum"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-outline"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/anemonastrum"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-outline"
            aria-label="Twitter"
          >
            <XIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/anemonastrum"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-outline"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            © {new Date().getFullYear()} Anemonastrum — Built with{' '}
            <a
              className="underline"
              href="https://daisyui.com"
              target="_blank"
              rel="noreferrer"
            >
              DaisyUI
            </a>
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default App
