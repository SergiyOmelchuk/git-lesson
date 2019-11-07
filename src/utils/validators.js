export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthControlerConstructor = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}