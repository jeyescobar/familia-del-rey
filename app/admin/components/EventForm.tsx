"use client";

import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";
import { createEvent } from "@/app/admin/actions";
const { useUploadThing } = generateReactHelpers<OurFileRouter>();
export default function EventForm() {
    const [imageUrl, setImageUrl] = useState("");
    const [imageKey, setImageKey] = useState("");
    const { startUpload, isUploading } = useUploadThing("eventImage", {
  onClientUploadComplete: (res) => {
    const uploadedUrl = res[0]?.ufsUrl;
    const uploadedKey = res[0]?.key;

    if (uploadedUrl && uploadedKey) {
      setImageUrl(uploadedUrl);
      setImageKey(uploadedKey);
      alert("Imagen subida correctamente");
    }
  },
  onUploadError: (error) => {
    console.error("UPLOAD ERROR:", error);
    alert(`Error al subir imagen: ${error.message}`);
  },
});
  return (
  <form action={createEvent} className="space-y-4">
    <div>
  <label className="block font-semibold mb-2">
    Nombre del evento
  </label>
  <input
    name="name"
    type="text"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Fecha
  </label>
  <input
    name="date"
    type="date"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Hora
  </label>
  <input
    name="time"
    type="time"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Lugar
  </label>
  <input
    name="location"
    type="text"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3"
  />
</div>
      <div>
  <input
    id="event-image"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={async (e) => {
      const file = e.target.files?.[0];

      if (!file) return;

      await startUpload([file]);
    }}
  />

  <label
    htmlFor="event-image"
    className={`inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors ${
      isUploading
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-gray-800 cursor-pointer"
    }`}
  >
    {isUploading ? "Subiendo imagen..." : "📷 Subir imagen"}
  </label>
</div>

<input
  type="hidden"
  name="imageUrl"
  value={imageUrl}
/>


<input type="hidden" name="imageKey" value={imageKey} />

<button
  type="submit"
  disabled={!imageUrl}
  className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
>
  Crear evento
</button> 
    </form>
  );
}