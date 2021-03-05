module.exports = function (server, router) {
  server.get(`/provider-schedules/:id`, (req, res) => {
    const { id } = req.params;
    const data = router.db.get('provider-schedules');

    const provider = data.find(({ id: providerId }) => providerId === id).value();

    if (provider) {
      res.jsonp(provider);
    } else {
      res.sendStatus(404);
    }
  });
  server.put(`/provider-schedules/:id`, (req, res) => {
    const providerSchedulesData = router.db.get('provider-schedules');
    const { id } = req.params;
    const provider = req.body;

    const providerFound = providerSchedulesData
      .find(({ id: providerId }) => providerId === id)
      .value();

    if (providerFound) {
      const originalProviderIndex = providerSchedulesData
        .findIndex(({ id: providerId }) => providerId === id)
        .value();

      const updatedProvider = {
        ...providerFound,
        ...provider,
      };
      providerSchedulesData.splice(originalProviderIndex, 1, updatedProvider).write();
      res.jsonp(updatedProvider);
    } else {
      res.sendStatus(404);
    }
  });
  server.post('/provider-schedules', (req, res) => {
    const providerSchedulesData = router.db.get('provider-schedules');
    const provider = req.body;
    const createdProvider = {
      id: provider.providerId,
      createdAt: new Date().toISOString(),
      ...provider,
    };

    providerSchedulesData.push(createdProvider).write();

    res.status(201).jsonp(createdProvider);
  });
};
