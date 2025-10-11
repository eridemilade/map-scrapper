import { GoogleGenAI, Type } from "@google/genai";
import type { BusinessInfo } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const businessSchema = {
  type: Type.OBJECT,
  properties: {
    name: {
      type: Type.STRING,
      description: "The full name of the business.",
    },
    address: {
      type: Type.STRING,
      description: "The complete physical address of the business.",
    },
    phone: {
      type: Type.STRING,
      description: "The primary contact phone number of the business.",
    },
    category: {
      type: Type.STRING,
      description: "The main category of the business (e.g., 'Restaurant', 'Cafe', 'Bookstore').",
    },
    summary: {
      type: Type.STRING,
      description: "A brief, one-sentence summary of the business.",
    },
    website: {
      type: Type.STRING,
      description: "The official website URL of the business.",
    },
    rating: {
      type: Type.NUMBER,
      description: "The average user rating, on a scale of 1 to 5. Can have decimals.",
    },
    reviewCount: {
      type: Type.NUMBER,
      description: "The total number of user reviews for the business.",
    },
    openingHours: {
      type: Type.STRING,
      description: "The business's opening hours (e.g., 'Mon-Fri 9:00 AM - 6:00 PM').",
    },
  },
  required: ["name"],
};

export const fetchBusinessInfo = async (query: string): Promise<BusinessInfo[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Find business information based on the following query: "${query}". Return up to 10 relevant results with as much detail as possible, including name, address, phone, category, summary, website, rating, review count, and opening hours.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: businessSchema,
        },
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
      return [];
    }
    const parsedData = JSON.parse(jsonText);
    return parsedData as BusinessInfo[];

  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    throw new Error("Failed to parse business information from AI response.");
  }
};
