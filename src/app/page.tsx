import { HomeContent } from '@/components'
import { getAllCountries } from '@/services/countries'

export default async function Home() {
  const countries = await getAllCountries()

  return <HomeContent countries={countries} />
}
