"use client";
import { signIn } from "next-auth/react";
export default function AdminPage() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const username = formData.get("username");
  const password = formData.get("password");

  const result = await signIn("credentials", {
  username,
  password,
  redirect: false,
  
});


if (!result?.error) {
  window.location.href = "/admin/dashboard";
} else {
  alert("Usuario o contraseña incorrectos.");
}

}
  return (
    <main className="min-h-screen bg-[#181818] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-black text-center">
          Administración
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          La Familia del Rey
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Usuario
            </label>

            <input
              name="username"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
              placeholder="Usuario"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>

            <input
              name="password"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}