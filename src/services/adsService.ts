import axios from 'axios'
import type { SearchModel } from '../models/searchModel'

export const getAds = async ({
  query,
  selectedRegions,
  selectedMunicipalities,
  selectedFields,
  selectedGroups,
}: SearchModel) => {
  const params: Record<string, unknown> = {
    offset: 0,
    limit: 10,
  }
  if (query && query.length > 0) {
    params.q = query
  }

  if (selectedRegions && selectedRegions.length > 0) {
    params.region = Array.isArray(selectedRegions)
      ? selectedRegions
      : [selectedRegions]
  }
  if (selectedMunicipalities && selectedMunicipalities.length > 0) {
    params.municipality = Array.isArray(selectedMunicipalities)
      ? selectedMunicipalities
      : [selectedMunicipalities]
  }
  if (selectedFields && selectedFields.length > 0) {
    params['occupation-field'] = Array.isArray(selectedFields)
      ? selectedFields
      : [selectedFields]
  }
  if (selectedGroups && selectedGroups.length > 0) {
    params['occupation-group'] = Array.isArray(selectedGroups)
      ? selectedGroups
      : [selectedGroups]
  }

  const res = await axios.get('https://jobsearch.api.jobtechdev.se/search', {
    params,
    paramsSerializer: {
      indexes: null,
    },
  })

  return res.data
}
