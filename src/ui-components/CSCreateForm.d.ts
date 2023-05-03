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
export declare type CSCreateFormInputValues = {
    courseID?: string;
};
export declare type CSCreateFormValidationValues = {
    courseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CSCreateFormOverridesProps = {
    CSCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    courseID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CSCreateFormProps = React.PropsWithChildren<{
    overrides?: CSCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CSCreateFormInputValues) => CSCreateFormInputValues;
    onSuccess?: (fields: CSCreateFormInputValues) => void;
    onError?: (fields: CSCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CSCreateFormInputValues) => CSCreateFormInputValues;
    onValidate?: CSCreateFormValidationValues;
} & React.CSSProperties>;
export default function CSCreateForm(props: CSCreateFormProps): React.ReactElement;
