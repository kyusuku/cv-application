# CV Application

A responsive and downloadable CV application built with React, TypeScript, Tailwind CSS, and Vite. This application allows users to input personal, educational, and professional information, preview the CV in real-time, and download it in A4 format.

## Try It Out

Check out the live demo: [Here!](https://kyusuku-cv-maker.vercel.app)

## Features

- **Responsive Design**: Adapts to different screen sizes, including tablets and mobile devices.
- **Printable CV**: Generates a CV in A4 format with proper aspect ratio and font sizes for printing.
- **Dynamic Input**: Add up to 3 education and experience entries dynamically.
- **Real-Time Preview**: See changes reflected in the CV preview as you type.
- **Download Button**: Print or save the CV directly from the browser.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For styling and responsive design.
- **Vite**: For fast development and build tooling.
- **ESLint & Prettier**: For code linting and formatting.

## Project Structure

```
cv-application/
├── src/
│   ├── components/       # React components (e.g., Intro, Result, Education, Experience)
│   ├── assets/           # Static assets (e.g., icons, images)
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   ├── App.tsx           # Main application component
│   └── vite-env.d.ts     # Vite environment types
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # TypeScript configuration for the app
├── tsconfig.node.json    # TypeScript configuration for Vite
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kyusuku/cv-application.git
   cd cv-application
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code issues.

## Usage

1. Fill in your personal, educational, and professional details in the left section.
2. Preview the CV in the right section in real-time.
3. Click the "Download" button to print or save the CV in A4 format.

## Customization

- **Styling**: Modify `src/index.css` or use Tailwind CSS classes in components.
- **Components**: Add or edit components in the `src/components/` directory.
- **Configuration**: Update `vite.config.ts` or `tsconfig.json` for build and TypeScript settings.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.