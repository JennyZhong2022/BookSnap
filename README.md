# SPA project: BookSnap&copy;

- 24 Nov - 1 Dec 2023 (1 week)
- Member: Annabelle , Jenny Zhong, Phougn Vu, Yonghee Kim (alphabetical order)

## Description

BookSnap&copy; is a full-stack single page web application that allows users to search books using the Google Books API. Users can search for books, add them to their collection, and manage their reading list.

### Features

- Search books by title or author
- Filter books by categories and languages
- View detailed information about each book
- Pagination to navigate through search results
- Add books to MyBooks(book collection)
- Personal notes on the book

## Timeline as agile method

### 1. Plan

24 Nov - 25 Nov

- Entity Relationship Diagram(EDR)
  ![alt text](public/BookSnapERD.png 'ERD')
  - Chose a simple user model for athentication
  - Picked book model properties from raw data
- Wire Frame
  ![alt text](public/BookSnapWF.png 'WF')
  - Landing page design & Wire frame page flows
  - Allowed user to search without login
  - My books page for logged in users
- Reaserch book APIs
  - candidates : Google Books API, GoodReads API, Amazon Books API
  - Chose Google book API for reliability and richness in data

### 2. Design & Develop

25 Nov - 30 Nov

#### Technologies

|                     |                Technologies                 |   Libraries |
| ------------------- | :-----------------------------------------: | ----------: |
| Client              | ReactJS 18, Google Books Wep Api, HTML5/CSS | Material UI |
| Server              |             ExpressJS, NodeJS,              | JWT, Bcrypt |
| Data Solution       |                   MongoDB                   |    Mongoose |
| VCS & Communication |             Github/Git, Trello              |             |

#### - Log-in System Build

1. Basic sign up and log in UI build
2. Created user model with minimal ID info
3. User authentication process with JWT, bcrypt

#### - Search & Filter Function

1. Picked up data from the raw data
2. Two options for search bar; a dynamic(responsive to keywords) / conventional
3. Coded logic of search/filter options: by title, languages, categories
4. Search results page navigation

#### - Add books to MyBooks
1. Create a document of user model from data fetched

#### - MyBooks(book collection) page build

1. Built basic UI/UX and applied Material-UI
2. Store book data to our DB
3. Delete a book from the collection
4. Add & delete notes

### 3. Test & Deploy

28 Nov - 30 Nov

#### Challenges & Trouble Shootings

- Since limitted requests to API, chose a conventional search bar for reliability
- Simplified filter functions because of too many conditions for API endpoint causing error


- **Deployed on Heroku(30 Nov)**

### 4. Presentaion & Review

1 Dec

---

# BookSnap

BookSnap is a web application that allows users to search for books using the Google Books API. 

## Components

- **BookSearch**: Allows users to input search criteria and submit a search request.
- **BookList**: Displays a list of books based on the search results.
- **BookDetail**: Shows detailed information about a selected book.
- **BookPageController**: Handles pagination of search results.
