const express = require('express');
const cors = require('cors');
const JSend = require('./jsend');
const contactsRouter = require('./routes/contacts.router');
const {
    resourceNotFound,
    handleError,
} = require('./controllers/errors.controller');
const { specs, swaggerUi } = require('./docs/swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Serve static files from the 'public' directory
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    return res.json(JSend.success());
});

// Setup routes
contactsRouter.setup(app);

// Handle 404 response for undefined routes
app.use(resourceNotFound);

// Define error-handling middleware last, after other app.use() and routes calls
app.use(handleError);

module.exports = app;
