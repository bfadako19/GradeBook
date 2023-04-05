// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Grade, AssignmentGrade, Student, Course, Assignment, StudentCourse, StudentAssignment } = initSchema(schema);

export {
  Grade,
  AssignmentGrade,
  Student,
  Course,
  Assignment,
  StudentCourse,
  StudentAssignment
};