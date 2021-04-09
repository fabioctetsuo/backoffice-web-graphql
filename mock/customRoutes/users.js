const { getResultPageable } = require('../utils');
const { getItemById } = require('../utils');

const ROLES = {
  admin: {
    description: 'Admin',
    name: 'admin',
  },
  'platform-admin': {
    description: 'Platform Admin',
    name: 'platform-admin',
  },
  'hh-pharma': {
    description: 'Health Hub Pharmacist',
    name: 'hh-pharma',
  },
  'hh-staff': {
    description: 'Health Hub Attendant',
    name: 'hh-staff',
  },
};

module.exports = function (server, router) {
  server.get(`/users`, (req, res) => {
    const data = router.db.get('users');

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
  server.get('/users/:id', (req, res) => {
    const userData = getItemById(router.db.get('users'), req.params.id);
    const user = userData.value();
    const payload = { ...user };
    res.jsonp(payload);
  });
  server.post('/users', (req, res) => {
    const user = req.body;
    const usersData = router.db.get('users');

    const userAlreadyExists = usersData.find(item => item.email == user.email);
    if (userAlreadyExists.value()) {
      return res.status(409).jsonp({ message: 'Email já cadastrado' });
    }

    const userRoles = user.roles.map(role => ROLES[role]);
    if (userRoles.indexOf(undefined) !== -1) {
      return res.status(409).jsonp({ message: 'Alguma role não existe' });
    } else {
      const createdUser = {
        id: `${Math.round(Math.random() * 10000)}`,
        ...user,
        roles: [...userRoles],
      };

      usersData.push(createdUser).write();

      return res.status(201).jsonp(createdUser);
    }
  });
  server.patch(`/users/:id`, (req, res) => {
    const usersData = router.db.get('users');
    const { id } = req.params;
    const user = req.body;

    const userFound = usersData.find(({ id: userID }) => userID === id).value();

    if (userFound) {
      const originalUserIndex = usersData
        .findIndex(({ id: userID }) => userID === id)
        .value();

      const updatedUser = {
        ...userFound,
        ...user,
      };
      usersData.splice(originalUserIndex, 1, updatedUser).write();
      res.jsonp(updatedUser);
    } else {
      res.sendStatus(404);
    }
  });
  server.put('/users/:id/roles', (req, res) => {
    const usersData = router.db.get('users');
    const { id } = req.params;
    const { roles } = req.body;

    const userFound = usersData.find(({ id: userID }) => userID === id).value();

    if (userFound) {
      const userRoles = roles ? roles.map(role => ROLES[role]) : [];
      if (userRoles && userRoles.indexOf(undefined) !== -1) {
        return res.status(409).jsonp({ message: 'Alguma role não existe' });
      } else {
        const originalUserIndex = usersData
          .findIndex(({ id: userID }) => userID === id)
          .value();

        const updatedUser = {
          ...userFound,
          roles: [...userRoles],
        };
        usersData.splice(originalUserIndex, 1, updatedUser).write();
        res.jsonp(updatedUser);
      }
    } else {
      res.sendStatus(404);
    }
  });
};
