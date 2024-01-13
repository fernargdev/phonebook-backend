const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')
const morgan = require('morgan')

const Person = require('./models/person')

morgan.token('body', (request) => JSON.stringify(request.body))

const uknownEnpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(cors())
app.use(express.json())
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
)
app.use(express.static('dist'))

app.get('/info', (request, response) => {
  response.send(
    `
    <p>
    Phonebook has info for ${persons.length} people 
    <br/><br/>
    ${new Date()}
    </p>
    `
  )
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find((person) => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.get('/api/persons', (request, response) => {})

const generateRandomId = () => Math.floor(Math.random() * 10000) + 1

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) return response.status(400).json({ error: 'name missing' })

  if (!body.number)
    return response.status(400).json({ error: 'number missing' })

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then((savedPerson) => {
    response.json(savedPerson)
  })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

app.use(uknownEnpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
})
