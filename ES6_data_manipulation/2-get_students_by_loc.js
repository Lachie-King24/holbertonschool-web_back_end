import getListStudents from './0-get_list_students'
export default function getStudentsByLocation(city) {
    const students = getListStudents();
    return students.filter((student) => student.location === city);
}