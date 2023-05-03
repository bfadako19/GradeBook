/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Grade } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GradeUpdateForm(props) {
  const {
    id: idProp,
    grade,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    int: "",
  };
  const [int, setInt] = React.useState(initialValues.int);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gradeRecord
      ? { ...initialValues, ...gradeRecord }
      : initialValues;
    setInt(cleanValues.int);
    setErrors({});
  };
  const [gradeRecord, setGradeRecord] = React.useState(grade);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Grade, idProp) : grade;
      setGradeRecord(record);
    };
    queryData();
  }, [idProp, grade]);
  React.useEffect(resetStateValues, [gradeRecord]);
  const validations = {
    int: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          int,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Grade.copyOf(gradeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GradeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Int"
        isRequired={false}
        isReadOnly={false}
        value={int}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              int: value,
            };
            const result = onChange(modelFields);
            value = result?.int ?? value;
          }
          if (errors.int?.hasError) {
            runValidationTasks("int", value);
          }
          setInt(value);
        }}
        onBlur={() => runValidationTasks("int", int)}
        errorMessage={errors.int?.errorMessage}
        hasError={errors.int?.hasError}
        {...getOverrideProps(overrides, "int")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || grade)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || grade) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
