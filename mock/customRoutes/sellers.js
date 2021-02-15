const { getResultPageable } = require('../utils');

module.exports = function (server, router) {
  server.get(`/sellers`, (req, res) => {
    const data = router.db.get('sellers');

    const { data: pagedData, totalElements, totalPages } = getResultPageable(
      data,
      req.query
    );

    res.jsonp({
      content: pagedData,
      pageable: {
        pageNumber: req.query.page,
      },
      totalElements: totalElements,
      totalPages,
    });
  });
  server.get(`/sellers/:id`, (req, res) => {
    const { id } = req.params;
    const data = router.db.get('sellers');

    const seller = data.find(({ id: sellerID }) => sellerID === id).value();

    if (seller) {
      res.jsonp(seller);
    } else {
      res.sendStatus(404);
    }
  });
  server.put(`/sellers/:id`, (req, res) => {
    const sellersData = router.db.get('sellers');
    const { id } = req.params;
    const seller = req.body;

    const sellerFound = sellersData.find(({ id: sellerID }) => sellerID === id).value();

    if (sellerFound) {
      const originalSellerIndex = sellersData.indexOf(seller);
      const updatedSeller = {
        ...sellerFound,
        ...seller,
      };
      sellersData.splice(originalSellerIndex, 1, updatedSeller).write();
      res.jsonp(updatedSeller);
    } else {
      res.sendStatus(404);
    }
  });
  server.post('/sellers', (req, res) => {
    const sellersData = router.db.get('sellers');
    const seller = req.body;
    const createdSeller = {
      id: `${Math.round(Math.random() * 10000)}`,
      createdAt: new Date().toISOString(),
      ...seller,
    };

    sellersData.push(createdSeller).write();

    res.status(201).jsonp(createdSeller);
  });
};
