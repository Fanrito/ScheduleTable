import { httpGet, httpPost } from '../../../libs/http.js'
import { formatScheduleData } from './utils.js'

export async function getInitialData() {
  const { schedule, duration, course, teacher } = await httpGet('http://localhost:3000/initial_data')

  return Promise.resolve({
    schedule: formatScheduleData(schedule),
    duration,
    course,
    teacher
  })
}
