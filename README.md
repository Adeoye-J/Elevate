# Elevate Blog - Personal Development & Growth

Welcome to **Elevate Blog**, a platform dedicated to personal development, growth, and self-improvement. This project is built using **React.js**, with features that allow users to explore blogs, filter content, read author details, and toggle between light and dark themes.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Blog Listings**: Explore blogs on various topics related to personal development.
- **Search and Filters**: Easily filter blog posts by popularity, latest entries, categories, authors, and tags.
- **Pagination**: Navigate through pages of blog posts efficiently.
- **Author Pages**: View detailed profiles of blog authors.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for mobile and desktop viewing.
- **Contact Page**: Get in touch with the team for inquiries or feedback.

## Installation
Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/elevate-blog.git
   cd elevate-blog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

Once the server is running, you can explore the following pages:
- **Homepage**: Overview of blog posts and categories.
- **Blogs Page**: Lists of blog posts with filtering options.
- **Blog Details**: View detailed content for a selected blog post.
- **Authors**: View a list of authors, including details about each.
- **Contact Page**: Users can send feedback or inquiries.

### Example Routing
- `/home`: Home page with the hero section and blog highlights.
- `/blogs`: View all blogs with filter options.
- `/blogs/:id`: Detailed view of a blog post.
- `/authors`: List of authors with profile details.
- `/authors-details`: Detailed author information.

## Project Structure
Here's a brief overview of the main project structure:

```
/src
  /components
    /BlogItem        # Component for rendering a single blog
    /BlogList        # Component for rendering the list of blogs with pagination
    /AuthorsItem     # Component for rendering a single author
    /AuthorsList     # Component for rendering the list of authors
    /BlogItemDetails # Detailed view of a blog post
    /AuthorsDetails  # Detailed view of an author
    /Header          # Navbar and theme toggle
    /HeroTemplate    # Reusable hero section for pages
  /pages
    /Home            # Homepage of the site
    /Blogs           # Blog listing and filtering
    /Authors         # List of authors
    /Contact         # Contact form and details
  /utils
    /ToggleTheme     # Dark/Light mode toggle
  /BlogContext       # Context API for managing blog and author data
  /styles            # Global and component-level styles (SCSS)
```

## Technologies Used
- **React.js**: Frontend framework
- **React Router**: For handling routing
- **SCSS**: Styling with SASS/SCSS for enhanced CSS capabilities
- **Context API**: For state management (blogs, authors, etc.)
- **Vite**: Development build tool for fast and optimized development

## Contributing
Feel free to contribute to this project by submitting a pull request. Here are the steps to follow:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
