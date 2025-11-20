# Sales Widget Template

**Welcome!** This is a starter kit for creating interactive sales widgets for the Pico platform.

## 🚀 How to Start

### 1. Create Your Project

1.  Look at the top right of this page and click the green button **"Use this template"**.
2.  Choose **"Create a new repository"**.
3.  **Owner**: Select `HomeZeroTech`.
4.  **Repository name**: Give your widget a name (e.g., `solarconcept-choice-widget`, `german-prefunnel-widget`).
5.  Choose visibility **public**.
6.  Click **"Create repository"**.

### 2. Set Up "Live View" (GitHub Pages)

To see your widget working on the internet, you need to turn on a setting:

1.  In your new repository, click on the **Settings** tab (top menu).
2.  On the left sidebar, click **Pages**.
3.  Under **"Build and deployment"**, find **Branch**.
4.  Change "None" to **`main`**.
5.  Change the folder from "/ (root)" to **`/docs`**.
6.  Click **Save**.

_It might take a minute, but you will get a link like `https://homezerotech.github.io/your-widget-name/widget.js`. This is the file you will eventually share._

---

### 🤖 How to Build with AI

You will use an AI Agent to build your widget. You don't need to write code. Preferably use Antigravity IDE and Gemini which is part of our Google Workspace subscription.

### Step 1: Get the URL

1. Go to the GitHub repo page.
2. Click the Green **"Code"** button.
3. Make sure the **HTTPS** tab is underlined.
4. Click the **Copy icon** (the two squares) next to the URL.

### Step 2: "Clone" inside Antigravity

1. Open **Antigravity**.
2. On the "Welcome" page (or under the **File** menu), look for **Clone Repository**.
    > **Tip:** If you don't see it, press `F1`, type "Clone", and click **Git: Clone**.
3. A box will appear at the top. Paste the URL there and hit **Enter**.
4. It will ask _"Where do you want to save this?"_
    - Select your **Desktop** or **Documents** folder.
5. **Crucial Step:** A popup will likely appear asking to **Sign in to GitHub**.
    - Click **"Allow"** and follow the browser prompts. This connects your account.
6. Once done, a popup will ask _"Would you like to open the cloned repository?"_
    - Click **Open**.

### Step 3: Start coding

Give the AI Context

When you start a chat with your AI Agent, tell it:

> "I am using the Sales Widget Template. Please look at `instruction.md` to understand how to build and test this widget."

### Describe Your Idea

Simply tell the AI what you want to build.

### Test It

The AI will make the changes.

-   If you are using Antigravity, ask the AI to **"Run the test server"**. It will give you a link to preview your widget. If that doesn't work and you know how to use the terminal, you can run `npm run start`.
-   If you are just editing files, the AI will tell you when it's done.

### Step 4: Deploy the code

Once you are happy with the widget, you can deploy it by first committing the changes and then pushing them to GitHub. You can do this by clicking on the Source Control icon (the icon with the three dots and lines in between them) and then adding a commit message and clicking **"Commit"**. Then click on the **"Sync Changes"** button. This will push the changes to GitHub and deploys the widget code publically so that it can be used.

### Step 5: Embed on a website

Once you have deployed the widget, you can embed it on a website by adding the script and the piece of HTML to the website.
It should look like something like this, make sure the id matches the one in the script:

```html
<script
    defer
    src="https://homezerotech.github.io/your-widget-name/widget.js"
></script>
<div id="pico-widget-container"></div>
```

---

## 📂 For the AI Agent

**IMPORTANT:** If you are an AI Agent reading this, please strictly follow the technical guidelines in **[instruction.md](./instruction.md)**.
