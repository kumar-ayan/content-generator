import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface GeneratedContent {
  topic: string;
  variations: {
    professional: string;
    storytelling: string;
    punchy: string;
  };
}

export const generateContent = async (topic: string, tone: string = "Professional"): Promise<GeneratedContent> => {
  const model = genAI.getGenerativeModel({ model: "gemma-4-31b-it" });

  const prompt = `
    You are an expert LinkedIn Content Strategist. Generate three distinct variations of a LinkedIn post based on the topic: "${topic}".
    
    The overall tone should be: ${tone}.
    
    Variation 1: Professional & Insightful
    - Start with a strong hook.
    - Provide 3-4 value-driven bullet points.
    - End with a thought-provoking question or call to action.
    - Include 3-5 relevant hashtags.

    Variation 2: Storytelling & Personal
    - Start with a personal narrative or relatable scenario.
    - Transition into the main lesson or insight.
    - Use a conversational yet professional tone.
    - End with a call to engagement.
    - Include 3-5 relevant hashtags.

    Variation 3: Punchy & Viral
    - Use short, impactful sentences.
    - High readability with lots of white space.
    - Focus on a single "aha!" moment or contrarian take.
    - End with a sharp call to action.
    - Include 2-3 relevant hashtags.

    Return the response in the following JSON format ONLY:
    {
      "professional": "...",
      "storytelling": "...",
      "punchy": "..."
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : text;

    const parsedData = JSON.parse(jsonString);

    return {
      topic,
      variations: {
        professional: parsedData.professional,
        storytelling: parsedData.storytelling,
        punchy: parsedData.punchy,
      },
    };
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content from AI model.");
  }
};
