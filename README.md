# Appointment Booking App

**Appointment Booking App** is a full-stack web application designed to simplify appointment scheduling and management. Built with **Node.js**, **Express.js**, **MongoDB**, and **JavaScript**, it features secure user authentication using **JWT**, a responsive interface with **TailwindCSS**, Stripe payment integration, and both user and admin functionalities.

## 🚀 Features

- User sign-up/login with JWT authentication
- Book, view, and cancel appointments
- Pay for appointments securely using **Stripe**
- Admin dashboard to manage users and appointments
- Responsive UI using TailwindCSS

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Auth:** JWT (JSON Web Token)
- **Payment Gateway:** Stripe

## 🧪 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sksumit141/Appointment_Booking_app.git
   cd Appointment_Booking_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Visit the app:**
   Open your browser and go to: `http://localhost:5000`

## 💳 Stripe Integration

The app uses **Stripe** to securely process appointment payments. On the booking page, users can enter their payment details to complete the transaction. Stripe handles the card information and returns a secure payment confirmation.



---
