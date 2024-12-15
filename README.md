# Calendar Notes App

## Overview

Calendar Notes App is a React-based web application that allows users to manage and track notes on a dynamic, interactive calendar. The app provides an intuitive interface for adding, viewing, and deleting notes for specific dates.

## Features

- **Interactive Calendar**
  - Navigate between months using previous and next buttons
  - Visual indication of dates with existing notes
  - Responsive calendar layout

- **Note Management**
  - Add notes to specific dates
  - View notes for a selected date in a sidebar
  - Delete individual notes
  - Simple and intuitive note creation modal

## Technologies Used

- React
- TypeScript
- Lucide React Icons
- CSS for styling

## Prerequisites

- Node.js (v14 or later)
- npm or Yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calendar-notes-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd calendar-notes-app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Application

Start the development server:
```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
calendar-notes-app/
│
├── src/
│   ├── components/
│   │   └── CalendarNotesApp.tsx
│   ├── styles/
│   │   └── DateCalendar.css
│   └── App.tsx
│
├── package.json
└── README.md
```

## Key Components

- `CalendarNotesApp`: Main component managing the entire application
- `CustomCalendar`: Renders the interactive calendar
- `NotesList`: Displays notes for a selected date
- `NoteModal`: Provides interface for creating new notes
- `NotesSidebar`: Shows notes and add note button for selected date

## Functionality

### Calendar Navigation
- Click left/right arrows to change months
- Dates with notes are highlighted

### Adding Notes
1. Click on a date to open the sidebar
2. Click "Add Note" button
3. Fill in title and description
4. Save the note

### Deleting Notes
- Click the trash icon next to a note to remove it

## Styling

The app uses a custom CSS file (`DateCalendar.css`) for styling. The design is responsive and user-friendly.

## Future Improvements

- Persist notes using local storage or backend
- Add note editing functionality
- Implement note categories or tags
- Add more advanced filtering options

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/calendar-notes-app](https://github.com/your-username/calendar-notes-app)
