export const passwordRegExp = /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z0-9!-~]{8,20}$/;
export const passwordRegExpMessage = 'must be between 8 and 20 characters long and contain at least one uppercase letter, one lowercase letter, one digit and special characters';

export const nameRegExp = /^(?=.*[a-zA-Z])[a-zA-Z0-9éèêë.'-][a-zA-Z0-9éèêë.' -]{0,28}[a-zA-Z0-9éèêë.'-]$/;
export const nameRegExpMessage = "must be between 2 and 30 characters long and may only include letters, digits and special characters (-), (.), (')";
