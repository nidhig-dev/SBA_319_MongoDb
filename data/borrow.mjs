export const borrow = [
    {
        "userId": 1,
        "bookId": 1,
        "status":"borrowed",
        "renewcount":1,
        "remarks": "User reached maximum borrow limit"        
    },
    {
        "userId": 2,
        "bookId": 1,
        "status": "returned",
        "renewcount": 2,
        "remarks": "Book returned in good condition"
    },
    {
        "userId": 3,
        "bookId": 10,
        "status": "renewed",
        "renewcount": 1,
        "remarks": "Book has been renewed"
    },
    {
        "userId": 1,
        "bookId": 2,
        "status": "overdue",
        "renewcount": 1,
        "remarks": "Reminder sent to user"
    },
    {
        "userId": 1,
        "bookId": 7,
        "status": "lost",
        "renewcount": 1,
        "remarks": "Book lost-fine applied"
    },
    {
        "userId": 2,
        "bookId": 5,
        "status": "returned",
        "renewcount": 2,
        "remarks": "Book returned late by 3 days"
    },
    {
        "userId": 4,
        "bookId": 6,
        "status": "borrowed",
        "renewcount": 2,
        "remarks": "Requested Extension-denied."
    },
    {
        "userId": 2,
        "bookId": 8,
        "status": "borrowed",
        "renewcount": 0,
        "remarks": "First time borrower"
    },
    {
        "userId": 4,
        "bookId": 9,
        "status": "returned",
        "renewcount": 2,
        "remarks": "Book damaged-cover torn"
    },
    {
        "userId": 5,
        "bookId": 3,
        "status": "borrowed",
        "renewcount": 1,
        "remarks": "Manual record created by admin during system downtime"
    }
];