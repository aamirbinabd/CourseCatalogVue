export interface Course {
  id: string
  shortCode: string
  title: string
  subtitle: string | null
  domain: string
  duration: string | null
  type: string | null
  level: string | null
  location: string | null
  prerequisites: string[]
  includedCourses: string[]
  description: string
  whatYouLearn: Array<{
    description: string
    coreConcepts: Array<{
      title: string
      details: string
    }>
  }>
  whatYouBecome: Array<{
    description: string
    jobTitles: string[]
  }>
  labInfrastructure: Array<{
    title: string
    items: Array<{
      title: string
      details: string | null
    }>
  }>
  keyFeatures: string[]
  deliveryOptions: Array<{
    type: string
    days: string | null
    duration: string
    sessionHours: string
  }>
  trainingModes: Array<{
    mode: string
    details: string
  }>
  trainingFee: {
    title: string
    discountedAmount: number
    originalAmount: number
    currency: string
  }
  whoIsThisCourseFor: string[]
  popularity: number | null
}
