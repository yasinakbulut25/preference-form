# Preference Form – Frontend Case Study

This project is a fully responsive **Preference Form UI** built with **Next.js (App Router)**.
It focuses on clean architecture, reusable components, and production-level frontend practices.

**Live Demo on Vercel:** [https://preference-form.vercel.app/](https://preference-form.vercel.app/)

## Getting Started

```bash
# install dependencies
npm install

# run project
npm run dev

# app runs on:
http://localhost:3000
```

## Live Features

* ✅ Fully responsive design (mobile & desktop)
* ✅ Multi-select city dropdown (max 3 selections)
* ✅ API-based city fetching
* ✅ Search & filtering for large datasets
* ✅ Email frequency slider
* ✅ Conditional rendering (Football section)
* ✅ Form validation with Zod
* ✅ Success (Thank You) page with query validation

## Tech Stack

* **Framework:** Next.js (App Router)
* **UI Library:** HeroUI v2
* **Styling:** Tailwind CSS, Framer Motion
* **Form Management:** React Hook Form
* **Validation:** Zod
* **Icons:** @fluentui/react-icons

## Project Structure

```
├── 📁 app
│   ├── 📁 success
│   │   ├── 📄 page.jsx
│   │   └── 📄 SuccessContent.jsx
│   ├── 📄 ClientProvider.jsx
│   ├── 📄 favicon.ico
│   ├── 📄 layout.jsx
│   └── 📄 page.jsx
├── 📁 components
│   ├── 📁 form
│   │   ├── 📄 InputField.jsx
│   │   ├── 📄 SelectField.jsx
│   │   ├── 📄 SliderField.jsx
│   │   └── 📄 SubmitButton.jsx
│   ├── 📁 preference-form
│   │   ├── 📁 frequency-section
│   │   │   └── 📄 FrequencySection.jsx
│   │   ├── 📁 interests-section
│   │   │   ├── 📄 FootballTeams.jsx
│   │   │   ├── 📄 InterestsSection.jsx
│   │   │   └── 📄 SelectableCard.jsx
│   │   ├── 📁 personal-section
│   │   │   ├── 📄 CitySelectField.jsx
│   │   │   ├── 📄 DateOfBirthFields.jsx
│   │   │   └── 📄 PersonalSection.jsx
│   │   └── 📄 PreferenceForm.jsx
│   └── 📁 ui
│       ├── 📄 ErrorMessage.jsx
│       ├── 📄 SectionLine.jsx
│       └── 📄 SectionTitle.jsx
├── 📁 hooks
│   ├── 📄 useCities.js
│   └── 📄 useDebounce.js
├── 📁 lib
│   ├── 📄 apiFetch.js
│   ├── 📄 endpoints.js
│   └── 📄 formSchema.js
├── 📁 styles
│   └── 🎨 globals.css
└── 📁 utils
    ├── 📄 constants.js
    ├── 📄 dateOptions.js
    └── 📄 index.js
```

## Structure Philosophy

* **Separation of concerns (SRP)**
* UI, logic, and data fetching are clearly separated
* Scalable for large applications

## Key Architectural Decisions

### Font Selection

The original design did not explicitly provide a font.
To achieve visual consistency:

* I analyzed the design
* Selected the **closest matching modern font**

### Design System & Colors

Instead of hardcoding colors:

* I extracted all colors from the design using a **color picker**
* Defined them inside **Tailwind theme configuration**
* Used them as reusable utility classes

This approach ensures:

* Consistency
* Maintainability
* Scalability

### Form Management (React Hook Form + FormProvider)

I used **React Hook Form** with `FormProvider` to:

* Avoid prop drilling
* Share form context across deeply nested components
* Keep components clean and reusable

This is especially important in large forms with multiple sections.

### Validation with Zod

Zod was used for:

* Schema-based validation
* Handling **conditional validation**

Example:

* Football team & league fields are required **only if Football is selected**

This makes validation logic:

* Centralized
* Maintainable
* Easy to scale

## API Layer Design & Shared Fetch Function

I created a reusable `apiFetch` utility:

* Centralized request handling
* Configurable headers, methods, and body
* Scalable for future backend integration

This mimics real-world production architecture.

## Endpoints Layer

All API URLs are defined in:

```
lib/endpoints.js
```

Benefits:

* Easy to manage
* Avoid hardcoded URLs
* Scalable for multiple services

## Custom Hooks (SRP)

Data fetching is handled inside hooks:

```
hooks/useCities.js
```

Benefits:

* Keeps UI components clean
* Applies **Single Responsibility Principle**
* Reusable across the app

## City Search Optimization

The cities dataset contains **thousands of items (~2900+)**.

To improve performance and UX:

* Implemented **client-side search filtering**
* Limited rendered results using `.slice()`
* Used memoization (`useMemo`)

This prevents:

* UI lag
* unnecessary re-renders

## Email Frequency (Slider)

* Implemented using HeroUI Slider
* Supports marks (Rarely → Always)
* Mapped enum values to slider index

Ensures:

* Clean UI
* Backend-friendly data structure

## Conditional Rendering (Football Section)

* Hidden by default
* Appears only when **Football** is selected

Includes:

* Premier League
* Championship

Controlled via form state (react-hook-form + Zod)

## Success Page (Thank You Page)

After form submission:

* User is redirected to `/success?id=123`
* Query parameter (`id`) is validated

### Why ID is Required?

The success page checks for `id`:

* If exists → page renders
* If missing → user is redirected to home

This prevents:

* Direct unauthorized access to success page
* Improves flow integrity

## Form Submission

Since this is a frontend-only project:

* Form data is logged to the console
* No backend integration is used

## Reusability Highlights

* InputField
* SelectField
* SliderField
* Section-based form architecture

Components are:

* Reusable
* Configurable
* Scalable

## Why HeroUI?

I chose **HeroUI** because it is a UI library I frequently use in my projects and feel comfortable with.
It provides:

* Clean and modern components
* Good accessibility support
* Easy customization
* Consistent design system

This allowed me to build a **production-quality UI faster**.
