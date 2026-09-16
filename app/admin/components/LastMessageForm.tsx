"use client";

import { updateLastMessage } from "@/app/admin/actions";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();
type LastMessage = {
  id: number;
  series: string;
  title: string;
  preacher: string;
  date: string;
  youtubeUrl: string;
  imageUrl: string;
  imageKey: string | null;
};
export default function LastMessageForm({
  lastMessage,
}: {
  lastMessage: LastMessage | null;
}) {
const [imageUrl, setImageUrl] = useState(
  lastMessage?.imageUrl ?? ""
);

const [imageKey, setImageKey] = useState(
  lastMessage?.imageKey ?? ""
);
const { startUpload, isUploading } = useUploadThing("messageCover", {
  onClientUploadComplete: (res) => {
    const uploadedUrl = res[0]?.ufsUrl;
    const uploadedKey = res[0]?.key;

    if (uploadedUrl && uploadedKey) {
      setImageUrl(uploadedUrl);
      setImageKey(uploadedKey);
      alert("Portada subida correctamente");
    }
  },

  onUploadError: (error) => {
    console.error("UPLOAD ERROR:", error);
    alert(`Error al subir la portada: ${error.message}`);
  },
});
    
  return (
  <div>
    <h2 className="text-2xl font-bold">
      Último Mensaje
    </h2>

    <p className="text-gray-500 mt-2">
      Actualiza el mensaje más reciente que aparece en la página principal.
    </p>

    <form action={updateLastMessage} className="mt-6 space-y-4">
      <div>
        <label className="block font-semibold mb-2">
          Serie
        </label>

        <input
          name="series"
          type="text"
          required
          defaultValue={lastMessage?.series ?? ""}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Título del mensaje
        </label>

        <input
          name="title"
          type="text"
          required
          defaultValue={lastMessage?.title ?? ""}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Predicador
        </label>

        <input
          name="preacher"
          type="text"
          required
          defaultValue={lastMessage?.preacher ?? ""}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
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
          defaultValue={lastMessage?.preacher ?? ""}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Enlace de YouTube
        </label>

        <input
          name="youtubeUrl"
          type="url"
          required
          defaultValue={lastMessage?.youtubeUrl ?? ""}
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
        />
      </div>
      <div>
  <label className="block font-semibold mb-2">
    Portada del mensaje
  </label>

  <input
    id="message-cover"
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
            htmlFor="message-cover"
            className={`inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors ${
            isUploading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800 cursor-pointer"
            }`}
        >
            {isUploading ? "Subiendo portada..." : "📷 Subir portada"}
        </label>

        <input type="hidden" name="imageUrl" value={imageUrl} />
        <input type="hidden" name="imageKey" value={imageKey} />
        </div>
        <button
            type="submit"
            disabled={isUploading || !imageUrl || !imageKey}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
            Guardar último mensaje
            </button>
    </form>
  </div>
);
}