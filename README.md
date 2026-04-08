# P1 - Blog Web

## Description

This project consists of the development of a blog-style web application that allows users to view posts, check details, perform searches, and manage content by consuming an API.

The project is currently in a functional stage, where the main required features have been implemented.

## Objective

To develop a dynamic web application by applying the following concepts:

* API consumption (GET and POST)
* DOM manipulation
* Form validation
* Search and filtering of information
* Use of Git and GitHub

## Team Members

* Mishell Ciprian 
* Adriana Martínez 

## Technologies Used

- HTML5 (semantic structure)
- CSS3 (responsive design)
- JavaScript (ES6+)
- DummyJSON API (REST API consumption)
- LocalStorage (client-side persistence)

### Additional Technical Details

In addition to the base technologies, the project uses:

- DummyJSON API to retrieve posts
- LocalStorage to store user-created posts


### Code Organization

The project is structured in a modular way to separate responsibilities:

- `js/api/` → API consumption handling
- `js/modules/` → main logic (rendering, filters, forms)
- `js/utils/` → utilities such as validations
- `pages/` → additional views of the site

## Project Structure

```bash
css/
js/
pages/
index.html
README.md
.gitignore
```

## Expected Features

* Post listing
* Post detail view
* Post creation
* Search and filtering
* Navigation between sections

## Implemented Features

Currently, the system includes the following features:

- Display of posts from an external API
- Creation of new posts through a form
- Local storage of user-created posts
- Detail view for each post (Read More)
- Text-based search in posts
- Filtering by author
- Filtering by tags
- Pagination of results
- Deletion of locally created posts
- Form validation using JavaScript

## Limitations

- Posts created are only stored locally (not persisted in API)
- No user authentication system
  
## Installation

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/itsadrimartinezzz/P1-BLOG.git
```


## GitHub Pages

https://itsadrimartinezzz.github.io/P1-BLOG/index.html



## Video

https://youtu.be/7goInZaf1jA

## User Experience

The application design aims to provide a clear, simple, and organized experience. Ease of navigation between sections was prioritized, allowing users to browse posts, filter them, and create content without difficulty.

Additionally, validations and feedback messages were included to guide users during their interaction with the system.


## Conclusion

This project represents a practical application of the knowledge acquired during the course, integrating technical concepts and good web development practices. It also helped strengthen teamwork and code organization using Git.
