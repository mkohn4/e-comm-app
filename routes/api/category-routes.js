const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    //include everything from product table
    include: [Product],
  })
  .then(dbCategoryData => {
    console.log(dbCategoryData);
    res.json(dbCategoryData);
  })
  .catch(err => {
  console.log(err);
  res.status(400).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product],
  }).then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(404).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
        .then(dbCategoryPost => res.json(dbCategoryPost))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbCategoryUpdate => res.json(dbCategoryUpdate))
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbCategoryDelete => res.json(dbCategoryDelete))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
