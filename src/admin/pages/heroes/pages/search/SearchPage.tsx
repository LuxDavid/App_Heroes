import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "../../components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumbs currentPage="Buscador de héroe sy villanos"
        breadcrumbs={[
          {label: 'Home', to:'/' },
          {label: 'Home2', to:'/' },
          {label: 'Home3', to:'/' },
        ]}
      />

      {/*Stats DashBoard */}
      <HeroStats />

      {/* Search and Add Hero Section */}
      <SearchControls />
    </>
  )
}

export default SearchPage
