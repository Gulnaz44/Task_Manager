const notFound = (req, res) => res.status(404).send('Route does nao exist')

module.exports = notFound
