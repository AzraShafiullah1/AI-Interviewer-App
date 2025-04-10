const { 
    GoogleGenerativeAI,
    HarmCategory, 
    HarmBlockThreshold,
   } = require("@google/generative-ai");
const fs = require("fs");
const mime = require("mime-types");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: "text/plain",
  category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  threadId: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,

};


  export const chatSession = model.startChat({
    generationConfig,
    safetySettings,
  });

