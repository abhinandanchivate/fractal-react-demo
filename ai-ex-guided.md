---

## ⚙️ Overview

**Goal:** Build a simple AI screen that:

1. Accepts a user prompt.
2. Calls the **ChatGPT API** (OpenAI API).
3. Displays **3 alternate responses** (creative, balanced, factual).

---

## 🏗️ Folder Structure

```
src/
├── components/
│   ├── AIAssistant.jsx
│   └── ChatBubble.jsx
├── utils/
│   └── openaiClient.js
├── App.jsx
└── index.js
```

---

## 📦 Step 1: Install dependencies

```bash
npm install react react-dom axios antd
```

---

## 🔑 Step 2: Create `utils/openaiClient.js`

```js
// utils/openaiClient.js
import axios from "axios";

const openaiClient = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  },
});

export default openaiClient;
```

> ⚠️ Add your API key in a `.env` file:

```bash
VITE_OPENAI_API_KEY=sk-xxxx
```

---

## 💬 Step 3: Create `components/ChatBubble.jsx`

```jsx
// components/ChatBubble.jsx
import React from "react";
import { Card } from "antd";

const ChatBubble = ({ role, message }) => {
  const isUser = role === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "1rem",
      }}
    >
      <Card
        style={{
          backgroundColor: isUser ? "#e0f7fa" : "#f5f5f5",
          borderRadius: "10px",
          maxWidth: "75%",
        }}
      >
        <p style={{ margin: 0, color: "#333" }}>{message}</p>
      </Card>
    </div>
  );
};

export default ChatBubble;
```

---

## 🧠 Step 4: Create `components/AIAssistant.jsx`

```jsx
// components/AIAssistant.jsx
import React, { useState } from "react";
import { Input, Button, Spin, Row, Col, Typography } from "antd";
import openaiClient from "../utils/openaiClient";
import ChatBubble from "./ChatBubble";

const { Title } = Typography;

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      // Generate 3 variations
      const response = await openaiClient.post("", {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an AI assistant providing concise answers.",
          },
          { role: "user", content: input },
        ],
        n: 3, // 3 alternate responses
        max_tokens: 150,
        temperature: 0.8,
      });

      const variants = response.data.choices.map((c, i) => ({
        id: i,
        message: c.message.content,
      }));

      setResponses(variants);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "2rem" }}>
      <Title level={3}>🤖 AI Assistant (3 Variations)</Title>

      <Row gutter={8}>
        <Col flex="auto">
          <Input
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onPressEnter={handleSubmit}
          />
        </Col>
        <Col>
          <Button type="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Col>
      </Row>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ marginTop: "2rem" }}>
          {responses.map((res) => (
            <ChatBubble key={res.id} role="assistant" message={res.message} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
```

---

## 🪄 Step 5: Create `App.jsx`

```jsx
// App.jsx
import React from "react";
import AIAssistant from "./components/AIAssistant";

const App = () => {
  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      <AIAssistant />
    </div>
  );
};

export default App;
```

---

## 🚀 Step 6: Run your project

```bash
npm run dev
```

---

## ✅ Output Preview

**Screen Layout:**

```
-----------------------------------------
| 🤖 AI Assistant (3 Variations)         |
| [ Ask me anything ...        ] [Send] |
-----------------------------------------
| 💬 Variant 1: "Sure! Here’s a summary…"|
| 💬 Variant 2: "Okay, let’s break this…"|
| 💬 Variant 3: "The key idea is…"       |
-----------------------------------------
```

**Behavior:**

- You type a query like:
  _“Explain quantum computing in simple terms.”_
- The screen shows **3 different answers** from ChatGPT — concise, creative, and explanatory.

---
