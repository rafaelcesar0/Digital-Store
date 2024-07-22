import Layout from "../components/Layout"
import Gallery from "../components/gallery/Gallery"
import SlideImage from "../components/gallery/SlideImage"

const HomePage = () => {
  return (
    <Layout>
        <Gallery images={SlideImage}/>
    </Layout>
  )
}

export default HomePage