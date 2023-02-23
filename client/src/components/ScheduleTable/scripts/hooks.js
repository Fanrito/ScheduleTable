import { reactive } from 'vue'

const data = reactive({
  schedule: [],
  duration: [],
  teacher: [],
  course: [],
  formData: []
})

export function useInitialData() {
  function setInitialData({ duration, schedule, course, teacher }) {
    data.duration = duration
    data.schedule = schedule
    data.course = course
    data.teacher = teacher
  }

  function setSchedule({ type, result }) {

  }

  return [data, setInitialData, setSchedule]
}

export function useFormData() {
  function setFormData(item) {
    data.formData = item
  }

  return [setFormData]
}
