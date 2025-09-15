import Header from '../components/Header/Header'
import { JobList } from '../components/JobList'
import { LatestSearchAndSavedAdsButtons } from '../components/LatestSearchAndSavedAdsButtons'

export const Jobs = () => {
  return (
    <>
      <Header />
      <LatestSearchAndSavedAdsButtons />
      <JobList />
    </>
  )
}
