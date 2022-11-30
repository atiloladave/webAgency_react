import React from 'react'
import '../../styles/service.css'

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga ipsum recusandae eos distinctio!'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga ipsum recusandae eos distinctio!'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphic Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga ipsum recusandae eos distinctio!'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga ipsum recusandae eos distinctio!'
    },
]

const Service = () => {
  return <section id='service'>
    <div className="container">
        <div className="services__top-content">
            <h6 className="subtitle">Our Services</h6>
            <h2>Save time managing your business with</h2>
            <h2 className="highlight">our best services</h2>
        </div>

        <div className='service__item-wrapper'>
            {
                serviceData.map((item, index) => (
                    <div className="services__item" key={index}>
                <span className="service__icon">
                    <i class={item.icon}></i>
                </span>
                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
            </div>
                ))
            }
        </div>
    </div>
  </section>
}

export default Service