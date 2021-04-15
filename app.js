import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

// Basic route
app.get('/', (_, res) =>
  res.json({
    status: 'Success',
    message: 'Node app is running  on Docker 🐋',
  })
)

app.get('/hello', (_, res) =>
  res.json({
    status: 'Success',
    message: 'Hello Route',
  })
)

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
)
