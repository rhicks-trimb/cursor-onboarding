# Modus Todo Application

A React to-do application built with Modus web components, featuring full CRUD operations and progress tracking.

## Features

- ✅ **Create**: Add new todos
- ✅ **Read**: Display todos in a list
- ✅ **Update**: Edit todo text and toggle completion status
- ✅ **Delete**: Remove todos
- 📊 **Progress Tracking**: Visual progress bar showing completion percentage

## Tech Stack

- React 18
- TypeScript
- Vite
- Modus Web Components
- Modus React Components

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── main.tsx              # Entry point with Modus setup
├── App.tsx               # Main app component with state management
├── App.css               # Application styles
├── components/
│   ├── TodoHeader.tsx   # Progress display component
│   ├── TodoForm.tsx      # Form to add new todos
│   ├── TodoList.tsx      # List container component
│   └── TodoItem.tsx      # Individual todo item component
└── types/
    └── todo.ts           # TypeScript type definitions
```

## Usage

1. **Add a Todo**: Type in the input field and click "Add Todo" or press Enter
2. **Complete a Todo**: Click the checkbox next to a todo item
3. **Edit a Todo**: Click the "Edit" button or click on the todo text, modify it, and click "Save" or press Enter. Press Escape to cancel.
4. **Delete a Todo**: Click the "Delete" button on any todo item
5. **Track Progress**: View your completion progress in the progress card at the top

## Modus Components Used

- `modus-wc-button`: For add, edit, and delete actions
- `modus-wc-text-input`: For todo input and editing
- `modus-wc-checkbox`: For marking todos as complete
- `modus-wc-card`: Container for todos and progress display
- `modus-wc-progress`: Visual progress indicator

## Development

The application uses:
- Controlled input pattern for Modus components
- React hooks for state management
- TypeScript for type safety
- CSS for layout (Modus handles component styling)

## License

This project is for demonstration purposes.

