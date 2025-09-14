import axios from 'axios'

export const getOccupationFields = async () => {
  const res = await axios.get(
    'https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?type=occupation-field',
  )
  const result = await res.data

  sessionStorage.setItem('occupation-field', JSON.stringify(result))
  return result
}
