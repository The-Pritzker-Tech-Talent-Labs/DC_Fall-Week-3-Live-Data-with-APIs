# 🕸️ Week 3 — Software Engineering w/ APIs & Dynamic Data

Build dynamic web applications that connect to **real-world data** using modern JavaScript, APIs, and reactive frameworks.  
You'll learn to fetch live data, handle asynchronous operations, and create responsive user interfaces — all the core skills of full-stack web development.

---

## 📦 What's Inside

- `index.html` — main project page with AlpineJS setup
- `api_example.html` — complete Studio Ghibli API example  
- `scripts/` — three guided JavaScript files:
  - `dogApi.js` — simple image fetching (Part 1)
  - `pokeApi.js` — nested API calls (Part 2) 
  - `customApi.js` — your choice from curated list (Part 3)
- `SETUP.md` — detailed step-by-step instructions for each part

---

## 🚀 Quick Start

1. **Fork this repo** and open in **GitHub Codespace**  
2. **Start Live Server:** `npx live-server`  
3. **Follow the scripts:** Complete TODO steps in each `.js` file  
4. **🔥 COMMIT OFTEN:** Save your progress after each working feature

### 💾 Commit & Deploy Workflow
```bash
# After completing each part:
git add .
git commit -m "Complete Dog API (Part 1)"
git push

# Deploy via GitHub Pages (same as Week 1):
# Settings → Pages → Deploy from branch → main
```

---

## 🧩 Lesson Overview

| Part | API | Script File | Focus |
|------|-----|-------------|--------|
| 🐕 **Part 1** | Dog API | `dogApi.js` | Make your first API call and show images |
| 🎮 **Part 2** | PokéAPI | `pokeApi.js` | Work with different data, follow TODO steps |  
| 🌍 **Part 3** | Your Choice | `customApi.js` | Pick your favorite API and customize it |

Complete them **in order** — each builds on the previous concepts. Commit after each working part!

---

## 📋 Instructions

Follow these guided steps to connect your web page to real API data:

### 🐶 Part 1 — Dog API
1️⃣ Open https://dog.ceo/api/breeds/image/random/3 and inspect JSON  
2️⃣ Add that URL to `axios.get()` in `scripts/dogApi.js`  
3️⃣ Log the data and locate `message`  
4️⃣ Render those images on the page  
5️⃣ Test: Change `/3` to `/6` — see what happens!

### 🎮 Part 2 — PokéAPI
1️⃣ Open https://pokeapi.co/api/v2/pokemon?limit=3  
2️⃣ Identify structure and nested URLs  
3️⃣ Fetch details and render names + images  
4️⃣ Discuss: Why do we need loops?

### 🌍 Part 3 — Your Own API
1️⃣ Choose one from the API list below  
2️⃣ Inspect structure → choose fields  
3️⃣ Fetch and render meaningful data  
4️⃣ Commit + deploy when done

---

## 🎯 Project Descriptions

### 🐕 Mini Project (Part 1): Dog API Basics  
**Goal:** Fetch and display random dog images using simple API calls.

**You'll learn:**
- Making your first `axios.get()` API call  
- Understanding JSON response structure  
- Rendering dynamic content to the DOM  
- Basic error handling with try/catch

### 🎮 Main Project (Part 2): PokéAPI Challenge  
**Goal:** Fetch a list of Pokémon and display their names.

**You'll learn:**
- Working with different API response formats  
- Basic loops to display multiple items  
- Following TODO steps to complete code  
- Building on Part 1 concepts

### 🌍 Your Project (Part 3): Custom API Integration  
**Goal:** Choose your own API adventure and create something unique.

**You'll demonstrate:**
- Following the same patterns from Parts 1 & 2  
- Choosing which data to display from an API  
- Customizing the look of your project  
- Completing a project independently

---

## 🔧 Technical Building Blocks

**JavaScript You'll Use**
- `axios.get()` — get data from an API  
- `async/await` — wait for data to load  
- `console.log()` — see what data looks like  
- `try/catch` — handle errors when APIs don't work

**AlpineJS (Makes Pages Interactive)**  
- `@click` — run code when button is clicked  
- `x-text` — show changing text on page

**Simple Concepts**  
- **API** — a URL that gives you data  
- **JSON** — the format APIs use to send data  
- **Rendering** — showing the data on your webpage

---

## 🌐 Curated API List (Part 3)

Choose one for your custom project:

| Category | API | Example Endpoint |
|----------|-----|------------------|
| 🐕 Animals | Dog API | `/api/breeds/image/random` |
| 🎮 Pokémon | PokéAPI | `/api/v2/pokemon` |
| 💬 Quotes | Quotable | `/quotes` |
| 🌎 Countries | REST Countries | `/v3.1/all` |
| 😺 Fun | Cat Fact API | `/fact` |
| 🎬 Movies | Studio Ghibli API | `/films` |

**Tips for exploring:**
- Visit the API endpoint in your browser first  
- Look for `name`, `title`, `image`, or `url` fields  
- Start simple — display 1-3 pieces of data per item  
- Check if the API requires authentication (our list doesn't!)

---

## 🔗 Helpful References

**API Documentation**  
- [Dog API](https://dog.ceo/dog-api/) — simple image API  
- [PokéAPI](https://pokeapi.co/) — comprehensive Pokémon data  
- [REST Countries](https://restcountries.com/) — country information  
- [Quotable API](https://github.com/lukePeavey/quotable) — inspirational quotes

**JavaScript & Frameworks**  
- [Async/Await Guide](https://javascript.info/async-await) — essential for API work  
- [AlpineJS Docs](https://alpinejs.dev/) — lightweight reactive framework  
- [Axios Documentation](https://axios-http.com/docs/intro) — HTTP client library

---

## 💾 Commit & Deploy (Important!)

**When to Commit:**
- ✅ After Part 1 works (dog images display)  
- ✅ After Part 2 works (Pokémon list displays)  
- ✅ After Part 3 works (your custom API displays)  
- ✅ After any styling or improvements

**Deployment Steps:**
1. Push all commits: `git push`  
2. Go to **Settings → Pages**  
3. Set **Source = Deploy from a branch**  
4. Choose **Branch = `main`**, **Folder = `/ (root)`**  
5. Wait ~30s for your live URL

> **💡 Pro Tip:** Commit early and often! It's better to have many small commits than lose work.

---

## 🛠️ Troubleshooting

**Common Problems:**
- **Nothing shows up?** Press F12 and look for red error messages  
- **API not working?** Try a different one from our list  
- **Don't know what data looks like?** Add `console.log(res.data)` and check F12  
- **Images not showing?** Make sure the image URL is correct

**Quick Fixes:**  
- **Page looks broken?** Check that all script tags are in the HTML  
- **Button doesn't work?** Make sure your script file is linked  
- **API call fails?** Make sure you have `await` before `axios.get()`

**Git Issues:**  
- **Can't push?** Try `git pull` first to sync with remote  
- **Merge conflicts?** Use VS Code's built-in merge tool  
- **Forgot to commit?** No problem — commit now and keep going

---

## 🤖 AI Assist Prompts

- "What does this data look like? `[paste what you see in console.log]`"  
- "My API call isn't working. Here's my code: `[paste your axios line]`"  
- "How do I show this data on my webpage?"  
- "Why am I getting an error?"

> Always **test** AI suggestions one step at a time and make sure you understand what the code does.

---

## ✅ Submission Checklist

- [ ] Dog API (Part 1) shows dog images  
- [ ] PokéAPI (Part 2) shows Pokémon names  
- [ ] Your chosen API (Part 3) shows some kind of data  
- [ ] All changes are committed and pushed to GitHub  
- [ ] Site is live on GitHub Pages  
- [ ] Everything works when you click the refresh button

---

**🌟 Next Steps:** Try changing the colors, adding more APIs to the same page, or showing different data from the same API!

---

###### 🧑‍🏫 Credits  
###### Developed for the **DPI Discover Computing Program**  
###### Curriculum by Aaron Douglas LLC
