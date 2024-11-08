const prefixError = 'Ops!'

export const MessagesValidations = {
  IsUuid: (field: string) =>
    `${prefixError} O campo ${field} deve um UUID válido`,

  isNotBlank: (param: string) => `O campo ${param} não pode estar vazio`,

  maxLength: (param: string) =>
    `${param} só pode ter no máximo $constraint1 caracteres`,

  boolean: (param: string) => `${param} tem que ser um valor booleano.`,
}
