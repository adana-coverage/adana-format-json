
export default function json(coverage, { pretty = false } = { }) {
  if (pretty) {
    return JSON.stringify(coverage, null, '  ');
  }
  return JSON.stringify(coverage);
}
