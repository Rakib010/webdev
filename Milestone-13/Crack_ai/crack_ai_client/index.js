require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// config
require("dotenv").config();
const port = process.env.PORT || 5000;

// ai
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { default: axios } = require("axios");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// middleware
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Ai test
app.get("/test-ai", async (req, res) => {
  //  const prompt = "Explain how AI works";
  const prompt = req.query?.prompt;
  if (!prompt) {
    res.send({ message: "please provide a prompt in query" });
    return;
  }
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  res.send({ answer: result.response.text() });
});

// make decision
app.get("/rumor-detector", async (req, res) => {
  const prompt = req.query?.prompt;
  if (!prompt) {
    res.send({ message: "please provide a prompt in query" });
    return;
  }

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "When i give you any text. you have to tell me the rumor parcentage of the text",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Okay. Tell me" }],
      },
      {
        role: "user",
        parts: [
          {
            text: "Bangladesh is secretly building a floating city in the Bay of Bengal powered entirely by solar energy and AI-driven technology!",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Rumor parcentege 99%" }],
      },
      {
        role: "user",
        parts: [
          {
            text: "human can fly",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Rumor parcentege 100%" }],
      },
      {
        role: "user",
        parts: [
          {
            text: "human eat rock",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Rumor parcentege 100%" }],
      },
    ],
  });
  let result = await chat.sendMessage(prompt);
  const answer = result.response.text();
  res.send({ rumorstatus: answer });
});

// generate json
app.get("/generate json", async (req, res) => {
  const prompt = req.query?.prompt;
  if (!prompt) {
    res.send({ message: "please provide a prompt in query" });
    return;
  }
  const FinalPrompt = `${prompt}. 
   generate a JSON schema:
   output= {'property': value}
   Return: Array<output>`;
  /* const FinalPrompt = `List a few popular cookie recipes using this JSON schema:
  Recipe = {'recipeName': string}
  Return: Array<Recipe>`; */
  const result = await model.generateContent(FinalPrompt);
  const output = result.response.text().slice(7, -3);
  const jsonData = JSON.parse(output);
  res.send(output);
});

// Image details 
app.get("/generate-details", async (req, res) => {
  const prompt = req.query?.prompt;
  if (!prompt) {
    res.send({ message: "please provide a prompt in query" });
    return;
  }

  const response = await axios.get(prompt, { responseType: "arraybuffer" });
  const responseData = {
    inlineData: {
      data: Buffer.from(response.data).toString("base64"),
      mimeType: "image/png",
    },
  };
  const result = await model.generateContent([
    "tell the detail of the image",
    responseData,
  ]);
  console.log(result.response.text());
  res.send({ detail: result.response.text() });
});

// clip 



app.get("/", (req, res) => {
  res.send({ mesg: "Let's Crac the power of AI" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
