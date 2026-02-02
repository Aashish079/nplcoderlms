import { coursesTable } from '@/config/schema';
import { currentUser } from '@clerk/nextjs/server';
import {
  GoogleGenAI,
} from '@google/genai';
import { NextResponse } from 'next/server';
import { db } from '@/config/db';
import {v4 as uuidv4} from 'uuid';

const PROMPT = `Genrate Learning Course depends on following details. In which Make sure to add Course Name, Description,Course Banner Image Prompt (Create a modern, flat-style 2D digital illustration representing user Topic. Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools. Add symbolic elements related to user Course, like sticky notes, design components, and visual aids. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course) for Course Banner in 3d format Chapter Name, , Topic under each chapters , Duration for each chapters etc, in JSON format only

Schema:

{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",

"bannerImagePrompt": "string",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": [
          "string"
        ],
     
      }
    ]
  }
}

, User Input: `

export async function POST(req) {

    const formData = await req.json();
    const user = await currentUser();

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });
    const tools = [
        {
        googleSearch: {
        }
        },
    ];
    const config = {
        thinkingConfig: {
        thinkingLevel: 'HIGH',
        },
        tools,
    };
    const model = 'gemini-3-flash-preview';
    const contents = [
        {
        role: 'user',
        parts: [
            {
            text: PROMPT + JSON.stringify(formData),
            },
        ],
        },
    ];

    const response = await ai.models.generateContent({
        model,
        config,
        contents,
    });

    console.log(response.candidates[0].content.parts[0].text);
    const RawResp = response?.candidates[0]?.content?.parts[0]?.text;
    const RawJSON=RawResp.replace('```json','').replace('```','');
    const JSONResp=JSON.parse(RawJSON);
    const courseId = uuidv4();

    //   Save to Database
    const result = await db.insert(coursesTable).values({
        cid: courseId,
        name: formData.courseName,
        description: formData.description,
        noOfChapters: parseInt(formData.chapters),
        includeVideo: formData.includeVideo,
        level: formData.difficulty,
        category: formData.category,
        courseJson: JSONResp,
        userEmail: user?.primaryEmailAddress?.emailAddress
    })
    
    return NextResponse.json(JSONResp);
}