const prefixError = 'Ops!'

export const MessagesValidations = {
  isUuid: (field: string) =>
    `${prefixError} O campo ${field} deve um UUID válido`,

  isNotBlank: (param: string) => `O campo ${param} não pode estar vazio`,

  maxLength: (param: string) =>
    `O campo ${param} só pode ter no máximo $constraint1 caracteres`,

  boolean: (param: string) => `O campo ${param} tem que ser um valor booleano.`,

  number: (param: string) => `O campo ${param} tem que ser um valor numerico.`,

  fieldFormat: (param: string, format: string) =>
    `O campo ${param} tem que seguir o seguinte formato: ${format}`,

  string: (param: string) => `O campo ${param} tem que ser um valor string`,
}
