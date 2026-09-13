export default function Home(){
  return (
    
    <main className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center bg-black text-white flex-col gap-6 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">La Familia del Rey</h1>
        <p className="text-xl text-center">Una Iglesia donde puedes pertenecer, crecer y compartir.</p>
        <a className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300" href="#">VISITANOS</a>
      </section>
    </main>
    
  );
}