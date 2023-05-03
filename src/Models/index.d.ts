import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerCS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseID: string;
  readonly Student?: Student | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cSStudentId?: string | null;
}

type LazyCS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseID: string;
  readonly Student: AsyncItem<Student | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cSStudentId?: string | null;
}

export declare type CS = LazyLoading extends LazyLoadingDisabled ? EagerCS : LazyCS

export declare const CS: (new (init: ModelInit<CS>) => CS) & {
  copyOf(source: CS, mutator: (draft: MutableModel<CS>) => MutableModel<CS> | void): CS;
}

type EagerStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly courses?: (CourseStudent | null)[] | null;
  readonly Grades?: (Grade | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly courses: AsyncCollection<CourseStudent>;
  readonly Grades: AsyncCollection<Grade>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Student = LazyLoading extends LazyLoadingDisabled ? EagerStudent : LazyStudent

export declare const Student: (new (init: ModelInit<Student>) => Student) & {
  copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

type EagerCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Students?: (CourseStudent | null)[] | null;
  readonly Assignments?: (CourseAssignment | null)[] | null;
  readonly CS?: (CS | null)[] | null;
  readonly CAS?: (CA | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Students: AsyncCollection<CourseStudent>;
  readonly Assignments: AsyncCollection<CourseAssignment>;
  readonly CS: AsyncCollection<CS>;
  readonly CAS: AsyncCollection<CA>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

type EagerAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly dueDate?: string | null;
  readonly totalPoints: string;
  readonly courses?: (CourseAssignment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly dueDate?: string | null;
  readonly totalPoints: string;
  readonly courses: AsyncCollection<CourseAssignment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Assignment = LazyLoading extends LazyLoadingDisabled ? EagerAssignment : LazyAssignment

export declare const Assignment: (new (init: ModelInit<Assignment>) => Assignment) & {
  copyOf(source: Assignment, mutator: (draft: MutableModel<Assignment>) => MutableModel<Assignment> | void): Assignment;
}

type EagerCA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseID: string;
  readonly Assignment?: Assignment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cAAssignmentId?: string | null;
}

type LazyCA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseID: string;
  readonly Assignment: AsyncItem<Assignment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cAAssignmentId?: string | null;
}

export declare type CA = LazyLoading extends LazyLoadingDisabled ? EagerCA : LazyCA

export declare const CA: (new (init: ModelInit<CA>) => CA) & {
  copyOf(source: CA, mutator: (draft: MutableModel<CA>) => MutableModel<CA> | void): CA;
}

type EagerGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly int?: string | null;
  readonly studentID: string;
  readonly courseName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly int?: string | null;
  readonly studentID: string;
  readonly courseName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grade = LazyLoading extends LazyLoadingDisabled ? EagerGrade : LazyGrade

export declare const Grade: (new (init: ModelInit<Grade>) => Grade) & {
  copyOf(source: Grade, mutator: (draft: MutableModel<Grade>) => MutableModel<Grade> | void): Grade;
}

type EagerCourseStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseStudent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentId?: string | null;
  readonly courseId?: string | null;
  readonly student: Student;
  readonly course: Course;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourseStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseStudent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentId?: string | null;
  readonly courseId?: string | null;
  readonly student: AsyncItem<Student>;
  readonly course: AsyncItem<Course>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CourseStudent = LazyLoading extends LazyLoadingDisabled ? EagerCourseStudent : LazyCourseStudent

export declare const CourseStudent: (new (init: ModelInit<CourseStudent>) => CourseStudent) & {
  copyOf(source: CourseStudent, mutator: (draft: MutableModel<CourseStudent>) => MutableModel<CourseStudent> | void): CourseStudent;
}

type EagerCourseAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseAssignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseId?: string | null;
  readonly assignmentId?: string | null;
  readonly course: Course;
  readonly assignment: Assignment;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourseAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseAssignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseId?: string | null;
  readonly assignmentId?: string | null;
  readonly course: AsyncItem<Course>;
  readonly assignment: AsyncItem<Assignment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CourseAssignment = LazyLoading extends LazyLoadingDisabled ? EagerCourseAssignment : LazyCourseAssignment

export declare const CourseAssignment: (new (init: ModelInit<CourseAssignment>) => CourseAssignment) & {
  copyOf(source: CourseAssignment, mutator: (draft: MutableModel<CourseAssignment>) => MutableModel<CourseAssignment> | void): CourseAssignment;
}