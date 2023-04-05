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
export declare type GradeCreateFormInputValues = {
    grade?: number;
};
export declare type GradeCreateFormValidationValues = {
    grade?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GradeCreateFormOverridesProps = {
    GradeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    grade?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GradeCreateFormProps = React.PropsWithChildren<{
    overrides?: GradeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GradeCreateFormInputValues) => GradeCreateFormInputValues;
    onSuccess?: (fields: GradeCreateFormInputValues) => void;
    onError?: (fields: GradeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GradeCreateFormInputValues) => GradeCreateFormInputValues;
    onValidate?: GradeCreateFormValidationValues;
} & React.CSSProperties>;
export default function GradeCreateForm(props: GradeCreateFormProps): React.ReactElement;
