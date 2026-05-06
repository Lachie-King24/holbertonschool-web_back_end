import getListStudents from './0-get_list_students.js';
export default function getStudentIdsSum(student, id) {
    const students = getListStudents();
    return students.reduce((sum, student) => sum + student.id, 0);
}