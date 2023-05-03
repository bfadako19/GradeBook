/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssignmentCreateFormInputValues = {
    name?: string;
    dueDate?: string;
    totalPoints?: string;
};
export declare type AssignmentCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
    totalPoints?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssignmentCreateFormOverridesProps = {
    AssignmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
    totalPoints?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssignmentCreateFormProps = React.PropsWithChildren<{
    overrides?: AssignmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssignmentCreateFormInputValues) => AssignmentCreateFormInputValues;
    onSuccess?: (fields: AssignmentCreateFormInputValues) => void;
    onError?: (fields: AssignmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssignmentCreateFormInputValues) => AssignmentCreateFormInputValues;
    onValidate?: AssignmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssignmentCreateForm(props: AssignmentCreateFormProps): React.ReactElement;
