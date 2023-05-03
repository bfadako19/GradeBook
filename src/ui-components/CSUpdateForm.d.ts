/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CS } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CSUpdateFormInputValues = {
    courseID?: string;
};
export declare type CSUpdateFormValidationValues = {
    courseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CSUpdateFormOverridesProps = {
    CSUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    courseID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CSUpdateFormProps = React.PropsWithChildren<{
    overrides?: CSUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cS?: CS;
    onSubmit?: (fields: CSUpdateFormInputValues) => CSUpdateFormInputValues;
    onSuccess?: (fields: CSUpdateFormInputValues) => void;
    onError?: (fields: CSUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CSUpdateFormInputValues) => CSUpdateFormInputValues;
    onValidate?: CSUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CSUpdateForm(props: CSUpdateFormProps): React.ReactElement;
