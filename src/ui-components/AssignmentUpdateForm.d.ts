/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Assignment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssignmentUpdateFormInputValues = {
    name?: string;
    dueDate?: string;
    totalPoints?: string;
};
export declare type AssignmentUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
    totalPoints?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssignmentUpdateFormOverridesProps = {
    AssignmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
    totalPoints?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssignmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssignmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    assignment?: Assignment;
    onSubmit?: (fields: AssignmentUpdateFormInputValues) => AssignmentUpdateFormInputValues;
    onSuccess?: (fields: AssignmentUpdateFormInputValues) => void;
    onError?: (fields: AssignmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssignmentUpdateFormInputValues) => AssignmentUpdateFormInputValues;
    onValidate?: AssignmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssignmentUpdateForm(props: AssignmentUpdateFormProps): React.ReactElement;
