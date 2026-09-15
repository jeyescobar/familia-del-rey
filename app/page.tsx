"use client";
import { useEffect, useState } from "react";
import { MessageCircle , CalendarDays , Users , MapPin , HeartHandshake ,Church, ChevronDown} from "lucide-react";
import Image from "next/image"
export default function Home(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("adoracion");
  const [activeEvent, setActiveEvent] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(3);
  const [isJumping, setIsJumping] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isWheelLocked, setIsWheelLocked] = useState(false);
  
  const events = [
  {
    image: "/evento-1.jpg",
    date: "20 SEP · 7:30 PM",
    title: "Nombre del evento",
    details: "Hora · Lugar",
  },
  {
    image: "/evento-2.jpg",
    date: "FECHA",
    title: "Nombre del evento",
    details: "Hora · Lugar",
  },
  {
    image: "/evento-3.jpg",
    date: "FECHA",
    title: "Nombre del evento",
    details: "Hora · Lugar",
  },
];
  const loopEvents = [...events, ...events, ...events];
  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
    };
  }, [menuOpen]);
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
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#cultos">CULTOS</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#mensaje">MENSAJES</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#eventos">EVENTOS</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#ministerios">MINISTERIOS</a>
              <a className="hover:text-zinc-400 transition-colors duration-300" href="#visitanos">VISÍTANOS</a>
              <a className="border border-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300"href="#">DAR</a>
            </div>
            
        </div>
      </nav>

        {/* menu open nav bar */}
      {menuOpen && (
        <div className="overflow-y-auto fixed top-0 left-0 z-50 h-screen w-72 md:hidden bg-black text-white px-6 py-10">
          <div className="flex flex-col gap-6 text-xl font-semibold">
            <button className="md:hidden text-left"
            onClick={() => setMenuOpen(!menuOpen)}
            >
              ✕
              </button>

            <a href="#">INICIO</a>

            <a href="#mensaje" 
            onClick={() => setMenuOpen(false)}
            className="block p-4 hover:bg-zinc-900 transition-colors duration-10">
              
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

            <a href="#cultos" 
            onClick={() => setMenuOpen(false)}
            className="block p-4 hover:bg-zinc-900 transition-colors duration-10">

              <div className="flex items-center gap-3">
                <Church size={22} />
                <div>
                  <span className="text-xl font-semibold">
                    CULTOS
                  </span>

                  <p className="text-sm text-zinc-400 mt-1">
                    Conoce nuestros horarios y cultos.
                  </p>
                </div>
              </div>
            </a> 

            <a href="#eventos" 
            onClick={() => setMenuOpen(false)}
            className="block p-4 hover:bg-zinc-900 transition-colors duration-10">

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

            <a href="#ministerios"
            onClick={() => setMenuOpen(false)}
             className="block p-4 hover:bg-zinc-900 transition-colors duration-10">

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
            <a href="#visitanos" 
            onClick={() => setMenuOpen(false)}
            className="block p-4 hover:bg-zinc-900 transition-colors duration-10">

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

            <a href="#" 
            onClick={() => setMenuOpen(false)}
            className="block p-4 hover:bg-zinc-900 transition-colors duration-10">

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

      



              {/* HERO */}
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






            {/* Cultos */}
      <section id="cultos" className="scroll-mt-24 py-24 md:py-32 flex items-center justify-center px-6 bg-zinc-100 text-black flex-col">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              NUESTROS CULTOS
        </h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-600">Hay un lugar para ti.</p>
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6">
          <button onClick={() => setSelectedService("adoracion")} 
          className={` hover:pl-7 w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300 ${
            selectedService === "adoracion"
              ? "border-l-8 border-l-black pl-5"
              : "border-l border-l-transparent pl-5"
          }`}>
            
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

          <button onClick={() => setSelectedService("escuela")} 
          className={`hover:pl-7 w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300 ${
            selectedService === "escuela"
              ? "border-l-8 border-l-black pl-5"
              : "border-l border-l-transparent pl-5"
          }`}>
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
          <button onClick={() => setSelectedService("oracion")} 
          className={`hover:pl-7 w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300 ${
            selectedService === "oracion"
              ? "border-l-8 border-l-black pl-5"
              : "border-l border-l-transparent pl-5"
          }`}>
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
          <button onClick={() => setSelectedService("jovenes")} 
          className={`hover:pl-7 w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300 ${
            selectedService === "jovenes"
              ? "border-l-8 border-l-black pl-5"
              : "border-l border-l-transparent pl-5"
          }`}>
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
          <button onClick={() => setSelectedService("matrimonios")} 
          className={`hover:pl-7 w-full text-left py-6 border-b border-black/20 hover:border-black transition-colors duration-300 ${
            selectedService === "matrimonios"
              ? "border-l-8 border-l-black pl-5"
              : "border-l border-l-transparent pl-5"
          }`}>
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
            key={selectedService}
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
            className="service-image object-cover transition-transform duration-500 hover:scale-105"
          />
          </div>
        </div>
      </section>




              {/* Ultimo mensaje */}
      <section id="mensaje" className="scroll-mt-24 py-24 md:py-32 px-6">
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




              {/* EVENTOS */}
      <section id="eventos" className="scroll-mt-24 py-24 md:py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <span className="text-sm font-semibold tracking-widest text-zinc-400">PRÓXIMOS EVENTOS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Conéctate con nuestra comunidad</h2>
          <div className="mt-12 relative">
            
            <div
              className="overflow-hidden touch-pan-y"

              onTouchStart={(e) => {
                setTouchStart(e.touches[0].clientX);
              }}

              onTouchEnd={(e) => {
                if (touchStart === null) return;

                const touchEnd = e.changedTouches[0].clientX;
                const distance = touchStart - touchEnd;

                if (distance > 50) {
                  setCurrentSlide((prev) => prev + 1);
                }

                if (distance < -50) {
                  setCurrentSlide((prev) => prev - 1);
                }

                setTouchStart(null);
              }}

              onWheel={(e) => {
                if (isWheelLocked) return;

                if (Math.abs(e.deltaX) < 8) return;

                setIsWheelLocked(true);

                if (e.deltaX > 0) {
                  setCurrentSlide((prev) => prev + 1);
                } else {
                  setCurrentSlide((prev) => prev - 1);
                }

                setTimeout(() => {
                  setIsWheelLocked(false);
                }, 500);
              }}
            >
              
            <div className="mt-8 flex justify-center gap-4">
              

              
            </div>
            
          <div
            className={`events-track flex items-center gap-2 md:gap-6 ${
              isJumping
                ? "transition-none"
                : "transition-transform duration-500 ease-out"
            }`}
            style={
              {
                "--slide": currentSlide,
              } as React.CSSProperties
            }
              onTransitionEnd={() => {
                if (currentSlide === 6) {
                  setIsJumping(true);
                  setCurrentSlide(3);
                }
                if (currentSlide === 2) {
                  setIsJumping(true);
                  setCurrentSlide(5);
                }
              }}
            >


              {loopEvents.map((event, index) => {
                const realIndex = index % events.length;
                const activeRealIndex = currentSlide % events.length;
                return (
                  <div
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                  className={`shrink-0 cursor-pointer transition-all duration-500 ${
                    realIndex === activeRealIndex
                      ? "w-[85%] md:w-[62%] opacity-100 scale-100"
                      : "w-[85%] md:w-[62%] opacity-40 scale-90"
                  }`}
                >

              <div className=" relative overflow-hidden aspect-video bg-zinc-800 cursor-pointer hover:opacity-90 transition-opacity duration-300">
                <Image
                  src={event.image}
                  alt="Nombre del evento"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

                <div className="pt-6">
                  <span className="text-sm font-semibold tracking-widest text-zinc-400">
                    {event.date}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    {event.details}
                  </p>
                  <a className="border-b border-white pb-1 mt-4 inline-block hover:text-zinc-400 transition-colors duration-300 " href="/eventos">VER EVENTO</a>
                </div>
                
            </div>

            );})}
          </div>
          </div>
          </div>
        </div>
      </section>





                {/* Ministerios */}
      <section id="ministerios" className="scroll-mt-24 py-24 md:py-32 px-6 bg-zinc-100 text-black">
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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


              {/* Footer */}
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
                <a href="#cultos" className="text-zinc-400 hover:text-white transition-colors">
                  Cultos
                </a>

                <a href="#mensaje" className="text-zinc-400 hover:text-white transition-colors">
                  Mensajes
                </a>

                <a href="#eventos" className="text-zinc-400 hover:text-white transition-colors">
                  Eventos
                </a>

                <a href="#ministerios" className="text-zinc-400 hover:text-white transition-colors">
                  Ministerios
                </a>

                <a href="#visitanos" className="text-zinc-400 hover:text-white transition-colors">
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