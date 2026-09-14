export default function Home(){
  return (
    
    <main className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center bg-black text-white flex-col gap-6 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">La Familia del Rey</h1>
        <p className="text-xl text-center">Una Iglesia donde puedes pertenecer, crecer y compartir.</p>
        <a className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300" href="#">VISITANOS</a>
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
    </main>
    
  );
}