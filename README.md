# Library Management System 📚

This is a RESTful API built using **Node.js**, **Express**, and **MongoDB** (with Mongoose) to manage a Library System. It supports features for:

- Admin management
- Book cataloging
- Borrow/Return/Renew record system

---

## 📚 Library API Endpoints

**Admin Route**
| Method | Route                  | Description                                     | Route parameter                       |
| ------ | -----------------------| ------------------------------------------------|-------------------------------------- |
| GET    | `/api/admin/seed/`     | seed admin database                             |                                       |
| POST   | `/api/admin`           | creates one or more admins in admin collection (Sample data below) |                                       |
| GET    | `/api/admin`           | gets list of admins from admin collection       |                                       |
| GET    | `/api/admin/:id`       | gets one admin based on object id.              | Object Id                             |
| PUT    | `/api/admin/:id`       | updates one data record based on object id.     | Object Id                             |
| DELETE | `/api/admin/:id`       | deletes one data entry based on object id       | Object Id                             |  
| GET    | `/api/admin/role/:role`| gets a list of admins whose role is :role       | Role:["superadmin","admin",moderator"]|


**Books Route**
| Method | Route                  | Description                                     | Route parameter      |
| ------ | -----------------------| ------------------------------------------------|--------------------- |
| GET    | `/api/books/seed`      | seeds data in books collection                  |                      |
| POST   | `/api/books`           | creates one or more book entry (Sample data below)                  |                      |
| GET    | `/api/books`           | gets list of books                              |                      |
| GET    | `/api/books/:id`       | gets one book entry based on Object Id          | Object Id            |
| PUT    | `/api/books/:id`       | updates one book record based on object id.     | Object Id            |
| DELETE | `/api/books/:id`       | deletes one book record based on object id      | Object Id            |  
| GET    |`/api/books/title/:name`| finds a book by (complete title) title in books collection       | title                |
| GET    | `/api/books/bookNo/:id`| gets a book based on bookNo                     | BookNo               |          


**Borrow Route**
| Method | Route                                  | Description                                                         | Route parameter |
| ------ | -------------------------------------- | ------------------------------------------------------------------- |------------|
| GET    | `/api/borrow/seed`                     | seeds data in borrow collection                                     |            |
| POST   | `/api/borrow`                          | creates one or more borrow entry (Sample data below)                 |            |
| GET    | `/api/borrow`                          | gets list of borrow records                                         |            |
| GET    | `/api/borrow/:id`                      | gets one borrow entry based on Object Id                            | Object Id  | 
| PUT    | `/api/borrow/:id`                      | updates one borrow record based on object id                        | Object Id  |
| DELETE | `/api/borrow/:id`                      | deletes one borrow record based on object id                        | Object Id  |
|  GET   |`/api/borrow/user/:id`                  | get all the borrow records for a user based on userId               | UserId     |
| GET    | `/api/borrow/book/:id`                 | get all borrow records for a book based on bookId                   |BookkId     |
| GET    | `/api/borrow/user/:userId/book/:bookId`| get all the records of a user for a book based on userId and bookId |            |

---
## 🛠️ Tools & Technologies Used

- **Backend: Node.js, Express**

- **Database: MongoDB (Mongoose ODM)**

- **Dev Tools: Nodemon, dotenv**

- **Thunder Client/Postman**

------

## Sample Data


- Sample data for Admin database:

    ```{
        "name": "Nidhi Goyal",
        "email": "goyal.nidhi@example.com",
        "age": 35,
        "role": "admin",
        "isActive":"true"
}

- Sample data for Boooks database:

   ```{
    "bookNo": 16,
    "title": "The Class",
    "author": "Eric Segal",
    "description": "A powerful and moving saga of five extraordinary members of the Harvard class of 1958 and the women with whom their lives are intertwined. Their explosive story begins in a time of innocence and spans a turbulent quarter century, culminating in their dramatic twenty-five reunion at which they confront their classmates--and the balance sheet of their own lives. Always at the center; amid the passion, laughter, and glory, stands Harvard--the symbol of who they are and who they will be. They were a generation who made the rules--then broke them--whose glittering successes, heartfelt tragedies, and unbridled ambitions would stun the world.",
    "pages": 560,
    "cover": "https://m.media-amazon.com/images/I/51rIay3vijL.jpg"
    }

- Sample data for borrow database:

    ```{
        "userId": 1,
        "bookId": 3,
        "status":"borrowed",
        "renewcount":1,
        "remarks": "User reached maximum borrow limit"        
        }

---
## REQUIREMENTS

- ✅Use at least three different data collections within the database (such as users, posts, or comments)
- ✅Utilize reasonable data modeling practices.
- ✅Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
- ✅Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.
- ✅Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.
- ✅Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.
- ✅Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.
- ✅Include sensible MongoDB data validation rules for at least one data collection.
Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error.
- ✅Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).
- ✅Utilize reasonable code organization practices.
- ✅Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
- ✅Commit frequently to the git repository.
- ✅Include a README file that contains a description of your application.
This README must include a description of your API's available routes and their corresponding CRUD operations for reference.
- ✅Level of effort displayed in creativity and user experience.

---

## REFLECTIONS

- What could you have done differently during the planning stages of your project to make the execution easier?

    - Nothing

- what would you add or change about your application if you had more time?

    - I would add a user database with book checkout routes if I had more time.



