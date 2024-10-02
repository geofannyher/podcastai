import axios from "axios";

export const chatScript = async ({
  star,
  model,
  id,
  chat_limit,
  is_rag,
  message,
  temperature,
}: any) => {
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

export const resetChat = async ({ id, star }: any) => {
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
