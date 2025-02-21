import { useState } from 'react';
import Input from '../components/ui/Input';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === 'demo@example.com' && password === 'password') {
        console.log('Login successful');
        onLogin();
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="Scangrid Logo" src="/scangrid_logo.svg" className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="email"
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                rightElement={
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                }
              />

              {error && <div className="text-sm text-red-400">{error}</div>}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
