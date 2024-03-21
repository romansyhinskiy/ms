import React from 'react'
import intro from '../../assets/img/intro.JPG'
import FormSection from './form'

const IntroSection = () => {
    return (
        <div className='block md:flex p-[20px] md:p-[100px]'>
            <div>
                <img src={intro} alt="" />
            </div>
            <div>
                <h3 className='font-ua_bold text-3xl md:text-5xl text-custom_grey text-left'>Експерс курс <br /><span className='text-custom_orange'>"ТЕСТОВА НАЗВА"</span></h3>
                <p className='font-ua_regular text-xl text-custom_grey text-left mt-[10px] md:mt-[20px]'>Для підприємців, фрілансерів, людей які працюють самі на себе, НЕ МАЮТЬ САЙТУ, і продають або хочуть продавати через соцмережі.</p>
                <FormSection />
            </div>
        </div>
    )
}

export default IntroSection