export function formatScheduleData(data) {
  return data.reduce((prev, cur) => {
    const durationTitle = cur.durationTitle
    const weekday = cur.weekday

    prev[`${durationTitle}_${weekday}`] = cur

    return prev
  }, {})
}