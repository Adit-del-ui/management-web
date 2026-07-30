const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'please-change-this-secret'

function requireAuth(req, res, next) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Missing Authorization' })
  c

function requireAdmin(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Missing auth' })
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin required' })
  next()
}

module.exports = { requireAuth, requireAdmin }
