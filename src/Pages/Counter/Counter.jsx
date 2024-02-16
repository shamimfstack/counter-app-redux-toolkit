import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/features/counter/counterSlice";

export default function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    return (
        <div className="py-24">
            <h2 className="text-3xl font-bold text-center mb-6">Counter App using Redux-Toolkit</h2>
            <div className="w-1/3 mx-auto border-2 p-5 rounded-lg">
                <div className="text-center">{count}</div>
                <div className="flex gap-4 justify-center">
                <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => dispatch(increment())}>Increment</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => dispatch(decrement())}>decrement</button>
                </div>
            </div>
        </div>
        );
}