```md
# 🎬 Cinestar – Film & TV Production Website

A modern, responsive web application developed as part of the **Svendeprøve** at Media College Denmark.

The project represents a digital platform for a film production company, including a public-facing website and a simple backoffice for content management.

---

## 📌 Overview

Cinestar is built using **React (Vite)** and follows a structured, component-based architecture with a clear separation between UI, logic, and API communication.

The application includes:

- Public website (portfolio, services, testimonials, contact)
- Dynamic content fetched from backend API
- Authentication-based UI behavior
- Backoffice functionality for managing data

---

## 🚀 Tech Stack

**Frontend**
- React (Vite)
- React Router
- TailwindCSS
- Axios
- React Toastify

**Architecture**
- Component-based structure
- Service layer for API handling
- Local state management with React hooks

---

## 🧱 Project Structure

```

src/
│
├── api/
│   └── api.js
│
├── components/
│   ├── layout/
│   ├── sections/
│   │   └── home/
│   └── ui/
│
├── pages/
│   ├── HomePage.jsx
│   ├── AdminMessagesPage.jsx
│   └── AdminReviewsPage.jsx
│
├── services/
│   ├── reviewService.js
│   └── messageService.js
│
├── utils/
│   └── helpers.js
│
└── assets/

````

---

## 🔗 Features

### 🌐 Public Website

- Hero section with overlay
- Portfolio slider
- Testimonials (fetched from API)
- Services overview
- Contact section
- Blog preview

---

### 🔐 Authentication

Authentication is handled via `localStorage`:

```js
cinestar_token
cinestar_is_logged_in
cinestar_user_role
````

UI updates dynamically based on login state.


---

## 🔄 API Integration

All API communication is handled through a centralized service layer:

```js
/services/reviewService.js
/services/messageService.js
```

This ensures:

* Clean components
* Reusable logic
* Easier debugging
* Better scalability

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repo-link>
cd cinestar
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 🔌 Backend Requirements

The project expects a running backend API with endpoints such as:

* `GET /reviews`
* `POST /review`
* `PUT /review`
* `DELETE /review/:id`
* `GET /messages`
* `PUT /message`
* `DELETE /message/:id`

Default expected base URL:

```bash
http://localhost:3042
```

---

## 🧠 Key Architectural Decisions

### Service Layer

API calls are separated from components to improve maintainability and scalability.

### Component-Based Design

Reusable sections allow consistent UI and easier updates.

### State Management

Local React hooks are used instead of global libraries to keep the project lightweight.

---

## 🐛 Challenges & Solutions

| Problem                | Solution                                  |
| ---------------------- | ----------------------------------------- |
| Import errors (Vite)   | Fixed incorrect file paths and naming     |
| Missing UI sections    | Corrected component imports and structure |
| Logout not updating UI | Synced state with `location.pathname`     |
| API inconsistencies    | Normalized response handling              |

---

## 📱 Design Approach

* Mobile-first
* Pixel-accurate implementation from Figma
* Dark cinematic theme
* Custom typography (Cormorant Garamond)

---

## 📈 Future Improvements

* Global state management (Zustand / Redux)
* Pagination for backoffice data
* Image optimization
* Role-based route protection
* Unit testing

---

## 👤 Author

**Ionut Catalin Belu**

* Web Development
* Pharma Investment & Research
* Scandinavian Web Project

---

## 📄 License

This project is developed for educational purposes (Svendeprøve).

---

