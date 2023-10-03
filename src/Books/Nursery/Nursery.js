import React from 'react'
import InnerGrid from '../../Category/InnerGrid'
import ClassCard from '../../components/ClassCard'
import NurseryData from './Nursery.json'
// import PDFDisplay from '../../utils/PdfDisplay'
const classNameForPdf = "Nursery"; 

const Nursery = () => {
  
  return (
    <>
      <div className="category-books-section pt-9 md:pt-20  h-fit bg-[#f3f3f3]">
        <div className="container w-[90%] px-[15px] mx-auto before:content-[''] after:content-['']">
          <div className="row before:content-[''] after:content-[''] mx-[-15px] w-full ">
            {/* pghead */}
            <div className='w-full'>
              <h3 className="pghead text-center mb-[20px] font-sans font-bold uppercase text-2xl">CLass Nursery-Books</h3>
            </div>
           <div className="nursery-books flex columns-4 flex-wrap gap-3 mx-auto">
           {
              NurseryData.map((nurserybook,id)=>{
                return(
                  <ClassCard  bookname={nurserybook.BookName} url={nurserybook.BookNameurl}   classNameForPdf={classNameForPdf} fileId={nurserybook.fileId} />
                )
              })
            }
           </div>
            {/* innergrid */}
            <InnerGrid />
          </div>
        </div>

      </div>
    </>
  )
}

export default Nursery
