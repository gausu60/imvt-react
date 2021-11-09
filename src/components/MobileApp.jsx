import React,{useState} from 'react'

export default function MobileApp(props) {
    const [title] = useState(props.title);
    document.title = title;
    return (
        <div>
            <section class="py-6">
                <div class="container">
                    <div class="row mb-4 mb-md-5">
                        <div class="col-md-6 mb-4 mb-md-0">
                            <img class="img-fluid border-radius bg-img" src="images/bgimg/mobile.jpeg" alt="" />
                        </div>
                        <div class="col-md-6">
                            <h4 class="font-weight-bold">Mobile App Development</h4>

                            <p class="mb-3" style={{ textAlign:'justify'}}>Being a human of the 21st century, we want things to work at a pace that is increasing rapidly according to the demand and such high competition you need Mobile App Development and IMVirtualTech is here to help you.</p>

                            <p class="mb-3" style={{ textAlign:'justify'}}>Here our team ensures that we provide the best services that would make your website easy to access and user-friendly, regardless of the platform.</p>

                            <p class="mb-3" style={{ textAlign:'justify'}}>You want to integrate an Android App or IOS App with your website, we are here and we have a solution for you. For more details talk to our experts anytime. Happy To Help You!</p>

                            <p class="mb-3" style={{ textAlign:'justify'}}>The best team works for the Mobile App Development of your Website, Products, and Services making it worth the expense! </p>

                            <p class="mb-3" style={{ textAlign:'justify'}}>As Mobile App Development is a crucial task, we have our finest team behind the scene at IMVirtualTech to ensure an enigmatic work. </p>



                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
