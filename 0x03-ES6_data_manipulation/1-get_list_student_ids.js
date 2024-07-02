export default function getListStudentIds(args) {
  if (Array.isArray(args) === false) {
    return [];
  }
  return args.map((idReturn) => idReturn.id);
}
