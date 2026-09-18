import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Velora render error:', error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <main className="min-h-screen grid place-items-center bg-[#0B0E17] px-6 text-center text-[#ECEEF3]">
        <section className="max-w-lg">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-blue-400">VELORA</p>
          <h1 className="font-serif text-3xl font-bold">The page could not load</h1>
          <p className="mt-4 text-slate-400">
            A browser-side error stopped the application. Reload the page, then check the browser console if it continues.
          </p>
          <button
            type="button"
            className="mt-6 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
          <details className="mt-6 text-left text-xs text-slate-500">
            <summary>Technical details</summary>
            <pre className="mt-2 whitespace-pre-wrap">{this.state.error.message}</pre>
          </details>
        </section>
      </main>
    );
  }
}
