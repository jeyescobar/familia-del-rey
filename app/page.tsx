"use client";
import { useState } from "react";
import { MessageCircle , CalendarDays , Users , MapPin , HeartHandshake} from "lucide-react";
export default function Home(){
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <main className="min-h-screen">
      <nav className="w-full bg-black text-white px-6 py-5">

        <div className="max-w-6xl mx-auto flex text-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            

            <a href="#">La Familia del Rey</a>
          </div>
            <div className="flex gap-8 items-center hidden md:flex">
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#">INICIO</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#">MENSAJES</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#">EVENTOS</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#">MINISTERIOS</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#visitanos">VISÍTANOS</a>
              <a className="border border-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300"href="#">DAR</a>
            </div>
            
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed top-0 left-0 z-50 h-screen w-72 md:hidden bg-black text-white px-6 py-10">
          <div className="flex flex-col gap-6 text-xl font-semibold">
            <button className="md:hidden text-left"
            onClick={() => setMenuOpen(!menuOpen)}
            >
              ✕
              </button>
            <a href="#">INICIO</a>
            <a href="#" className="block p-4 hover:bg-zinc-900 transition-colors duration-10">
              <div className="flex items-center gap-3">
                <MessageCircle size={22} />
                <div>
                  <span className="text-xl font-semibold">
                    MENSAJES
                  </span>

                  <p className="text-sm text-zinc-400 mt-1">
                    Escucha nuestros mensajes más recientes.
                  </p>
                </div>
              </div>
            </a> 
            <a href="#" className="block p-4 hover:bg-zinc-900 transition-colors duration-10">
              <div className="flex items-center gap-3">
                <CalendarDays size={22} />
                <div>
                  <span className="text-xl font-semibold">
                    EVENTOS
                  </span>

                  <p className="text-sm text-zinc-400 mt-1">
                    Conoce nuestros proximos eventos y actividades.
                  </p>
                </div>
              </div>
            </a>           
            <a href="#" className="block p-4 hover:bg-zinc-900 transition-colors duration-10">
              <div className="flex items-center gap-3">
                <Users size={22} />
                <div>
                  <span className="text-xl font-semibold">
                    MINISTERIOS
                  </span>

                  <p className="text-sm text-zinc-400 mt-1">
                    Encuentra un lugar para crecer, conectar y servir.
                  </p>
                </div>
              </div>
            </a> 
            <a href="#" className="block p-4 hover:bg-zinc-900 transition-colors duration-10">
              <div className="flex items-center gap-3">
                <MapPin size={22} />
                <div>
                  <span className="text-xl font-semibold">
                    VISITANOS
                  </span>

                  <p className="text-sm text-zinc-400 mt-1">
                    Conoce nuestros horarios y planifica una visita.
                  </p>
                </div>
              </div>
            </a> 
            <a href="#" className="block p-4 hover:bg-zinc-900 transition-colors duration-10">
              <div className="flex items-center gap-3">
                <HeartHandshake size={22} />
                <div>
                  <span className="text-xl font-semibold">
                    DAR
                  </span>

                  <p className="text-sm text-zinc-400 mt-1">
                    Se parte de lo que Dios esta haciendo a traves de nuestra Iglesia.
                  </p>
                </div>
              </div>
            </a> 
            
          </div>
        </div>
      )}
      <section className="min-h-screen flex items-center justify-center bg-black text-white flex-col gap-6 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">La Familia del Rey</h1>
        <p className="text-xl text-center">Una Iglesia donde puedes pertenecer, crecer y compartir.</p>
        <a className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300" href="#visitanos">VISITANOS</a>
      </section>
      <section className="py-24 md:py-32 flex items-center justify-center px-6 bg-zinc-100 text-black">
        <div className="flex flex-col items-center gap-6 max-w-4xl">
          <span className="text-sm font-semibold tracking-widest text-zinc-500">CONÓCENOS</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Bienvenidos a La Familia del Rey</h2>
        <p className="text-lg text-center max-w-2xl text-zinc-600">Un lugar para pertencer, crecer y compartir juntos.</p>
        <a className="border-b border-black pb-1 hover:text-zinc-500" href="#">CONOCE MÁS</a>
        </div>
      </section>
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div>
        <span className="text-sm font-semibold tracking-widest text-zinc-500">ULTIMO MENSAJE</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4"> Una palabra para tu vida</h2>
        <p className="mt-4 text-lg text-zinc-600">Escucha nuestro mensaje más reciente.</p>
          </div>
            <div className="mt-12 aspect-video bg-zinc-900 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-300">
              <span className="text-white text-4xl w-20 h-20 rounded-full border border-white flex items-center justify-center">▶</span>  
            </div>
          <div className="mt-6">
              <h3 className="text-2xl font-bold">Título del mensaje</h3>
              <p className="mt-2 text-zinc-500">Predicador · Fecha</p>
              <a className="border-b border-black pb-1 hover:text-zinc-500 inline-block mt-4" href="#">VER MENSAJE</a>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <span className="text-sm font-semibold tracking-widest text-zinc-400">PRÓXIMOS EVENTOS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Conéctate con nuestra comunidad</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="aspect-video bg-zinc-800 cursor-pointer hover:opacity-90 transition-opacity duration-300"></div>

                <div className="pt-6">
                  <span className ="text-sm font-semibold tracking-widest text-zinc-400">FECHA</span>
                  <h3 className="text-2xl font-bold mt-2">Nombre del evento</h3>
                  <p className="mt-2 text-zinc-400">Hora · Lugar</p>
                  <a className="border-b border-white pb-1 mt-4 inline-block hover:text-zinc-400 transition-colors duration-300 " href="#">VER EVENTO</a>
                </div>
                
            </div>
            <div>
              <div className="aspect-video bg-zinc-800 cursor-pointer hover:opacity-90 transition-opacity duration-300"></div>

                <div className="pt-6">
                  <span className ="text-sm font-semibold tracking-widest text-zinc-400">FECHA</span>
                  <h3 className="text-2xl font-bold mt-2">Nombre del evento</h3>
                  <p className="mt-2 text-zinc-400">Hora · Lugar</p>
                  <a className="border-b border-white pb-1 mt-4 inline-block hover:text-zinc-400 transition-colors duration-300 " href="#">VER EVENTO</a>
                </div>
                
            </div>
            <div>
              <div className="aspect-video bg-zinc-800 cursor-pointer hover:opacity-90 transition-opacity duration-300"></div>

                <div className="pt-6">
                  <span className ="text-sm font-semibold tracking-widest text-zinc-400">FECHA</span>
                  <h3 className="text-2xl font-bold mt-2">Nombre del evento</h3>
                  <p className="mt-2 text-zinc-400">Hora · Lugar</p>
                  <a className="border-b border-white pb-1 mt-4 inline-block hover:text-zinc-400 transition-colors duration-300 " href="#">VER EVENTO</a>
                </div>
                
            </div>

          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 px-6 bg-zinc-100 text-black">
        <div className="max-w-6xl mx-auto">
          <span className=" text-sm font-semibold inline-block text-zinc-500">NUESTROS MINISTERIOS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Hay un lugar para ti</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="aspect-video bg-zinc-300"></div>
                <div className="pt-6">
                  <h3 className ="text-2xl font-bold tracking-tight">Nombre del ministerio</h3>
                  <p className="m-2 text-zinc-600 text-lg">Descripción del ministerio.</p>
                </div>
            </div>
            <div>
              <div className="aspect-video bg-zinc-300"></div>
                <div className="pt-6">
                  <h3 className ="text-2xl font-bold tracking-tight">Nombre del ministerio</h3>
                  <p className="m-2 text-zinc-600 text-lg">Descripción del ministerio.</p>
                </div>
            </div>
            <div>
              <div className="aspect-video bg-zinc-300"></div>
                <div className="pt-6">
                  <h3 className ="text-2xl font-bold tracking-tight">Nombre del ministerio</h3>
                  <p className="m-2 text-zinc-600 text-lg">Descripción del ministerio.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section id="visitanos" className ="py-24 md:py-32 py-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wides text-zinc-400 ">VISÍTANOS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Queremos conocerte</h2>
          <p className="text-lg mt-4 text-zinc-400 max-w-2xl mx-auto">Planifica tu visita y acompáñanos en nuestro próximo servicio.</p>
          <a className="inline-block mt-8 bg-white text-black px-8 py-3 border border-white hover:bg-black hover:text-white transition-colors duration-300" href="#">PLANIFICA TU VISITA</a>
        </div>
      </section>
    </main>
    
  );
}