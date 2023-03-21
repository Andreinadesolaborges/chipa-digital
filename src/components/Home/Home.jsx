import { Downarrow } from '../DownArrow/DownArrow';
import { Slider } from '../Slider/Slider';

export const Home = () => {
    return (
        <div>
            <div className="App">
                <div className='container'>
                    <div className='front-content'>
                        <Slider />
                        <Downarrow/>
                    </div>
                    <div className='semi-circle'></div>
                </div>
            </div>
        </div>
    );
}

