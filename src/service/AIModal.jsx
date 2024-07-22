import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel PLan for Location: Las Vegas, for 3 days for Couple with a Cheap budget, Give me a Hotel options list with Hotel Name, Hotel Address, Price, Hotel Image url, geo coordinates, rating, descriptions and suggest itinerary with placeName , Place details, Place Image url, geo coordinates, ticket pricing, Time to travel each of the location for 3 days with each day plan withe best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotel_options": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$80 per night",\n      "image_url": "https://www.theD.com/images/hero-image-desktop.jpg",\n      "geo_coordinates": [36.1699, -115.1422],\n      "rating": 4.0,\n      "description": "A centrally located hotel on Fremont Street with a casino, restaurants, and a pool."\n    },\n    {\n      "name": "Circus Circus Hotel & Casino",\n      "address": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$40-$60 per night",\n      "image_url": "https://www.circuscircus.com/content/dam/caesars/circus-circus/images/hero-images/circus-circus-hero-desktop.jpg",\n      "geo_coordinates": [36.1207, -115.1684],\n      "rating": 3.5,\n      "description": "A classic Las Vegas hotel known for its circus theme and budget-friendly rates."\n    },\n    {\n      "name": "Golden Nugget Las Vegas",\n      "address": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$70-$100 per night",\n      "image_url": "https://www.goldennugget.com/images/hero-image-desktop.jpg",\n      "geo_coordinates": [36.1699, -115.1422],\n      "rating": 4.5,\n      "description": "A luxurious hotel with a casino, restaurants, and a world-famous shark tank."\n    },\n    {\n      "name": "The Orleans Hotel & Casino",\n      "address": "4500 W Tropicana Ave, Las Vegas, NV 89103",\n      "price": "$50-$80 per night",\n      "image_url": "https://www.orleanscasino.com/content/dam/caesars/orleans/images/hero-images/orleans-hero-desktop.jpg",\n      "geo_coordinates": [36.0930, -115.1976],\n      "rating": 3.0,\n      "description": "A family-friendly hotel with a casino, restaurants, and a bowling alley."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "title": "Fremont Street Experience",\n      "description": "Explore the lively Fremont Street Experience, a pedestrian mall with live music, street performers, and the famous Fremont Street Experience canopy.",\n      "places": [\n        {\n          "name": "Fremont Street Experience",\n          "details": "A pedestrian mall with live music, street performers, and the famous Fremont Street Experience canopy.",\n          "image_url": "https://www.fremontstreetexperience.com/media/images/hero_desktop/hero-desktop-2022.jpg",\n          "geo_coordinates": [36.1699, -115.1422],\n          "ticket_pricing": "Free",\n          "time_to_travel": "3 hours"\n        },\n        {\n          "name": "The Golden Nugget",\n          "details": "A luxurious hotel with a casino, restaurants, and a world-famous shark tank.",\n          "image_url": "https://www.goldennugget.com/images/hero-image-desktop.jpg",\n          "geo_coordinates": [36.1699, -115.1422],\n          "ticket_pricing": "Free to enter, optional charges for attractions",\n          "time_to_travel": "2 hours"\n        }\n      ],\n      "best_time_to_visit": "Evening for the best atmosphere"\n    },\n    {\n      "day": 2,\n      "title": "Las Vegas Strip",\n      "description": "Experience the iconic Las Vegas Strip, a stretch of Las Vegas Boulevard lined with world-class casinos, hotels, and entertainment.",\n      "places": [\n        {\n          "name": "Bellagio Fountains",\n          "details": "World-famous synchronized water and light show.",\n          "image_url": "https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/bellagio-fountains-1024x682-01.jpg",\n          "geo_coordinates": [36.1181, -115.1728],\n          "ticket_pricing": "Free",\n          "time_to_travel": "1 hour"\n        },\n        {\n          "name": "The LINQ Promenade",\n          "details": "An open-air shopping and dining promenade with the High Roller observation wheel.",\n          "image_url": "https://www.caesars.com/content/dam/caesars/linq/images/hero-images/linq-hero-desktop.jpg",\n          "geo_coordinates": [36.1212, -115.1716],\n          "ticket_pricing": "High Roller tickets start at $25",\n          "time_to_travel": "2 hours"\n        },\n        {\n          "name": "The Venetian and The Palazzo",\n          "details": "Grand hotels with a Venetian-themed atmosphere, including canals and gondolas.",\n          "image_url": "https://www.venetian.com/content/dam/mgmresorts/venetian/images/venetian-hero-desktop.jpg",\n          "geo_coordinates": [36.1243, -115.1697],\n          "ticket_pricing": "Free to enter, optional charges for attractions",\n          "time_to_travel": "2 hours"\n        }\n      ],\n      "best_time_to_visit": "Late afternoon for the Bellagio Fountains show"\n    },\n    {\n      "day": 3,\n      "title": "Off the Strip",\n      "description": "Explore attractions outside of the Strip, including natural wonders and historical sites.",\n      "places": [\n        {\n          "name": "Red Rock Canyon National Conservation Area",\n          "details": "A scenic desert landscape with hiking trails, rock formations, and panoramic views.",\n          "image_url": "https://www.nps.gov/redr/planyourvisit/images/RedRock-web.jpg",\n          "geo_coordinates": [36.1746, -115.3870],\n          "ticket_pricing": "Entrance fee: $15 per vehicle",\n          "time_to_travel": "4 hours"\n        },\n        {\n          "name": "Hoover Dam",\n          "details": "A historic dam on the Colorado River, offering tours and scenic views.",\n          "image_url": "https://www.nps.gov/hdam/planyourvisit/images/20180512_114242-HooverDam_Web.jpg",\n          "geo_coordinates": [36.0003, -114.8828],\n          "ticket_pricing": "Tour prices vary, reservations recommended",\n          "time_to_travel": "3 hours"\n        }\n      ],\n      "best_time_to_visit": "Morning for cooler temperatures"\n    }\n  ]\n}\n```\n\n**Note:** \n\n* This is a sample itinerary and can be adjusted based on your preferences and interests.\n* Prices for hotels and attractions are approximate and may vary depending on the season and availability.\n* This itinerary focuses on free or low-cost activities. \n* It is recommended to book hotels and attractions in advance, especially during peak season. \n* Be sure to check for any COVID-19 related restrictions or guidelines before traveling. \n',
        },
      ],
    },
  ],
});
