import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface GeneratedContent {
  topic: string;
  article: string;
  linkedinPost: string;
  summary: string;
}

export const generateContent = async (topic: string, tone: string = "Professional"): Promise<GeneratedContent> => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
    Generate three types of content based on the following topic: "${topic}".
    
    The tone of all content should be: ${tone}.
    
    1. A detailed and informative article.
    2. An engaging LinkedIn post with relevant hashtags.
    3. A concise summary of the topic.

    Return the response in the following JSON format ONLY:
    {
      "article": "...",
      "linkedinPost": "...",
      "summary": "..."
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Attempt to parse JSON from the response
    // Sometimes Gemini wraps JSON in markdown blocks
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : text;
    
    const parsedData = JSON.parse(jsonString);

    return {
      topic,
      article: parsedData.article,
      linkedinPost: parsedData.linkedinPost,
      summary: parsedData.summary,
    };
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content from AI model.");
  }
};
