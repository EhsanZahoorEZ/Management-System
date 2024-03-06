
import {FC, useEffect , useState} from 'react';

type Props = {
    endValue: number;
    duaration: number;
};

const CountUpNumber: FC<Props> = ({endValue, duaration}) => {
    const [count, setCount] = useState(0);

    useEffect(() =>{

        let startTime: number;
        let animationFrameId: number;

        const updateCount = (timestamp: number) =>{
            if(!startTime) startTime= timestamp;
            const progress = timestamp - startTime;


            if (progress < duaration){
                setCount(Math.min(endValue, (progress / duaration) * endValue));
                animationFrameId = requestAnimationFrame(updateCount);
            } else {
                setCount(endValue);
            }
        };
        animationFrameId = requestAnimationFrame(updateCount);
    },[endValue, duaration])
    
    return <p className="md:font-bold font-medium text-lg xl:text-5xl">{Math.round(count)}
    </p>


};

export default CountUpNumber;
