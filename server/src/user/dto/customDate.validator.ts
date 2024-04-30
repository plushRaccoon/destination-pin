import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customDate', async: false })
export class CustomDateValidator implements ValidatorConstraintInterface {
  validate(value: string) {

    const date = new Date(value);

    return date < new Date();
  }

  defaultMessage() {
    return `The date greater than the current date.`;
  }
}
