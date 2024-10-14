# BooknEvent

**BooknEvent** is a web application that allows users to browse and book events. Users can view all available events, search for specific ones, and book tickets. I am currently working on adding an admin panel where admins will be able to create and manage events, but the main functionality of the user-side event booking is complete.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Panel (In Progress)](#admin-panel-in-progress)
- [Project Status](#project-status)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse through a list of events.
- Search for events by name or other criteria.
- Book tickets for any available events.
- Bookmark events for future reference.
- Responsive UI for both desktop and mobile views.

## Technologies Used

- **Frontend**: 
  - HTML
  - CSS (TailwindCSS)
  - JavaScript (Vanilla)
  - React (for certain components)
  
- **Backend (Planned)**:
  - Java with Spring Boot (for REST APIs)
  - MySQL (for database)

## Installation

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Make sure you have **Node.js** and **npm** installed.

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/booknevent.git
    cd booknevent
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the project locally:

    ```bash
    npm start
    ```

4. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

1. **Browse Events**: Users can see a list of upcoming events.
2. **Search Events**: Type the name of an event in the search bar to quickly find it.
3. **Book Events**: Select an event, view the details, and book a ticket.
4. **Bookmark Events**: Save events to your profile to easily find them later.

## Admin Panel (In Progress)

Currently, the admin panel is under development. When complete, the admin will be able to:
- Create an admin account.
- Add, edit, or delete events.
- View event analytics.

This feature will be implemented using the following:
- Backend: Spring Boot with Java
- Database: MySQL

## Project Status

The user-side functionality of the project (browsing, searching, and booking events) is complete.

- [x] Browse and search events
- [x] Book tickets
- [x] Bookmark events
- [ ] Admin Panel (in progress)

Stay tuned for updates as I continue working on the admin panel!

## Contributing

Feel free to fork this repository and submit pull requests. If you have any feature requests or find any bugs, please create an issue.

## License

This project is open-source and available under the [MIT License](LICENSE).
