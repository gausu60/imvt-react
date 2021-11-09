import React,{useState} from 'react'

export default function Seo(props) {
    const [title] = useState(props.title);
    document.title = title;
    return (
        <div>
            <section class="py-6">
            <div class ="container">
            <div class ="row mb-4 mb-md-5">
            <div class ="col-md-6 mb-4 mb-md-0">
            <img class ="img-fluid border-radius bg-img" src="images/bgimg/seo.jpeg" alt="" />
            </div>
            <div class ="col-md-6">
            <h4 class ="font-weight-bold">Search Engine Optimazation</h4>

            <p class ="mb-3" style={{textAlign:'justify'}}>Being a human of the 21st century, we want things to work at a pace that is increasing rapidly according to the demand and such high competition you need Search Engine Optimization (SEO) and IMVirtualTech is here to help you.</p>

            <p class ="mb-3" style={{textAlign:'justify'}}>Here our team ensures that we provide the best services that would make your website popular in just a span of few months.</p>

            <p class ="mb-3" style={{textAlign:'justify'}}>As SEO, SMM, SME, SMO is a crucial task, we have our finest team behind the scene at IMVirtualTech to ensure an enigmatic work.</p>

            </div>
            </div>

        </div>
    </section >
        </div >
    )
}
