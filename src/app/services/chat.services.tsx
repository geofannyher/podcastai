import axios from "axios";
export interface chatScriptI {
  star: string;
  model: string;
  id: string;
  chat_limit: string;
  is_rag: string;
  message: string;
  temperature: string;
}
export const chatScript = async ({
  star,
  model,
  id,
  chat_limit,
  is_rag,
  message,
  temperature,
}: chatScriptI) => {
  try {
    const response = await axios.post(`https://chatx-api.hadiwijaya.co/chat`, {
      star,
      model,
      id,
      chat_limit,
      is_rag,
      message,
      temperature,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const resetChat = async ({ id, star }: { id: string; star: string }) => {
  try {
    const response = await axios.post(`https://chatx-api.hadiwijaya.co/reset`, {
      star,
      id,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const textToSpeech = async ({
  message,
  voice_id,
}: {
  message: string;
  voice_id: string;
}) => {
  const response = await axios.post("https://speech-api.hadiwijaya.co/tts", {
    voice_id,
    message,
  });
  const responseObject = response.data[0];
  return responseObject;
};
