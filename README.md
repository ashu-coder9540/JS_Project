# Weather App ☀️🌧️

A beautiful, responsive weather application built with HTML, CSS, and JavaScript.  
It uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch real-time weather data by city name.

---

## 🚀 Features

- Dynamic gradient backgrounds based on weather condition
- Glassmorphism UI design
- Responsive and mobile-friendly
- Animated loading spinner
- Error handling and smooth transitions
- Location pin icon next to city name

---

## ⚙️ Setup

1️⃣ Clone this repository:
```bash
git clone https://github.com/your-username/weather-app.git
2️⃣ Open the folder:

bash
Copy
Edit
cd weather-app
3️⃣ Open index.html in your browser, or run with a local live server (e.g., VS Code Live Server extension).

🗺️ API Key
Replace const apiKey = "YOUR_API_KEY"; in script.js with your own API key from OpenWeatherMap.

💡 Improvements
Add forecast (multi-day)

Add sunrise/sunset times

Support for different units (°C/°F)

Dark mode toggle

📸 Screenshots

📝 License
This project is open-source and free to use.

✨ Made with ❤️ by [Your Name]
yaml
Copy
Edit

---

# ✅ 2️⃣ Add `.gitignore`

Create a file named `.gitignore` in your project root.  
**If you're not using Node or build tools**, it can be minimal:  

Ignore Mac system files
.DS_Store

Ignore node_modules (if you use npm later)
node_modules/

Ignore log files
*.log

yaml
Copy
Edit

---

# ✅ 3️⃣ Setup **GitHub Pages** to make your app live 🌍

### ⭐ Steps

1️⃣ Push your project to GitHub first (as explained before).  

2️⃣ Go to your repo on GitHub → **Settings** → **Pages** (left sidebar).

3️⃣ Under "Branch", select `main`, then `/ (root)`, and click **Save**.

4️⃣ GitHub will give you a live link, like:  
https://your-username.github.io/weather-app/

yaml
Copy
Edit

✅ Your app will be live and anyone can access it!

---

# 🚀 **Final checklist before pushing**

✅ Add `README.md` (copy above and save in your project).  
✅ Add `.gitignore`.  
✅ Commit:

```bash
git add .
git commit -m "Add README and .gitignore for GitHub setup"
git push
