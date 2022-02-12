interface Validation {
  warning(message: string): Function
  error(message: string): Function
}

export interface StringValidation {
  required(): Function
  min(minLength: number): Validation
  max(maxLength: number): Validation
  length(exactLength: number): Function
  uppercase(): Function
  lowercase(): Function
  regex(pattern: RegExp, [options]?): Validation
  custom(fn: any): Function
}
