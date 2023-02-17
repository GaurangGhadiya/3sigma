import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import ContantFileHeader from '../Components/ContantFileHeader'
import FindOut from '../Components/FindOut'
import ImageCrousel from '../Components/ImageCrousel'
import ImageList from '../Components/ImageList'
import Maps from '../Components/Maps'
import PdfCarousel from '../Components/PdfCarousel'
import ShareCard from '../Components/ShareCard'
import TextBlock from '../Components/TextBlock'
import VideoCarousel from '../Components/VideoCarousel'

const SharedPageList = () => {
  return (
    <LoadingOverlay>
    <div style={{background : "white"}}>

    <ContantFileHeader userName="Vivek Rana" fileName="File name"/>
        <ImageList />
        <ImageList />
        <FindOut />
        <TextBlock />
        <PdfCarousel />
        <VideoCarousel />
        <Maps />
    <ShareCard />
    </div>
    
  </LoadingOverlay>
  )
}

export default SharedPageList