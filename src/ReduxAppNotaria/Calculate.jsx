import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { inputvalue } from './reducers/actions/action';
import { useState } from 'react';
import Fraits from './Fraits';

const Calculate =()=>{

    const [block , setBlock] = useState(false);

    const priceState = useSelector(state => state.price)
    const dispatch = useDispatch();

    const handleINPUT = (e)=>{
        e.preventDefault()
        if (e.target.value > 0) {
            dispatch(inputvalue(e.target.value))
        }
    }

    const handleSUBMIT = (e)=>{
        e.preventDefault()
        if (priceState > 0) {
            setBlock(true)
        }
    }

    return <>
        <div class="container mt-5">
            <form class="form-inline" onClick={handleSUBMIT}>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPrice" class="sr-only">Price</label>
                    <input type="text" class="form-control" id="inputPrice" placeholder="Enter Price of buy" onChange={handleINPUT}/>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Calculate</button>
            </form>
        </div>
        {
            block && (
                <Fraits />
            )
        }
    </>
}

export default Calculate;