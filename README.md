# Live AI Cost Demonstration

This repository contains a simple Node.js application for a live demonstration of AI-powered test generation and its associated costs.

## Instructions for the Live Exercise

Follow these steps when instructed by the presenter.

### 1. Setup Your Environment

- **Clone this repository** to your local machine.
  ```bash
  git clone https://gitlab.com/tyson-foods/2211-gitlab-saas/demo/live-demo-app.git
  cd live-demo-app
  ```
- **Open the `live-demo-app` folder** in your code editor (e.g., VS Code).
- **Open a terminal** in the `live-demo-app` directory and install the necessary dependencies:
  ```bash
  npm install
  ```

### 2. Configure Your AI Assistant

- Ensure you have the `continue.dev` extension installed and configured.
- **Important:** Make sure you are using the dedicated API key provided by the presenter for this exercise. The model should be set to **`gpt-4.1-mini`** (or as directed by the presenter).

### 3. Generate Unit Tests

- **Open the `index.js` file**.
- **Highlight the entire content** of the file.
- **Open the `continue.dev` chat window** and use the following **exact prompt**:

  ```
  Using Jest and Supertest, write a complete unit test suite for the highlighted Express.js application. The tests should:
  - Confirm the `/` endpoint returns a 200 status code.
  - Ensure the response contains the message "Hello from Tyson Foods!"
  ```

### 4. Check Usage on LiteLLM Dashboard

- After generating your tests, go to the official [Tyson LiteLLM Dashboard](https://litellm.tyson.com/ui/).
- Open the **Usage** tab.
- Review the tokens consumed for this task to understand your AI usage.

### 5. Observe the Results

Once you've run the prompt and checked your usage, the presenter will discuss the real-time cost analysis and overall impact.

## Notes

- Keep your prompts clear and concise to optimize for cost.
- The demo will track your token consumption live via the LiteLLM dashboard.
- Have fun and watch how well AI can accelerate your dev workflow!