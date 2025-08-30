import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div className="flex justify-center space-x-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={reactLogo}
              className="h-24 w-24 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-8">Vite + React</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <Button onClick={() => setCount(count => count + 1)} className="mb-4">
            count is {count}
          </Button>
          <p className="text-gray-600">
            Edit{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>

        <p className="text-gray-500 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
