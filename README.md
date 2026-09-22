# Counselling System

A counsellor appointment booking interface built in React, with a small Express
server behind it. Written while working through React fundamentals, so the
component directory also contains standalone exercises alongside the app itself.

## What's here

**The app** — `Home`, `Councellor`, `Appointment`, `Signin`, `Signup`,
`Contact`, plus shared `Header` / `Footer`.

**Practice components** — `Counter`, `Toggle`, `Greet`, `Hello`, `Message`,
`DynamicContent`, `DataFetch`, `ProductList`, `UserCard`, `Visitor`. These cover
state, props, conditional rendering and data fetching, and are not wired into
the booking flow.

## Stack

React (Create React App) · Express · Node.js

## Running locally

```bash
# server
cd server
npm install
npm start

# frontend
cd frontend
npm install
npm start
```

## Status

The server is currently a minimal stub — the booking flow is frontend-only, and
persistence isn't implemented yet.
