const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let sqlQuery = `
        UPDATE "images"
        SET "likes" = "likes" + 1
        WHERE "id" = $1;
    `
    pool.query(sqlQuery, [req.params.id])
    .then((result) => {
        console.log('result from PUT route:', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in PUT route:', error);
        res.sendStatus(500);
    });
})

// GET Route
router.get('/', (req, res) => {
    let sqlQuery = `
        SELECT * FROM "images" ORDER BY "id";
    `
    pool.query(sqlQuery)
    .then((result) => {
        console.log('result from GET route:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in GET route:', error);
        res.sendStatus(500);
    });
})

router.delete('/delete/:id', (req, res) => {
    let sqlQuery = `
        DELETE FROM "images"
        WHERE "id" = $1;
    `

    pool.query(sqlQuery, [req.params.id])
    .then((result) => {
        console.log("result from DELETE route:", result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log("Error in DELETE route:", error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    let picToSend = req.body;
    let sqlQuery = `
        INSERT INTO "images" ("path", "description", "likes")
        VALUES ($1, $2, $3);
    `
    pool.query(sqlQuery, [picToSend.path, picToSend.description, picToSend.likes])
    .then((result) => {
        console.log('response from POST request:', result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST route:', error);
        res.sendStatus(500);
    });
})

module.exports = router;