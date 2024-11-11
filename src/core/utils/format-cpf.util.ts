export const REGEX_MASK_CPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
const REGEX_WITHOUT_MASK_CPF = /(\d{3})(\d{3})(\d{3})(\d{2})/

export function formatCpf(cpf: string) {
  return cpf.replace(REGEX_WITHOUT_MASK_CPF, '$1.$2.$3-$4')
}
