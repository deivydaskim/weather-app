import placeholder from '/icons/cloud-error-illustration.svg';

const CurrentWeather = () => {
  return (
    <section className='flex justify-between h-40 text'>
      <div className='flex flex-col justify-between py-2'>
        <p className='text-gray-900/60'>2nd Feb, Friday</p>
        <h1 className='text-4xl text-gray-900/90 font-["NunitoSemiBold"]'>City Name</h1>
        <h2 className='text-6xl text-gray-900/90 font-["NunitoBold"]'>16° -1°</h2>
      </div>
      <img src={placeholder} alt="" />
    </section>
  )
} 

export default CurrentWeather;