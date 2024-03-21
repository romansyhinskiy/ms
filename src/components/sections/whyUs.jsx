import React from 'react'
import whyUs from '../../assets/img/whyUs.JPG'
const WhyUs = () => {
    return (
        <div className='block md:flex p-[20px] md:p-[100px] bg-bg_grey'>
            <div>
                <h3 className='font-ua_bold text-3xl md:text-5xl text-custom_grey text-center'><span className='text-custom_orange'>Чому</span> ми?</h3>
                <p className='font-ua_regular text-xl text-custom_grey text-left mt-[10px] md:mt-[20px]'>Працюємо на результат, даємо стабільний потік клієнтів та допомагаємо рости. Більше 6 років досвіду</p>
                <p className='font-ua_regular text-xl text-custom_grey text-left mt-[10px] md:mt-[20px]'>Команда професіоналів з різними суперсилами: маркетологи,  таргетологи, ppc-спеціалісти, дизайнери.</p>
                <p className='font-ua_regular text-xl text-custom_grey text-left mt-[10px] md:mt-[20px]'>Ми повністю занурюємось в деталі, проймаємся продуктом/послугою, адже стаємо частинкою вашої команди.</p>
            </div>
            <div className='mt-[20px] md:mt-[0px]'><img src={whyUs} alt="" /></div>
        </div>
    )
}

export default WhyUs