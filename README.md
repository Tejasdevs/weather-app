Overview

Weather App lets users quickly see current weather conditions for any city. It pulls real‐time weather data from a public API, displays temperature, humidity, wind speed, and provides a search interface. The UI is built to be simple, clean, and mobile‐friendly.



Features

Search by city name to get current weather.

Display of temperature (°C / °F), humidity, wind speed, atmospheric conditions (sunny, cloudy, etc.).

Responsive design – works across desktop and mobile devices.

Graceful error handling (e.g. invalid city names or network errors).

(Optional) Auto‐detect user’s location and show local weather.




Demo

Visit: https://weather-app-tejas.vercel.app/



Technologies Used

Frontend: HTML, CSS, JavaScript (or React/Vue/Angular if applicable)

API: OpenWeatherMap
 or any public weather API

Hosting / Deployment: Vercel

Others: (Add any additional libraries, frameworks, or tools, e.g. Axios, Tailwind CSS, Bootstrap, etc.)



Installation

If you want to run the app locally:

Clone this repo:

git clone https://github.com/<your‐username>/weather‐app
Go into the directory:
cd weather-app
Install dependencies:
npm install
or
yarn install
Set up environment variables (see Configuration
).
Usage
After installation:
npm run dev
or
yarn dev
Open your browser and navigate to http://localhost:3000 (or whatever port your setup uses) to view the app.



Configuration

Create a .env file (if needed) in the root directory with the following:
REACT_APP_WEATHER_API_KEY=your_api_key_here
Or according to howyour project is set up (e.g. NEXT_PUBLIC_..., VITE_... etc.)



Deployment

This project is deployed on Vercel. To redeploy:
Push your changes to your GitHub (or GitLab) repository.
Connect the repository to Vercel (if not already).
Vercel automatically builds and deploys on push to the main branch.
Contributing
Contributions are welcome! If you find any bugs or want to add features:
Fork the repo
Create a new branch: git checkout -b feature/YourFeature
Make your changes & commit: git commit -m "Add some feature"
Push to your branch: git push origin feature/YourFeature
Open a Pull Request
