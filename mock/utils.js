const getSortedData = (data, sort) => {
  if (sort) {
    const [field, order] = sort.split(',');
    return data.orderBy(field, order);
  }

  return data.orderBy('createdAt', 'desc');
};

const getPage = (data, page, perPage) => {
  const dataValues = data.value();

  if (page && perPage) {
    var start = page * perPage;
    var end = (page + 1) * perPage;

    const pagedData = dataValues.slice(start, end);

    return {
      data: pagedData,
      totalElements: dataValues.length,
      totalPages: dataValues.length / perPage >= 1 ? dataValues.length / perPage : 1,
    };
  }

  return {
    data: dataValues,
    totalElements: dataValues.length,
    totalPages: dataValues.length / perPage >= 1 ? dataValues.length / perPage : 1,
  };
};

const getItemById = (data, id) =>
  data.find(item => {
    return item.id == id;
  });

const getResultPageable = (data, queryParams) => {
  const { page, size, sort } = queryParams;

  const sortedData = getSortedData(data, sort);

  return getPage(sortedData, page, size);
};

const usePageableApi = (server, router, resourceName) => {
  server.get(`/${resourceName}`, (req, res) => {
    const data = router.db.get(resourceName);

    const { data: pagedData, totalElements, totalPages } = getResultPageable(
      data,
      resourceName,
      req.query
    );

    res.jsonp({
      content: pagedData,
      pageable: {
        pageNumber: req.query.page,
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
exports.getResultPageable = getResultPageable;
