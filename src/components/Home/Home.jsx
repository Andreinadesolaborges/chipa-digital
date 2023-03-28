import { Banner } from '../Banner/Banner';
import { Downarrow } from '../DownArrow/DownArrow';
import { Slider } from '../Slider/Slider';
import {Section} from './Section/Section';

export const Home = () => {
    return (
        <div>
            <div className="App">
                <div className='container'>
                    <div className='front-content'>
                        <Slider />
                        <Downarrow id={"s1"}/>
                    </div>
                </div>
               <Banner/>
               <Section/>
            </div>
        </div>
    );
}

