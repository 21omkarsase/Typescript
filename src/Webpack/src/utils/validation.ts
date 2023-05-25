//validating inputs
export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

export const validate = (validatableInput: Validatable): boolean => {
    let isValid = true;

    if (validatableInput.value) {
        isValid = isValid && validatableInput.value.toString().trim().length > 0;
    }

    if (validatableInput.minLength != null) {
        isValid = isValid && validatableInput.value.toString().length >= validatableInput.minLength;
    }

    if (validatableInput.maxLength != null) {
        isValid = isValid && validatableInput.value.toString().length <= validatableInput.maxLength;
    }

    if (validatableInput.min != null && typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    if (validatableInput.max != null && typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
}