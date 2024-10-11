import logo from './assets/mkoia-logo.jpeg'
// import firstPhoto from './assets/image-19.png'
// import thirdLogo from './assets/image-3.jpg'
import logisticPhoto from './assets/logistic.jpg'
function App() {

  return (
    <>
    <div className='min-h-screen bg-cover bg-center' style={{backgroundImage: `url(${logisticPhoto})` }}>
    <div className="flex  justify-between	">
      <img className='ml-40 w-[180px] mt-4  ' src={logo} alt="" />
      <ul className='flex mr-40 m-10 text-[25px] cursor-pointer text-blue-700'>
        <li className='mr-10  '>ჩვენს შესახებ</li>
        
        <li className='ml-10  '>სერვისი</li>
        <li className='ml-10 '>კონტაქტი</li>
      </ul>
    </div>
    <div className=' flex justify-center' >
      <div  >
        <div  >
          <h1 className='text-[25px] ml-[8em]' >ჩვენს შესახებ</h1>
        </div>
        <div>
          <p className='w-[800px] text-[23px]'>ლოჯისტიკური კომპანია ემკოია , სპეციალიზირებული სამშენებლო მასალების ლოჯისტიკაში . ჩვენი მთავარი ვალდებულებაა , რომ თქვენი პროექტები დასრულდეს დროულად შესაბამისად , კომპანიის ნიშაა პროდუქტის მიწოდება იმავე დღეს , არანაირი გადავადება . კომპანიისთვის უპირველესია დრო , შესაბამისად დაუღალავად ვშრომობთ თქვენი საჭიროებების დასაკმაყოფილებლად. ემკოიას შესაძლებლობებში შედის ნებისმიერი სახის და ზომის პროდუქტის მიწოდება უმოკლეს დროში. ასევე კომპანიას აქვს საშუალება ჩამოგიტანოთ ნებისმიერი სამშენებლო მასალა ჩინეთიდან და თურქეთიდან . ვმუშაობთ როგორც მსხვილ კონტრაქტორებზე ასევე კერძო პირებზე . შესაკვეთად დაგვიკავშირდით „აქ გადადიოდეს პირდაპირ კონტაქტის მონაკვეთზე“. </p>

        </div>
    </div>
    </div>
    
    <div className='flex mt-[100px] '>
      <div className='ml-[300px]'>
        <h1 className='text-[35px] '>საკონტაქტო ინფორმაცია:</h1>
        <h1 className='text-[21px] mt-[10px]' > Tel: 032 2 35 60 01 + 995 598 35 60 01 </h1>
        <h1 className='text-[22px] mt-[10px]' > E-mail: kotemchedlishvili@gmail.com </h1>
        <h1 className='text-[22px] mt-[10px]'>Tbilisi, Tsereteli Avenue N126;</h1>
      </div>
      
      <div>
      <iframe  className='w-[500px] ml-[200px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.196084004257!2d44.774876712000754!3d41.73786327113755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472eb6dc34267%3A0xa773d9d16aaf76e1!2zNTkgUmFmYWVsIEFnbGFkemUgU3QsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmCAwMTE5!5e0!3m2!1ska!2sge!4v1728671400247!5m2!1ska!2sge" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </div>
    <div  >
      <div className='flex justify-center '>
        <h1 className='text-[25px] mt-[100px]  ' >სერვისი</h1>
      </div>
      <div>
        <h2 className='ml-[380px] mt-8 text-[20px]'>ჩვენ გთავაზობთ სამშენებლო მასალების ლოჯისტიკას , უმოკლეს დროში. მაგალითად:</h2>
      </div>
      <div className='ml-[480px] text-[20px] mt-[20px] '>
      
        <p className='pt-[10px]'>1. პლასტმასის წყლისა და კანალიზაციის მილები, შესაბამისი ფიტინგებით</p>
        <p className='pt-[10px]'>2. პოლიეთილენის მილები შესაბამისი ფიტინგებით</p>
        <p className='pt-[10px]'>3. ცემენტი როგორც მ-400 ასევე მ-500</p>
        <p className='pt-[10px]'>4. წებოცემენტი ნებისმიერი სახის </p>
        <p className='pt-[10px]'>5. საღებავები</p>
        <p className='pt-[10px]'>6. იმპორტული ლამინატი</p>
        <p className='pt-[10px]'>7. იმპორტული არმსტრონგის შეკიდული ჭერი</p>
        <p className='pt-[10px]'>8. სარკეები</p>
        <p className='pt-[10px]'>9. სააბაზანო აქსესუარები</p>
        <p className='mb-[150px] pt-[10px]'>და ა.შ</p>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
