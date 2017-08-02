import express from 'express';
import NewsController from '../../controllers/newsController';

/*eslint-disable */
const router = express.Router({mergeParams: true});
/*eslint-enable */

router.get('/', (req, res) => {
  NewsController.list(req.params)
    .then(data => res.json(data))
    .catch(error => res.json(error));
});

export default router;
