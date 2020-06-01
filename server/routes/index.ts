import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function (req: express.Request, res: express.Response, next) {
    console.log(process.env);
    res.send('respond with a resource');
});

export { router };
