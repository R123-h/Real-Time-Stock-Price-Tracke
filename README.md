---
title: Real-Time Stock and Crypto Data Table
---

## Project Overview and Purpose

This project aims to create a real-time dashboard for monitoring stock or cryptocurrency data. It fetches real-time data from external APIs, stores it in MongoDB, and displays the most recent entries in a dynamic table on the frontend. Users can select different stocks or cryptocurrencies to monitor and see their real-time data updated in the table.

## Setup Instructions

To run the development server, follow these steps:

## 1.Install dependencies:

npm install

# or

yarn install

## 2.Set up environment variables:

Create a .env file in the root directory and add your MongoDB connection string:

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>

## 3. Run the development server:

npm run dev

# or

yarn dev

## 4.Open your browser:

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Technologies Used

Next.js: React framework for server-rendered applications.
TypeScript: Typed JavaScript for improved code quality and developer productivity.
Redux: State management library for predictable state containers.
MongoDB: NoSQL database for storing real-time data.
Other dependencies: Axios for API requests, Moment.js for date handling, etc.

## Adding or Changing Stocks/Cryptos

To add or change stocks or cryptocurrencies:

1.Click on the "Change Stock/Crypto" button.
2.Use the modal/popup to select a different stock or cryptocurrency.
3.Save your selection, and the table will update to display real-time data for the selected item.

## Additional Notes

1.Redux State Persistence: State is persisted in localStorage to maintain user preferences and data across sessions.
2.Real-Time Updates: The dashboard updates automatically with new data fetched at regular intervals.
3.API Integration: Data is fetched from external APIs (e.g., LiveCoinWatch, CoinGecko) every few seconds to ensure real-time accuracy.

## Dependencies

Node.js
MongoDB Atlas (or local MongoDB setup)
React, Redux, and other dependencies as specified in package.json
