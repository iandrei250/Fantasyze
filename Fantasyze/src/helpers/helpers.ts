export const createObjectURL = (file: File | null) => {
  return file ? URL.createObjectURL(file) : ''
}
