const express = require('express');
const contactsController = require('../controllers/contacts.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');

const router = express.Router();

/**
 * @swagger
 * /api/v1/contacts:
 *   get:
 *     summary: Get contacts by filter
 *     description: Get contacts by filter
 *     parameters:
 *       - in: query
 *         name: favorite
 *         schema:
 *           type: boolean
 *         description: Filter by favorite status
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by contact name
 *     tags:
 *       - contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The response status
 *                   enum: [success]
 *                 data:
 *                   type: object
 *                   properties:
 *                     contacts:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Contact'
 *   post:
 *     summary: Create a new contact
 *     description: Create a new contact
 *     tags:
 *       - contacts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       400:
 *         $ref: '#/components/responses/400InvalidRequest'
 *   delete:
 *     summary: Delete all contacts
 *     description: Delete all contacts
 *     tags:
 *       - contacts
 *     responses:
 *       200:
 *         description: All contacts deleted
 *         $ref: '#/components/responses/200NoData'
 *       500:
 *         $ref: '#/components/responses/500InternalServerError'
 *   all:
 *     summary: Handle unsupported methods
 *     description: Handle unsupported methods on /api/v1/contacts
 *     tags:
 *       - contacts
 *     responses:
 *       405:
 *         description: Method not allowed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The response status
 *                   enum: [fail]
 *                 message:
 *                   type: string
 *                   description: Error message
 */

router.get('/', contactsController.getContactsByFilter);
router.post('/', contactsController.createContact);
router.delete('/', contactsController.deleteAllContacts);
router.all('/', methodNotAllowed);

router.get('/:id', contactsController.getContact);
router.put('/:id', contactsController.updateContact); // Add this line for PUT /api/v1/contacts/{id}
router.delete('/:id', contactsController.deleteContact);
router.all('/:id', methodNotAllowed);

module.exports = { setup: (app) => app.use('/api/v1/contacts', router) };
