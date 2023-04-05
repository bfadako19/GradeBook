import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grade?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grade?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grade = LazyLoading extends LazyLoadingDisabled ? EagerGrade : LazyGrade

export declare const Grade: (new (init: ModelInit<Grade>) => Grade) & {
  copyOf(source: Grade, mutator: (draft: MutableModel<Grade>) => MutableModel<Grade> | void): Grade;
}

type EagerAssignmentGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssignmentGrade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assignmentID: string;
  readonly Grade?: Grade | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assignmentGradeGradeId?: string | null;
}

type LazyAssignmentGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssignmentGrade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assignmentID: string;
  readonly Grade: AsyncItem<Grade | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assignmentGradeGradeId?: string | null;
}

export declare type AssignmentGrade = LazyLoading extends LazyLoadingDisabled ? EagerAssignmentGrade : LazyAssignmentGrade

export declare const AssignmentGrade: (new (init: ModelInit<AssignmentGrade>) => AssignmentGrade) & {
  copyOf(source: AssignmentGrade, mutator: (draft: MutableModel<AssignmentGrade>) => MutableModel<AssignmentGrade> | void): AssignmentGrade;
}

type EagerStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly Year?: string | null;
  readonly Courses?: (StudentCourse | null)[] | null;
  readonly Assignments?: (StudentAssignment | null)[] | null;
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
  readonly Year?: string | null;
  readonly Courses: AsyncCollection<StudentCourse>;
  readonly Assignments: AsyncCollection<StudentAssignment>;
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
  readonly Assignments?: (Assignment | null)[] | null;
  readonly students?: (StudentCourse | null)[] | null;
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
  readonly Assignments: AsyncCollection<Assignment>;
  readonly students: AsyncCollection<StudentCourse>;
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
  readonly totalPoints: number;
  readonly courseID: string;
  readonly students?: (StudentAssignment | null)[] | null;
  readonly AssignmentGrades?: (AssignmentGrade | null)[] | null;
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
  readonly totalPoints: number;
  readonly courseID: string;
  readonly students: AsyncCollection<StudentAssignment>;
  readonly AssignmentGrades: AsyncCollection<AssignmentGrade>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Assignment = LazyLoading extends LazyLoadingDisabled ? EagerAssignment : LazyAssignment

export declare const Assignment: (new (init: ModelInit<Assignment>) => Assignment) & {
  copyOf(source: Assignment, mutator: (draft: MutableModel<Assignment>) => MutableModel<Assignment> | void): Assignment;
}

type EagerStudentCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentCourse, 'id'>;
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

type LazyStudentCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentCourse, 'id'>;
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

export declare type StudentCourse = LazyLoading extends LazyLoadingDisabled ? EagerStudentCourse : LazyStudentCourse

export declare const StudentCourse: (new (init: ModelInit<StudentCourse>) => StudentCourse) & {
  copyOf(source: StudentCourse, mutator: (draft: MutableModel<StudentCourse>) => MutableModel<StudentCourse> | void): StudentCourse;
}

type EagerStudentAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentAssignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentId?: string | null;
  readonly assignmentId?: string | null;
  readonly student: Student;
  readonly assignment: Assignment;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudentAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentAssignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentId?: string | null;
  readonly assignmentId?: string | null;
  readonly student: AsyncItem<Student>;
  readonly assignment: AsyncItem<Assignment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StudentAssignment = LazyLoading extends LazyLoadingDisabled ? EagerStudentAssignment : LazyStudentAssignment

export declare const StudentAssignment: (new (init: ModelInit<StudentAssignment>) => StudentAssignment) & {
  copyOf(source: StudentAssignment, mutator: (draft: MutableModel<StudentAssignment>) => MutableModel<StudentAssignment> | void): StudentAssignment;
}