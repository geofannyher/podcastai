"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Circle from "./components/audio";
import { textToSpeech } from "./services/chat.services";
import Image from "next/image";

const HomePage: React.FC = () => {
  const [isActive, setIsActive] = useState({
    active: false,
    id: 0,
  });
  const [btn, setBtn] = useState(false);
  const { toast } = useToast();
  const AiBattle = async ({
    id,
    voice_id,
    message,
  }: {
    id: number;
    voice_id: string;
    star?: string;
    message: string;
  }): Promise<void> => {
    const audioResponse: { data: "string" } = await textToSpeech({
      message,
      voice_id,
    });
    const resultAudioChat = audioResponse.data;
    if (resultAudioChat) {
      const audio = new Audio(resultAudioChat);
      setIsActive(() => ({ id: id, active: true }));

      // Menggunakan Promise untuk menunggu audio selesai
      return new Promise((resolve) => {
        audio.onended = () => {
          setIsActive((prev) => ({ ...prev, active: false }));
          resolve(); // Menyelesaikan Promise ketika audio selesai
        };
        audio.play().catch((e) => console.error("Error playing audio:", e));
      });
    } else {
      toast({
        title: "Error",
        description: "Ada masalah dengan API audio.",
      });
    }
  };

  const playDeb = async () => {
    setBtn(true);
    let maks = 1;
    while (maks > 0) {
      // ai 1
      await AiBattle({
        id: 1,
        message:
          "halo bisa diceritakan masalahnya kenapa ekonomi kelas menengah katanya akan hilang ?",
        voice_id: "9p9SE48FlAiFkK5sCRly",
      });

      // ai 2
      await AiBattle({
        id: 2,
        message:
          "Kelas menengah memang mengalami penurunan jumlah dan proporsi, namun tidak akan hilang",
        voice_id: "DbeLn5JcjpcjkQwbbwp2",
      });

      maks--;
    }
    setBtn(false);
  };
  return (
    <div className="mx-auto flex relative items-center justify-center h-screen">
      <div className="grid grid-cols-12 min-h-60">
        <div className="col-span-12 md:col-span-5 xl:col-span-5 md:flex md:items-start md:justify-center">
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20 ">
              <Image
                alt="ai"
                src="/ai.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-full border p-2"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {Array.from({ length: 8 }).map((_, index) => (
                <Circle
                  key={index}
                  isActive={isActive?.id === 1 && isActive?.active}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 xl:col-span-2 md:flex md:items-center md:justify-center">
          <div className="xl:h-full xl:w-1 h-1 w-full rounded-xs bg-white"></div>
        </div>
        <div className="col-span-12 md:col-span-5 xl:col-span-5 md:flex md:items-end md:justify-center">
          <div className="flex items-center gap-5">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {Array.from({ length: 8 }).map((_, index) => (
                <Circle
                  key={index}
                  isActive={isActive?.id === 2 && isActive?.active}
                />
              ))}
            </div>
            <div className="relative h-20 w-20 ">
              <Image
                alt="ai"
                src="/ai.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-full border p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 z-10 mt-10 justify-center w-full flex gap-10 items-center">
        <Button
          variant="outline"
          disabled={btn}
          className={`${
            btn ? "cursor-not-allowed" : "cursor-pointer"
          } rounded-sm font-bold hover:bg-gray-200 shadow-lg`}
          onClick={playDeb}
        >
          {btn ? "Listening Podcast" : "Start Podcast"}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
