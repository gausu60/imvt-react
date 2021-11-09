import React,{useState} from 'react'
import {
    Link
  } from "react-router-dom";

export default function Pagenotfound(props) {
    const [title] = useState(props.title);
    document.title = title;
    return (
        <div>
            <section class="404-error bg-light space-ptb">
                <div class="container h-100">
                    <div class="row h-100 justify-content-center">
                        <div class="col-md-10 align-self-center text-center">
                            <div class="404-error-images mb-4">
                                <svg class="w-100 h-100" xmlns="http://www.w3.org/2000/svg" width="965" height="398" viewBox="0 0 965 398">
                                    <path id="Shape_4_copy" data-name="Shape 4 copy" class="digit1 fill-primary" d="M1299,536h90v16h-90V536ZM554.005,522.6H534.151V496.957h19.854V522.6Zm-19.854,6.837h19.854v80.978H534.151V529.433Zm19.854-59.4V490.12H534.151V470.036h19.854ZM534.151,617.248h19.854v4.914H534.151v-4.914ZM611,518H627V622.006H611V518Zm349.5,30.072a3.412,3.412,0,0,0,3.414-3.419,2.9,2.9,0,0,0-.069-0.666,2.756,2.756,0,0,0-.188-0.632,4.052,4.052,0,0,0-.323-0.6,2.543,2.543,0,0,0-.427-0.514,3.4,3.4,0,0,0-3.074-.94,4.774,4.774,0,0,0-.649.206,3.784,3.784,0,0,0-.58.307,3.145,3.145,0,0,0-.512.427,2.543,2.543,0,0,0-.427.514,4.063,4.063,0,0,0-.325.6,2.656,2.656,0,0,0-.186.632,2.9,2.9,0,0,0-.069.666A3.412,3.412,0,0,0,960.5,548.067ZM1199.7,592.8v11.735a3.415,3.415,0,1,1-6.83,0V592.8h6.83Z" transform="translate(-478 -231)"></path>
                                    <path id="main" class="digit2 fill-dark" d="M1439.59,622.162h-61.81c4.05-13.882,15.9-56.857,15.9-85.271a3.418,3.418,0,0,0-3.42-3.418h-13.79l6.5-73.73a3.308,3.308,0,0,0-6.46-1.26l-18.1,59.326-1.6-31.987a3.315,3.315,0,0,0-6.53-.626l-10.33,42.036L1312.94,472a3.308,3.308,0,0,0-6.24,1.973l9.34,59.5h-16.66a3.41,3.41,0,0,0-3.41,3.418c0,28.414,11.84,71.389,15.9,85.271h-78.5c-1.9-17.037-17.81-30.382-37.09-30.382s-35.19,13.345-37.09,30.382H1035.15a57.365,57.365,0,0,1-31.18-51.23v-3.854h205.1a24.54,24.54,0,0,0,24.49-24.528V255.529A24.539,24.539,0,0,0,1209.07,231H711.934a24.54,24.54,0,0,0-24.5,24.528V542.55a24.54,24.54,0,0,0,24.5,24.528h205.1v3.854a57.355,57.355,0,0,1-31.181,51.23H669.921a3.382,3.382,0,0,0-.1-0.911L642.355,516.257a3.412,3.412,0,0,0-4.167-2.441l-8.769,2.3a3.406,3.406,0,0,0-3.271-2.49H612.806a3.417,3.417,0,0,0-3.414,3.418v5.6H587.515v-43a3.415,3.415,0,0,0-3.414-3.418H560.834v-9.606a3.416,3.416,0,0,0-3.414-3.418H530.737a3.416,3.416,0,0,0-3.415,3.418V622.162H481.413a3.419,3.419,0,0,0,0,6.837H1439.59A3.419,3.419,0,0,0,1439.59,622.162Zm-69.77-88.689h-9.26l13.03-42.708Zm-18.5-24.776,1.25,24.776h-7.34Zm-34.67-14.032,18.97,38.808h-12.88Zm70.14,45.645c-0.1,2.969-.32,6.093-0.63,9.309h-82.67c-0.32-3.216-.54-6.34-0.64-9.309h83.94ZM1199.7,598.8c13.91,1.383,25,11.1,26.76,23.364H1166.1c1.77-12.266,12.85-21.981,26.77-23.364M711.934,237.838H1209.07a17.694,17.694,0,0,1,17.66,17.691V523.865H694.266V255.529A17.7,17.7,0,0,1,711.934,237.838ZM694.266,542.55V530.7H1226.73V542.55a17.694,17.694,0,0,1-17.66,17.691H711.934A17.7,17.7,0,0,1,694.266,542.55Zm-78.045-7.775h6.513v5.769h-6.513v-5.769Zm13.341,12.273,19.651,75.114H629.562V547.048Zm7.054-25.752,25.738,98.38-6.3,1.653-25.738-98.381Zm-20.395-.833h6.513v7.475h-6.513v-7.475Zm-6.829,9.017v20.465H587.515V529.48h21.877ZM554.005,522.6H534.151V496.957h19.854V522.6Zm-19.854,6.837h19.854v80.978H534.151V529.433Zm26.683,17.948h19.853v43.373H560.834V547.381Zm19.853-64.321v57.484H560.834V483.06h19.853Zm-26.682-13.024V490.12H534.151V470.036h19.854ZM534.151,617.248h19.854v4.914H534.151v-4.914Zm26.683-19.657h19.853v24.571H560.834V597.591Zm26.681-40.809h21.877v65.38H587.515v-65.38Zm28.706,65.38V547.381h6.513v74.781h-6.513Zm282.4,0a64.147,64.147,0,0,0,25.233-51.23v-3.854h73.285v3.854a64.145,64.145,0,0,0,25.228,51.23H898.624Zm420.366,0c-2.57-8.7-11.27-39.331-14.74-65.909h81.15c-3.48,26.573-12.18,57.212-14.75,65.909h-51.66Z" transform="translate(-478 -231)"></path>
                                    <text id="_404" data-name="404" class="digit3 h2 fill-dark" x="284.899" y="229.078">4<tspan class="cls-4 fill-primary">0</tspan>4</text>
                                </svg>
                            </div>
                            <div class="404-error-content">
                                <h2>oops! page not found</h2>
                                <h6 class="text-grey mb-4">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</h6>
                                <Link class="btn btn-primary-round btn-round" to="/"><i class="fas fa-arrow-left pr-2"></i>Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
