const { getResultPageable } = require('../utils');

module.exports = function (server, router) {
  server.get(`/health-hub-services`, (req, res) => {
    const data = router.db.get('health-hub-services');

    const filteredData = req.query.type
      ? data.filter(service => service.type === req.query.type)
      : data;

    const { data: pagedData, totalElements, totalPages } = getResultPageable(
      filteredData,
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
};
