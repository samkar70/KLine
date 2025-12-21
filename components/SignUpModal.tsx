// components/SignUpModal.tsx
import React, { useState } from 'react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // REGISTRO DE DATOS: Esto se verá en la consola del navegador
    console.log("%c NUEVO REGISTRO ENCANTO ", "background: #fbbf24; color: #000; font-weight: bold;");
    console.log("Nombre:", formData.name);
    console.log("Correo:", formData.email);
    console.log("Fecha:", new Date().toLocaleString());

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ name: '', email: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
        <div className="p-8 text-center">
          {!isSuccess ? (
            <>
              <h2 className="text-3xl font-bold text-white mb-2">Únete a EnCanto</h2>
              <p className="text-slate-400 mb-6">Regístrate gratis para acceder a contenido exclusivo.</p>
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input
                  required
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-400"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  required
                  type="email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-400"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <button type="submit" className="w-full bg-amber-400 text-slate-900 font-bold py-3 rounded-xl">
                  {isSubmitting ? 'Procesando...' : 'CREAR CUENTA GRATIS'}
                </button>
              </form>
            </>
          ) : (
            <div className="py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 className="text-2xl font-bold text-white">¡Bienvenida, {formData.name}!</h2>
              <p className="text-slate-400 mt-2">Pronto recibirás noticias nuestras en {formData.email}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;