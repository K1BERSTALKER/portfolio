
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askPortfolioAssistant(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are an AI assistant for Alex Dev's personal portfolio. 
        Alex is a Senior Frontend Engineer specialized in React, TypeScript, and AI integrations.
        Use a professional yet friendly tone. 
        Current Context:
        - Skills: React, Next.js, TS, Tailwind, Node, Gemini API.
        - Experience: TechNova Solutions (Senior Architect), DesignLink (Fullstack).
        - Interests: UX design, clean code, performance optimization.
        Keep answers concise and informative.`,
        temperature: 0.7,
        topP: 0.8
      }
    });
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently sleeping. Please try again later!";
  }
}
