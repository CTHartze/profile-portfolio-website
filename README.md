# Profile Portfolio Website

A personal portfolio website designed to showcase your frontend development skills, projects, and experience. Built with modern web technologies including HTML, CSS, JavaScript, and React.

## Table of Contents

*   [Demo](#demo)
    
*   [Features](#features)
    
*   [Installation](#installation)
    
*   [Usage](#usage)

*   [Project Structure](#project-structure)

*   [Customization](#customization)
    
*   [Deployment](#deployment)
    
*   [Contributing](#contributing)
    
*   [Acknowledgements](#acknowledgements)
    

## Demo

Check out the live version of the portfolio: [Live Demo](https://ismail-cayden-mahomed.netlify.app/)

## Features

*   **Responsive Design**: Optimized for various devices and screen sizes.
    
*   **Modern Technologies**: Built with React and Vite for fast development and performance.
    
*   **Dynamic Content**: Easily update your projects and information through a structured data file.
    
*   **Fast Build**: Utilizes Vite for rapid development and hot module replacement.
    

## Installation

To set up the project locally:

1.  **Clone the Repository**:
    
    `git clone https://github.com/CTHartze/profile-portfolio-website.git`

2.  **Navigate to the Project Directory**:
    
    `cd profile-portfolio-website`
    
3.  **Install Dependencies**:
    
    `npm install`
    

## Usage

To run the project locally:

`npm run dev`

Then, open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Project Structure
```
profile-portfolio-website/
├── public/
│   ├── assets/
│   │   └── images/        # Static images
│   └── index.html         # Main HTML file
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components
│   ├── styles/            # CSS and styling files
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Entry point for React
├── .gitignore             # Git ignore file
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration file
```
## Customization

To personalize the portfolio:

1.  **Update Personal Information**:
    
    *   Modify the `src/data/personalInfo.js` file with your details such as name, bio, and contact information.
        
2.  **Add Projects**:
    
    *   In the `src/data/projects.js` file, add your projects with relevant details like title, description, technologies used, and links.
        
3.  **Modify Styles**:
    
    *   Adjust the styling by editing the CSS files located in the `src/styles` directory to match your personal branding.
        

## Deployment

To deploy the portfolio:

1.  **Build the Project**:
    
    `npm run build`
    
    This will create a `build` directory with the production-ready files.
    
2.  **Deploy to a Hosting Service**:
    
    *   Upload the contents of the `build` directory to your preferred hosting service, such as [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/).
        

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## Acknowledgements

*   [React](https://reactjs.org/)
    
*   [Vite](https://vitejs.dev/)
    
*   [Font Awesome](https://fontawesome.com/) for icons
    

* * *
