import { JobList } from '../components/JobList'
import { LatestSearchAndSavedAdsButtons } from '../components/LatestSearchAndSavedAdsButtons'

export const Jobs = () => {
  return (
    <>
      <LatestSearchAndSavedAdsButtons />
      <JobList />
    </>
  )
}
