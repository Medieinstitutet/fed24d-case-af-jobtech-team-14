import axios from 'axios'

export const getOccupationFields = async () => {
  try {
    const res = await axios.get(
      'https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?type=occupation-field',
    )
    const result = await res.data
    return result
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.message, err.response?.data)
    } else {
      console.error('Unexpected error:', err)
    }
    throw err
  }
}

export const getOccupationGroups = async (id: string) => {
  try {
    const res = await axios.get(
      `https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/ssyk?related-ids=${id}&type=ssyk-level-4&relation=narrower`,
    )
    const result = await res.data
    return result
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.message, err.response?.data)
    } else {
      console.error('Unexpected error:', err)
    }
    throw err
  }
}

export const getRegions = async () => {
  try {
    const res = await axios.get(
      'https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/region?related-ids=i46j_HmG_v64&relation=narrower',
    )
    const result = await res.data
    return result
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.message, err.response?.data)
    } else {
      console.error('Unexpected error:', err)
    }
    throw err
  }
}

export const getMunicipalities = async (id: string) => {
  try {
    const res = await axios.get(
      `https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/municipality?related-ids=${id}&relation=narrower`,
    )
    const result = await res.data
    return result
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.message, err.response?.data)
    } else {
      console.error('Unexpected error:', err)
    }
    throw err
  }
}
