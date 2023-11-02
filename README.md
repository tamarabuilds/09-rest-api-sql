# rest-api-sql
Learn more about the developer on <a href="https://www.linkedin.com/in/tamarabuilds/" target="_blank">LinkedIn</a>

Unit 09 project for the Full Stack JavaScript Techdegree. This is a REST API to let users create, list, update, and delete items from a fictional school database.



## How It's Made

Tech used: HTML, CSS, JavaScript, Node.js, Express, SQLite, the SQL ORM Sequelize, and the REST Client package for testing

Install my-project with npm

```bash
  npm install
  npm start
```

## Optimizations

 * Made sure ....


## Lessons Learned

 * Define model associations.
 * Set up for testing.
 * Hashing passwords for security.
 * User authenticaion middleware.
 * Testing APIs with Postman
 * Ensuring emails are unique.
 * Filtering out properties from a response.


## Extra Features

* Email address is valid and unique.
* Updated /api/users, /api/courses, and /api/course routes to filter unnecessary fields.
* Ensure only currently authenticated user is the owner of requested courses.
* Throw 400 HTTP status code for SequelizeUniqueConstraintError errors.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)
