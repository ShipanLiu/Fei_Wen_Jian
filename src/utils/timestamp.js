export default function timestamp() {
  const timestampArray = new Date().toISOString().split('T')[0].split('-')
  const timestamp =
    timestampArray[2] + '.' + timestampArray[1] + '.' + timestampArray[0]
  return timestamp
}
