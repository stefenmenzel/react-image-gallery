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

// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

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

// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

module.exports = router;