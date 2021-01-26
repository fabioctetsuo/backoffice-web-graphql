const getSortedData = (data, sort) => {
  if (sort) {
    const [field, order] = sort.split(',');
    return data.orderBy(field, order);
  }

  return data.orderBy('createdAt', 'desc');
};

const getPage = (data, page, perPage) => {
  var start = page * perPage;
  var end = (page + 1) * perPage;

  const dataValues = data.value();

  const pagedData = dataValues.slice(start, end);

  return {
    data: pagedData,
    totalElements: dataValues.length,
    totalPages: dataValues.length / perPage >= 1 ? dataValues.length / perPage : 1,
  };
};

const getItemById = (data, id) =>
  data.find(item => {
    return item.id == id;
  });

const usePageableApi = (server, router, resourceName) => {
  server.get(`/${resourceName}`, (req, res) => {
    const { page, size, sort } = req.query;

    const data = router.db.get(resourceName);
    const sortedData = getSortedData(data, sort);

    const { data: pagedData, totalElements, totalPages } = getPage(
      sortedData,
      page,
      size
    );

    res.jsonp({
      content: pagedData,
      pageable: {
        pageNumber: page,
      },
      totalElements,
      totalPages,
    });
  });
};

exports.getSortedData = getSortedData;
exports.getPage = getPage;
exports.getItemById = getItemById;
exports.usePageableApi = usePageableApi;
