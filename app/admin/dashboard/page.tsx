import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";
import { toggleLive, updateLiveUrl} from "@/app/admin/actions";
import EventForm from "@/app/admin/components/EventForm";
import DeleteEventButton from "@/app/admin/components/DeleteEventButton";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/admin");
  }
  const settings = await db.orm.public.SiteSettings
  .where({ id: 1 })
  .first();
  const events = await db.orm.public.Event.all();

  return (
  <main className="min-h-screen bg-[#181818] text-white px-6 py-16">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">
        Panel de Administración
      </h1>

      <p className="text-gray-400 mt-2">
        La Familia del Rey
      </p>

      <div className="mt-10 bg-white text-black rounded-2xl p-6">
        <h2 className="text-2xl font-bold">
          Transmisión en vivo
        </h2>

        <p className="text-gray-500 mt-2">
          Controla si el indicador LIVE aparece en la página principal.
        </p>

        <div className="mt-6">
          <p className="font-semibold">
            Estado: {settings?.isLive ? "ON" : "OFF"}
          </p>
          <form action={updateLiveUrl} className="mt-6">
            <label className="block font-semibold mb-2">
                Enlace de la transmisión
            </label>

            <input
                name="liveUrl"
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                defaultValue={settings?.liveUrl ?? ""}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
            />

            <button
                type="submit"
                className="mt-3 bg-gray-200 text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
                Guardar enlace
            </button>
            </form>
          <form action={toggleLive} className="mt-4">
            <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
                {settings?.isLive ? "Desactivar LIVE" : "Activar LIVE"}
            </button>
            </form>
        </div>
      </div>
      <div className="mt-8 bg-white text-black rounded-2xl p-6">
  <h2 className="text-2xl font-bold">
    Crear evento
  </h2>

  <p className="text-gray-500 mt-2">
    Añade un nuevo evento a la página de la iglesia.
  </p>
    <div className="mt-6">
    <EventForm />
    </div>

  
  <div className="mt-8 bg-white text-black rounded-2xl p-6">
  <h2 className="text-2xl font-bold">
    Eventos guardados
  </h2>

    <div className="mt-6 space-y-4">
        {events.map((event) => (
        <div
            key={event.id}
            className="border border-gray-200 rounded-lg p-4"
        >
            <p className="font-bold">{event.name}</p>
            <p>Fecha: {event.date}</p>
            <p>Hora: {event.time}</p>
            <p>Lugar: {event.location}</p>
            <div className="mt-4">
            <DeleteEventButton eventId={event.id} />
            </div>
        </div>
        ))}
    </div>
    </div>

        </div>
    </div>
  </main>
);}