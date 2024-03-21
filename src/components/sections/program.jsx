import React from 'react'
import program from '../../assets/img/program.JPG'

const Program = () => {
  return (
    <div className='p-[100px]'>
        <h3 className='font-ua_bold text-3xl md:text-5xl text-custom_grey mb-[50px]'><span className='text-custom_orange'>Програма</span> курсу:</h3>
        <div className='flex'>
            <div>
                <img src={program} alt="Course program" />
            </div>
            <div>
                <p className='font-ua_regular text-sm text-custom_grey text-left mb-[5px]'><span className='text-custom_orange'>1.</span> Вступ. Створення бізнес менеджера, рекламного кабінету. Структура рекламного кабінету (технічна інформація). Способи оплати</p>
                <p className='font-ua_regular text-sm text-custom_grey text-left mb-[5px]'><span className='text-custom_orange'>2.</span> Розглядаємо Цілі (на цьому курсі розглядаємо: Впізнаваність,Трафік, Лідогенерація, Взаємодія),розбираємо,яка з них які результати принесе і як обрати собі правильну ціль</p>
                <p className='font-ua_regular text-sm text-custom_grey text-left mb-[5px] underline'>(!) На цьому курсі питання САЙТУ і всіх цілей пов'язаних з останнім - не розглядаються! </p>
                <p className='font-ua_regular text-sm text-custom_grey text-left mb-[5px]'><span className='text-custom_orange'>3.</span> Налаштування реклами (цілі, аудиторія), запуск реклами через додаток Instagram</p>
                <p className='font-ua_regular text-sm text-custom_grey text-left mb-[5px]'><span className='text-custom_orange'>4.</span> Креативи - розглядаємо в двох аспектах: <br />
                    <ul>
                        <li>аналіз конкурентів для розуміння того, як продають конкуренти в твоїй ніші</li>
                        <li>“а що краще працює відео чи фото?” - вчимось відповідати собі на це питання спираючись на аналітику</li>
                    </ul>
                </p>
                <p className='font-ua_regular text-sm text-custom_grey text-left mb-[5px]'><span className='text-custom_orange'>5.</span> Як аналізувати рекламу і як оптимізувати рекламу</p>
                <p className='font-ua_regular text-sm text-custom_grey text-left mb-[5px]'><span className='text-custom_orange'>6.</span> Заключний прямий ефір: відповіді на запитання в чаті і поставлені в прямому ефірі</p>
            </div>
        </div>
    </div>
  )
}

export default Program