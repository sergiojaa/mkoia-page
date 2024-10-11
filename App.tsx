import logo from './assets/mkoia-logo.jpeg'
import firstPhoto from './assets/image-19.png'
import thirdLogo from './assets/image-3.jpg'
function App() {

  return (
    <>
    <div className="flex  justify-between	">
      <img className='ml-40 w-[180px] mt-4  ' src={logo} alt="" />
      <ul className='flex mr-40 m-10 text-[25px] cursor-pointer text-blue-700'>
        <li className='mr-10  '>Home</li>
        <li>about</li>
        <li className='ml-10  '>contact</li>
        <li className='ml-10 '>Services</li>
      </ul>
    </div>
    <div className='flex '>
      <div className='ml-[200px] mt-[80px]'>
      <h1 className='text-blue-700 text-[25px] ml-[250px] mb-[10px] '>building company</h1>
      <h1 className='text-blue-700 text-[25px] ml-[160px] mb-[5px] '>Reliable Building Solutions, Delivered</h1>
      <h1 className='text-blue-700 text-[25px] ml-[190px] '>Complete Building Services for <br /> Homes  and Businesses in Georgia</h1>

      </div>
    
      <div>
        <img className='w-[500px] ml-[100px] ' src={firstPhoto} alt="" />
      </div>
    </div>
    <div className='flex mt-[200px] mb-[100px] ml-[300px]  '>
      <div className='w-[50%]  '>
        <p className='w-[500px] text-lg'>Logistics company Emkoya, specialized in construction materials logistics. Our main commitment is to complete your projects on time accordingly, the company's motto is to deliver the product on the same day, no delays. Time is the most important thing for the company, so we work tirelessly to meet your needs. Emkoya's capabilities include delivery of any type and size of product within a few hours. Also, the company has the opportunity to bring you any building materials from China and Turkey. We work for both large contractors and private individuals. To order, contact us "go directly to the contact section here".</p>
      </div>
      <div>
        <img className='w-[500px]  ' src={thirdLogo} alt="" />
      </div>
    </div>
    <div className='flex '>
      <div className='ml-[300px]'>
        <h1 className='text-[40px] '>contact information:</h1>
        <h1 className='text-[21px] mt-[10px]' > Tel: 032 2 35 60 01 + 995 598 35 60 01 </h1>
        <h1 className='text-[22px] mt-[10px]' > E-mail: kotemchedlishvili@gmail.com </h1>
        <h1 className='text-[22px] mt-[10px]'>Tbilisi, Tsereteli Avenue N126;</h1>
      </div>
      
      <div>
        <iframe className='w-[500px] ml-[290px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.4223892759487!2d44.806561411998594!3d41.68981647114321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf72d903d4f%3A0xdd66176bec24ee12!2z4YOb4YOU4YOY4YOT4YOc4YOY4YOhIOGDkeGDkOGDluGDkOGDoOGDmA!5e0!3m2!1ska!2sge!4v1728653218344!5m2!1ska!2sge" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </div>
    </>
  )
}

export default App
