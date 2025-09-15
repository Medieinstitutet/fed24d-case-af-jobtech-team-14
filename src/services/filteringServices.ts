import axios from 'axios'

export const getOccupationFields = async () => {
  const res = await axios.get(
    'https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?type=occupation-field',
  )
  const result = await res.data

  return result
}

export const getOccupationGroups = async (id: string) => {
  const res = await axios.get(
    `https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/ssyk?related-ids=${id}&type=ssyk-level-4&relation=narrower`,
  )
  const result = await res.data
  return result
}

export const getRegions = async () => {
  const res = await axios.get(
    'https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/region?related-ids=i46j_HmG_v64&relation=narrower',
  )
  const result = await res.data

  return result
}

export const getMunicipalities = async (id: string) => {
  const res = await axios.get(
    `https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/municipality?related-ids=${id}&relation=narrower`,
  )

  const result = await res.data

  return result
}
