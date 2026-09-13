export default function Home(){
  return (
    
    <main className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center bg-black text-white flex-col gap-6 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">La Familia del Rey</h1>
        <p className="text-xl text-center">Una Iglesia donde puedes pertenecer, crecer y compartir.</p>
        <a className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300" href="#">VISITANOS</a>
      </section>
      <section className="py-24 md:py-32 flex items-center justify-center px-6 bg-zinc-100 text-black">
        <div className="flex flex-col items-center gap-6 max-w-4x1">
          <span className="text-sm font-semibold tracking-widest text-zinc-500">CONÓCENOS</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Bienvenidos a La Familia del Rey</h2>
        <p className="text-lg text-center max-w-2xl text-zinc-600">Un lugar para pertencer, crecer y compartir juntos.</p>
        <a className="border-b border-black pb-1 hover:text-zinc-500" href="#">CONOCE MÁS</a>
        </div>
      </section>
    </main>
    
  );
}