"use client";
import { useState } from "react";
import { MessageCircle , CalendarDays , Users , MapPin , HeartHandshake , ChevronDown} from "lucide-react";
import Image from "next/image"
export default function Home(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("adoracion");
  return (
    
    <main className="min-h-screen">
      <nav className="w-full bg-black/70 text-white px-6 py-5 sticky top-0 z-40 backdrop-blur-md">

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

      
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center bg-black text-white flex-col gap-6 px-6 pt-24 pb-16">
        <Image
          src="/church-hero1.jpg"
          alt="La Familia del Rey"
          fill
          className="object-cover object-center"
        />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center">IGLESIA FAMILIA DEL REY</h1>
        <p className="text-lg md:text-xl max-w-2xl text-white/90">Una Iglesia donde puedes pertenecer, crecer y compartir.</p>
        <a className="inline-block bg-white text-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition-colors duration-300">VISITANOS</a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <ChevronDown size ={28} className="animate-bounce"/>
      </div>
      </section>

      <section className="py-24 md:py-32 flex items-center justify-center px-6 bg-zinc-100 text-black flex-col">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              NUESTROS CULTOS
        </h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-600">Hay un lugar para ti.</p>
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6">
          <button onClick={() => setSelectedService("adoracion")} className="w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300">
            <span className="block text-sm font-semibold tracking-widest text-zinc-500">
              Domingo
            </span>

            <span className="block text-2xl font-semibold mt-2">
              CULTO DE ADORACIÓN 10:00 AM
            </span>

            <p className="text-zinc-600 mt-2">
              Un tiempo para reunirnos como familia, adorar juntos y recibir la Palabra.
            </p>
          </button>

          <button onClick={() => setSelectedService("escuela")} className="w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300">
            <span className="block text-sm font-semibold tracking-widest text-zinc-500">
              Domingo
            </span>

            <span className="block text-2xl font-semibold mt-2">
              ESCUELA BÍBLICA 9:00 AM
            </span>

            <p className="text-zinc-600 mt-2">
              Un espacio para conocer más de la Palabra de Dios y crecer juntos en nuestra fe.
            </p>
          </button>
          <button onClick={() => setSelectedService("oracion")} className="w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300">
            <span className="block text-sm font-semibold tracking-widest text-zinc-500">
              Martes
            </span>

            <span className="block text-2xl font-semibold mt-2">
              CULTO DE ORACIÓN 7:30 PM
            </span>

            <p className="text-zinc-600 mt-2">
              Un tiempo para buscar a Dios juntos a través de la oración, la adoración y la Palabra.
            </p>
          </button>
          <button onClick={() => setSelectedService("jovenes")} className="w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300">
            <span className="block text-sm font-semibold tracking-widest text-zinc-500">
              Viernes · Fechas Seleccionadas
            </span>

            <span className="block text-2xl font-semibold mt-2">
              CULTO DE JÓVENES 7:30 PM
            </span>

            <p className="text-zinc-600 mt-2">
              Un espacio para que nuestros jóvenes conecten, crezcan en su fe y adoren a Dios juntos.
            </p>
          </button>
          <button onClick={() => setSelectedService("matrimonios")} className="w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300">
            <span className="block text-sm font-semibold tracking-widest text-zinc-500">
              Viernes · Fechas Seleccionadas
            </span>

            <span className="block text-2xl font-semibold mt-2">
              CULTO DE MATRIMONIOS 7:30 PM
            </span>

            <p className="text-zinc-600 mt-2">
              Un espacio para fortalecer los matrimonios, crecer juntos y construir familias centradas en Dios.
            </p>
          </button>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden md:ml-12">
          <Image
            src={
              selectedService === "adoracion"
                ? "/foto-adoracion.jpg"
                : selectedService === "escuela"
                ? "/foto-escuela-biblica.jpg"
                : selectedService ==="oracion"
                ? "/foto-culto-oracion.jpg"
                : selectedService ==="jovenes"
                ? "/foto-culto-jovenes.jpg"
                : selectedService ==="matrimonios"
                ? "/foto-culto-matrimonios.jpg"
                : "/church.1.jpg"

                
            }
            alt="La Familia del Rey"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div>
        <span className="text-sm font-semibold tracking-widest text-zinc-500">ÚLTIMO MENSAJE</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4"> Una palabra para tu vida</h2>
        <p className="mt-4 text-lg text-zinc-600">Escucha nuestro mensaje más reciente.</p>
          </div>

            <button className=" w-full mt-12 relative overflow-hidden aspect-video bg-zinc-900 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-300">
              <Image
                src="/foto-predica.jpg"
                alt="Último mensaje"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <span className="text-white text-4xl w-20 h-20 rounded-full border border-white flex items-center justify-center relative z-10">▶</span>  
            </button>
          <div className="mt-6">
            <span className="text-sm font-semibold tracking-widest text-zinc-500">
              SERIE
            </span>
              <h3 className="text-2xl font-bold">Título del mensaje</h3>
              <p className="mt-2 text-zinc-500">Predicador · Fecha</p>
              <a className="border-b border-black pb-1 hover:text-zinc-500 inline-block mt-4" href="/sermones">VER MENSAJE</a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <span className="text-sm font-semibold tracking-widest text-zinc-400">PRÓXIMOS EVENTOS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Conéctate con nuestra comunidad</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>

              <div className=" relative overflow-hidden aspect-video bg-zinc-800 cursor-pointer hover:opacity-90 transition-opacity duration-300">
                <Image
                  src="/evento-1.jpg"
                  alt="Nombre del evento"
                  fill
                  className="object-cover"
                />
              </div>

                <div className="pt-6">
                  <span className ="text-sm font-semibold tracking-widest text-zinc-400">20 SEP · 7:30 PM </span>
                  <h3 className="text-2xl font-bold mt-2">Nombre del evento</h3>
                  <p className="mt-2 text-zinc-400">Hora · Lugar</p>
                  <a className="border-b border-white pb-1 mt-4 inline-block hover:text-zinc-400 transition-colors duration-300 " href="/eventos">VER EVENTO</a>
                </div>
                
            </div>
            <div>
              <div className="relative overflow-hidden aspect-video bg-zinc-800 cursor-pointer hover:opacity-90 transition-opacity duration-300">
                <Image
                  src="/evento-2.jpg"
                  alt="Nombre del evento"
                  fill
                  className="object-cover"
                />
              </div>

                <div className="pt-6">
                  <span className ="text-sm font-semibold tracking-widest text-zinc-400">FECHA</span>
                  <h3 className="text-2xl font-bold mt-2">Nombre del evento</h3>
                  <p className="mt-2 text-zinc-400">Hora · Lugar</p>
                  <a className="border-b border-white pb-1 mt-4 inline-block hover:text-zinc-400 transition-colors duration-300 " href="/eventos">VER EVENTO</a>
                </div>
                
            </div>
            <div>
              <div className="relative overflow-hidden aspect-video bg-zinc-800 cursor-pointer hover:opacity-90 transition-opacity duration-300">
                <Image
                  src="/evento-3.jpg"
                  alt="Nombre del evento"
                  fill
                  className="object-cover"
                />
              </div>

                <div className="pt-6">
                  <span className ="text-sm font-semibold tracking-widest text-zinc-400">FECHA</span>
                  <h3 className="text-2xl font-bold mt-2">Nombre del evento</h3>
                  <p className="mt-2 text-zinc-400">Hora · Lugar</p>
                  <a className="border-b border-white pb-1 mt-4 inline-block hover:text-zinc-400 transition-colors duration-300 " href="/eventos">VER EVENTO</a>
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
              <div className=" relative overflow-hidden aspect-video bg-zinc-300">
                <Image
                  src="/ministerio-1.jpg"
                  alt="Ministerio de La Familia del Rey"
                  fill
                  className="object-cover"
                />
              </div>
                <div className="pt-6">
                  <h3 className ="text-2xl font-bold tracking-tight">Nombre del ministerio</h3>
                  <p className="m-2 text-zinc-600 text-lg">Descripción del ministerio.</p>
                </div>
            </div>
            <div>
              <div className="relative overflow-hidden aspect-video bg-zinc-300">
                <Image
                  src="/ministerio-2.jpg"
                  alt="Ministerio de La Familia del Rey"
                  fill
                  className="object-cover"
                />
              </div>
                <div className="pt-6">
                  <h3 className ="text-2xl font-bold tracking-tight">Nombre del ministerio</h3>
                  <p className="m-2 text-zinc-600 text-lg">Descripción del ministerio.</p>
                </div>
            </div>
            <div>
              <div className="relative overflow-hidden aspect-video bg-zinc-300">
                <Image
                  src="/ministerio-3.jpg"
                  alt="Ministerio de La Familia del Rey"
                  fill
                  className="object-cover"
                />
              </div>
                <div className="pt-6">
                  <h3 className ="text-2xl font-bold tracking-tight">Nombre del ministerio</h3>
                  <p className="m-2 text-zinc-600 text-lg">Descripción del ministerio.</p>
                </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/ministerios"
              className="inline-block border-b border-black pb-1 hover:text-zinc-500 transition-colors duration-300"
            >
              VER TODOS LOS MINISTERIOS
            </a>
          </div>
        </div>
      </section>
      <section id="visitanos" className ="py-24 md:py-32 py-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wides text-zinc-400 ">VISÍTANOS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Queremos conocerte</h2>
          <p className="text-lg mt-4 text-zinc-400 max-w-2xl mx-auto">Planifica tu visita y acompáñanos en nuestro próximo servicio.</p>
          <a className="inline-block mt-8 bg-white text-black px-8 py-3 border border-white hover:bg-black hover:text-white transition-colors duration-300" href="/visitanos">PLANIFICA TU VISITA</a>
        </div>
      </section>



      <footer className="bg-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold">
                La Familia del Rey
              </h3>

              <p className="mt-4 text-zinc-400 max-w-sm">
                Una iglesia donde puedes pertenecer, crecer y compartir.
              </p>
            </div>
            <div className="md:justify-self-center">
              <h3 className="text-sm font-semibold tracking-widest">
                NAVEGACIÓN
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                <a href="/sermones" className="text-zinc-400 hover:text-white transition-colors">
                  Mensajes
                </a>

                <a href="/eventos" className="text-zinc-400 hover:text-white transition-colors">
                  Eventos
                </a>

                <a href="/ministerios" className="text-zinc-400 hover:text-white transition-colors">
                  Ministerios
                </a>

                <a href="/visitanos" className="text-zinc-400 hover:text-white transition-colors">
                  Visítanos
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <h3 className="text-sm font-semibold tracking-widest">
                CONECTA
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Facebook
                </a>

                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Instagram
                </a>

                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-zinc-500">
              © 2026 La Familia del Rey. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
    
  );
}