import React from 'react'
import whoFirst from '../../assets/img/whoFirst.JPG'
import whoSecond from '../../assets/img/whoSecond.JPG'

const ForWho = () => {
    return (
        <div className='p-[20px] md:p-[100px]'>
            <h3 className='font-ua_bold text-3xl md:text-5xl text-custom_grey'>Для кого?</h3>
            <div className='block md:flex mt-[20px] md:mt-[50px]'>
                <div>
                    <img src={whoFirst} className="w-[300px] h-[225px] my-0 mx-auto" alt="whoFirst" />
                    <p className='font-ua_regular text-md text-custom_grey text-left mt-[10px] md:mt-[20px]'>Для підприємців, фрілансерів, людей які працюють самі на себе, НЕ МАЮТЬ сайту, і продають або ХОЧУТЬ продавати через соцмережі</p>
                </div>
                <div>
                    <img src={whoSecond} className="w-[300px] h-[225px]  my-0 mx-auto" alt="whoSecond" />
                    <p className='font-ua_regular text-md text-custom_grey text-left mt-[10px] md:mt-[20px]'>Для SMM, маркетологів які хочуть вміти налаштовувати таргет  для своїх клієнтів та розбиратись в рекламному кабінеті фейсбук</p>
                </div>
            </div>
        </div>
    )
}

export default ForWho