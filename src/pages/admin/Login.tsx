import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert('Credenciais inválidas');
      return;
    }

    navigate('/admin/dashboard');
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-black/60 backdrop-blur-xl
                   border border-[#39FF14]/40
                   p-10 shadow-[0_0_50px_rgba(57,255,20,0.25)]"
      >
        <h1 className="text-3xl font-black italic uppercase text-white mb-8">
          Login Admin
        </h1>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 bg-black/50 border-b-2 border-white/20
                     px-4 py-3 text-white outline-none
                     focus:border-[#39FF14]"
        />

        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-8 bg-black/50 border-b-2 border-white/20
                     px-4 py-3 text-white outline-none
                     focus:border-[#39FF14]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 border-2 border-[#39FF14]
                     text-[#39FF14] font-black uppercase
                     hover:bg-[#39FF14] hover:text-black transition-all"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
