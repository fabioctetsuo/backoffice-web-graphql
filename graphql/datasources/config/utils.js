const { pickBy } = require('lodash');

const reducerPageableApi = ({
  content,
  pageable: { pageNumber },
  totalElements,
  totalPages,
}) => {
  return {
    content,
    page: pageNumber,
    totalElements,
    totalPages,
  };
};

const queryParams = allParams =>
  pickBy(allParams, value => {
    return value !== null;
  });

exports.reducerPageableApi = reducerPageableApi;
exports.getQueryParams = queryParams;
