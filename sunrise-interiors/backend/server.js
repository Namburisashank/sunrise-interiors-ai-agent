import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { VapiClient } from "@vapi-ai/server-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const vapi = new VapiClient({
  token: process.env.VAPI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.post("/call", async (req, res) => {
  try {
    const { phone } = req.body;

    console.log("Calling:", phone);

    const call = await vapi.calls.create({
      assistantId: process.env.VAPI_ASSISTANT_ID,
      phoneNumberId: process.env.PHONE_NUMBER_ID,
      customer: {
        number: phone,
      },
    });

    console.log(call);

    res.json({
      success: true,
      message: "Call Started Successfully!",
      call,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});