export const required = value => value ? undefined : "The Field Is Required"
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined



export const minLengthCreator = (minLength) => (value) =>{
    if(value.length < minLength){
        return "Enter the correct value"
    }
    return undefined;
}

export const minLength12 = minLengthCreator(12)