# 🕸️ Week 3 — Software Engineering w/ APIs & Dynamic Data

Build dynamic web applications that connect to **real-world data** using modern JavaScript, APIs, and reactive frameworks.  
You'll learn to fetch live data, handle asynchronous operations, and create responsive user interfaces — all the core skills of full-stack web development.

---

## 📦 What's Inside

- `index.html` — main project page with AlpineJS setup
- `api_example.html` — complete Studio Ghibli API example  
- `scripts/` — guided JavaScript files:
  - `@dogApi.js` — simple image fetching (Part 1)
  - `@pokeApi.js` — nested API calls (Part 2) 
  - `@customApi.js` — your choice from curated list (Part 3)
  - `scripts/advanced/` — 10 progressive lesson levels (see Advanced Levels section below)
- `SETUP.md` — detailed step-by-step instructions for each part

**Note:** Files with `@` prefix are the working versions you'll complete. Answer keys are in separate branches.

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
2️⃣ Add that URL to `axios.get()` in `scripts/@dogApi.js`  
3️⃣ Log the data and locate `message`  
4️⃣ Render those images on the page  
5️⃣ Test: Change `/3` to `/6` — see what happens!

### 🎮 Part 2 — PokéAPI
1️⃣ Open https://pokeapi.co/api/v2/pokemon?limit=3  
2️⃣ Identify structure and nested URLs  
3️⃣ Fetch details and render names + images in `scripts/@pokeApi.js`
4️⃣ Discuss: Why do we need loops?

### 🌍 Part 3 — Your Own API
1️⃣ Choose one from the API list below  
2️⃣ Inspect structure → choose fields  
3️⃣ Fetch and render meaningful data in `scripts/@customApi.js`
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
## 🧠 Beginner-Friendly Visual APIs

These APIs work **without keys** and are perfect for learning to make API calls that return images, text, or interesting structured data.




## 🧩 API Explorer Project — Verified Endpoints & Ideas

| **API** | **Description** | **Example Endpoint(s)** | **Student Input / Interaction** | **What to Use / Explore from Response** |
|:---|:---|:---|:---|:---|
| 🐶 [Dog API](https://dog.ceo/dog-api/) | Returns random dog images or by breed. | 1️⃣ `https://dog.ceo/api/breeds/image/random` <br>2️⃣ `https://dog.ceo/api/breed/husky/images/random` <br>3️⃣ `https://dog.ceo/api/breeds/list/all` | Let students: <br>– Select or type a breed (use list endpoint). <br>– Request multiple images: `/random/3`. | – `message`: image URL(s) <br>– Count how many images returned <br>– Display breed name as title. |
| ⚡ [PokéAPI](https://pokeapi.co/) | Pokémon data including name, types, abilities, sprites, and stats. | 1️⃣ `https://pokeapi.co/api/v2/pokemon/pikachu` <br>2️⃣ `https://pokeapi.co/api/v2/pokemon/25` <br>3️⃣ `https://pokeapi.co/api/v2/type/electric` | Input Pokémon name or ID.<br>Let them toggle between text input or dropdown.<br>Extra challenge: fetch multiple Pokémon and compare stats. | – `name` <br>– `sprites.front_default`, `sprites.back_default`, `sprites.other["official-artwork"].front_default` <br>– `types[].type.name` <br>– `stats[].base_stat` → show as table or bar chart <br>– `abilities[].ability.name` |
| 🐱 [Cat API](https://thecatapi.com/) | Random cat images and breed info. | 1️⃣ `https://api.thecatapi.com/v1/images/search` <br>2️⃣ `https://api.thecatapi.com/v1/images/search?limit=3` <br>3️⃣ `https://api.thecatapi.com/v1/breeds` | Optional: let user choose `limit` (number of cats) or select a `breed_id` from list. | – `[0].url` → image <br>– `[0].breeds[0].name` + `temperament` (if available) <br>– Students can count words in temperament string or group by origin. |
| 🎬 [Studio Ghibli API](https://ghibliapi.vercel.app/) | Returns information about Studio Ghibli films, people, and locations. | 1️⃣ `https://ghibliapi.vercel.app/films` <br>2️⃣ `https://ghibliapi.vercel.app/films/{id}` <br>3️⃣ `https://ghibliapi.vercel.app/people` | Simple button click to get films. <br>Can fetch specific film by ID or browse all. | – `title`: film title <br>– `original_title`: original Japanese title <br>– `description`: film synopsis <br>– `director`: director name <br>– `producer`: producer name <br>– `release_date`: year released <br>– `running_time`: duration in minutes <br>– `rt_score`: Rotten Tomatoes score <br>– `image`: poster image URL <br>– `movie_banner`: banner image URL |
| 🖼️ [Art Institute of Chicago](https://api.artic.edu/docs/) | Public art data with titles, artist info, and IIIF images. | 1️⃣ `https://api.artic.edu/api/v1/artworks` <br>2️⃣ `https://api.artic.edu/api/v1/artworks/129884` <br>3️⃣ `https://api.artic.edu/api/v1/artworks/search?q=chicago` | Let user: <br>– Enter keyword (e.g. “sunflower”). <br>– Or choose from a few artwork IDs. | – `data[].title`, `artist_display`, `date_display`, `medium_display` <br>– Construct image URL: `https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg` <br>– Compare artist count, or filter by date. |
| 🎵 [Lyrics.ovh](https://lyricsovh.docs.apiary.io/) | Fetch lyrics by artist and song title. | 1️⃣ `https://api.lyrics.ovh/v1/Adele/Hello` <br>2️⃣ `https://api.lyrics.ovh/v1/Drake/Gods%20Plan` | Form with two fields: Artist + Song Title.<br>Show lyrics text in scrollable box. | – `lyrics` (multiline string) <br>– Count lines or word frequency <br>– Highlight user-typed word in lyrics. |
| 🍫 [Open Food Facts](https://world.openfoodfacts.org/data) | Product and nutrition data by barcode. | 1️⃣ `https://world.openfoodfacts.net/api/v2/product/2840058987` <br>2️⃣ `https://world.openfoodfacts.net/api/v2/product/737628064502` | Input or select barcode. <br>Compare 2 products (e.g., candy vs cereal). | – `product.product_name` <br>– `product.brands` <br>– `product.nutrition_grades_tags[0]` <br>– `product.nutriments.sugars_100g` etc. <br>– `product.selected_images.front.display.en` (image). |


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
## 🧱 Add Your Week 3 Project to Your Portfolio

You now have another live project 🎉
Add a new project card to the portfolio page you created in Week 1.

Open your Week 1 repo and find index.html.

Duplicate one of your existing cards and update the details:


``` html
<h1 class="text-2xl font-bold text-purple-600">API & Dynamic Data</h1>
<p class="mt-2 text-gray-600">Week 3 Project — Fetching and displaying live data</p>
<a
  href="https://YOUR-USERNAME.github.io/week-3-software-engineering-apis"
  target="_blank"
  class="mt-4 inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
>
  View Project
</a>
```

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

## 🚀 Advanced Levels (10 Progressive Lessons)

Ready to go deeper? The `scripts/advanced/` folder contains 10 progressive lessons that build on each other, teaching you advanced API concepts step by step.

### 📚 What You'll Learn

Each level introduces 1-2 new concepts while building on previous lessons:

| Level | Concepts | File Location |
|-------|----------|---------------|
| **1** | Basic API calls, dot notation, array mapping | `scripts/advanced/1/@dogApi.js` |
| **2** | Nested objects, conditional checks | `scripts/advanced/2/@catApi.js` |
| **3** | Multiple properties, complex templates | `scripts/advanced/3/@ghibliApi.js` |
| **4** | User input (prompt), string methods | `scripts/advanced/4/@dogApiByName.js` |
| **5** | Multiple API calls, Promise.all() | `scripts/advanced/5/@pokeApi.js` |
| **6** | Complex nested data, calculations | `scripts/advanced/6/@pokeApiByName.js` |
| **7** | Optional chaining (?.), fallback values | `scripts/advanced/7/@nutritionApi.js` |
| **8** | Multiple inputs, URL encoding, error handling | `scripts/advanced/8/@lyricsApi.js` |
| **9** | Type checking, URL building, advanced patterns | `scripts/advanced/9/@artInstituteApi.js` |
| **10** | Multi-API mashups, creative projects | `scripts/advanced/10/@customApi.js` |

### 🎯 How to Use Advanced Levels

1. **Complete Parts 1-3 first** - Make sure you understand the basics
2. **Start with Level 1** - Open `scripts/advanced/1/@dogApi.js`
3. **Read the header comments** - Each file explains what you'll learn
4. **Complete the TODOs** - Fill in the missing code pieces
5. **Test your work** - Update `index.html` to reference your script
6. **Progress sequentially** - Each level builds on the previous one

### 📖 Detailed Guide

See `scripts/advanced/README.md` for a complete overview of all 10 levels, learning objectives, and tips for success.

**Note:** These lessons are designed for students who have completed the main 3 parts and want to dive deeper into API concepts. Each level includes detailed comments explaining concepts and step-by-step TODOs to guide your learning.

---

###### 🧑‍🏫 Credits  
###### Developed for the **DPI Discover Computing Program**  
###### Curriculum by Aaron Douglas LLC
