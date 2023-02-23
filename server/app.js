const express = require('express')
const bodyParser = require('body-parser')
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//跨域配置
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST')
  next()
})

const duration = JSON.parse(readFileSync(resolve(__dirname, 'data/duration.json'), 'utf8'))
const course = JSON.parse(readFileSync(resolve(__dirname, 'data/course.json'), 'utf8'))
const teacher = JSON.parse(readFileSync(resolve(__dirname, 'data/teacher.json'), 'utf8'))

app.get('/initial_data', (req, res) => {
  const schedule = JSON.parse(readFileSync(resolve(__dirname, 'data/schedule.json'), 'utf8'))
  res.json({
    code: 0,
    msg: 'ok',
    data: {
      schedule,
      duration,
      course,
      teacher
    }
  })
})

app.listen(3000, () => {
  console.log('ok');
})
