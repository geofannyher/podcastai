"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const AdminPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPodcast = async () => {
    setIsPlaying(true);
    // Lakukan operasi loop untuk memulai podcast
    // Misalnya, menghubungkan ke WebSocket atau menjalankan logika podcast
  };

  const stopPodcast = () => {
    setIsPlaying(false);
    // Hentikan podcast
  };

  return (
    <div className="h-screen container mx-auto">
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6">Admin Podcast Control</h1>
        <div className="flex space-x-4">
          <Button
            onClick={startPodcast}
            disabled={isPlaying}
            className="px-4 py-2 text-white rounded"
          >
            Start Podcast
          </Button>
          <Button
            onClick={stopPodcast}
            disabled={!isPlaying}
            className="px-4 py-2 text-white rounded"
          >
            Stop Podcast
          </Button>
        </div>
        <h1>Status Podcast</h1>
        <h1 className="text-white font-semibold text-center">
          {isPlaying ? "Podcast Mulai" : "Podcast Berhenti"}
        </h1>
        <div className="mt-6 w-full">
          <Textarea
            className="w-full p-4 border rounded"
            placeholder="Tambahkan fungsi tambahan di sini..."
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
