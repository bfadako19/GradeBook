// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CS, Student, Course, Assignment, Grade, CA, CourseStudent, CourseAssignment } = initSchema(schema);

export {
  CS,
  Student,
  Course,
  Assignment,
  Grade,
  CA,
  CourseStudent,
  CourseAssignment
};