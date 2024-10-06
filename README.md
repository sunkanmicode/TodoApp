


#  Todo App

A clean, intuitive todo application built with React and TypeScript, featuring a pleasant yellow color scheme and local storage persistence.

##  Features

- Create, read, update, and delete todos
- Mark todos as complete with checkboxes
- Edit existing uncompleted todos
- Data persistence using localStorage
- Responsive design with yellow theme
- Fully typed with TypeScript

##  Installation

1. Ensure you have Node.js (v14 or higher) and npm installed
2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yellow-todo-app.git
   cd TodoApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser


##  Design Decisions

1. **Yellow Color Scheme**
   - Used a warm, friendly yellow palette to create an inviting and energetic user interface
   - Different shades of yellow for various states (hover, completed, etc.)

2. **Component Separation**
   - Split into logical components for better maintainability
   - `CreateTodo`: Handles todo creation
   - `TodoList`: Displays and manages todo items
   - `TodoHome`: Main container and state management

3. **TypeScript Implementation**
   - Utilized TypeScript for better code reliability and developer experience
   - Separated types into a dedicated file for better organization
   - Strict typing for props and state

4. **State Management**
   - Used React's useState for local state management
   - Implemented localStorage for data persistence
  

5. **UX Considerations**
   - Disabled editing for completed todos to maintain data integrity
   - Clear visual feedback for todo states (complete, editing)
   - Responsive design for various screen sizes

6. **Code Organization**
   - Separated concerns into different files (types, utils, components)
   - Used consistent naming conventions
   - Implemented error handling for localStorage operations


##  Notes for Developers

- The app uses Tailwind CSS for styling. Make sure your build process is configured for Tailwind.
- Icons are from the lucide-react library.
- localStorage is used for persistence.
- All components are functional components using React hooks.



## License

This project is licensed under the MIT License(for more info) - oguntimehins@gmail.com .