# RoboFriends

This project was built as part of a web development course. It was made using Vite and React.

## Overview

The RoboFriends application allows users to search for robot friends. The application fetches user data from an external API and displays it in a card format. Users can filter the robots by typing in the search box.

## How It Works

- The application fetches user data from `https://jsonplaceholder.typicode.com/users` when the component mounts.
- The user data is stored in the component's state.
- The search box allows users to filter the displayed robots by their names.
- The filtered robots are displayed in a scrollable list of cards.

## Getting Started

To download and run the application locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/RoboFriends.git
    cd RoboFriends
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the development server:**
    ```sh
    npm run dev
    ```

4. **Build the project for production:**
    ```sh
    npm run build
    ```

5. **Preview the production build:**
    ```sh
    npm run preview
    ```

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tachyons](https://tachyons.io/)

## ESLint Configuration

The project uses ESLint with the following plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
