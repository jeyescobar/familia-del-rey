"use client";
import { deleteEvent } from "@/app/admin/actions";

export default function DeleteEventButton({
  eventId,
}: {
  eventId: number;
}) {
  return (
  <form
    action={deleteEvent}
    onSubmit={(e) => {
      const confirmed = window.confirm(
        "¿Estás seguro de que quieres eliminar este evento?"
      );

      if (!confirmed) {
        e.preventDefault();
      }
    }}
  >
    <input type="hidden" name="eventId" value={eventId} />

    <button
      type="submit"
      className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
    >
      Eliminar evento
    </button>
  </form>
);
}