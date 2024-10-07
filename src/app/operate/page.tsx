"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const AdminPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPodcast = async () => {
    setIsPlaying(true);
  };

  const stopPodcast = () => {
    setIsPlaying(false);
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
        <div className="mt-10 text-white">
          <Select>
            <SelectTrigger className="w-1/3">
              <SelectValue placeholder="Select Persona" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mamet">Mamet</SelectItem>
              <SelectItem value="dewi">Dewi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 w-full">
          <Textarea
            className="w-full p-4 border text-white rounded"
            placeholder="Tambahkan fungsi tambahan di sini..."
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
