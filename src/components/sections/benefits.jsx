import React from 'react'
import benefits from '../../assets/img/benefits.JPG'

const Benefits = () => {
  return (
    <div className='p-[100px]'>
      <h3 className='font-ua_bold text-3xl md:text-5xl text-custom_grey mb-[50px]'>Що тобі дасть <span className='text-custom_orange'>курс:</span></h3>
      <div className='flex'>
        <div className='flex justify-between flex-col'>
            <p className='font-ua_regular text-md text-custom_grey text-left mt-[10px] md:mt-[20px]'>Визначитись, яка ціль твого інстаграму (ти в ньому продавати
                 збираєшся чи лайки рахувати?)</p>
            <p className='font-ua_regular text-md text-custom_grey text-left mt-[10px] md:mt-[20px]'>Навчишся розрізняти цілі в таргеті і використовувати необхідну для твоєї справи</p>
        </div>
        <div>
            <img src={benefits} alt="Benefits you get" />
        </div>
        <div className='flex justify-between flex-col'>
            <p className='font-ua_regular text-md text-custom_grey text-left mt-[10px] md:mt-[20px]'>Навчишся налаштовувати ефективну рекламу</p>
            <p className='font-ua_regular text-md text-custom_grey text-left mt-[10px] md:mt-[20px]'>Навчишся аналізувати результати і оптимізувати їх щоб продавати БІЛЬШЕ за МЕНШУ суму вкладень</p>
        </div>
    </div>
    </div>
  )
}

export default Benefits