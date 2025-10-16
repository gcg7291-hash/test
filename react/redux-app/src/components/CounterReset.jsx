import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { reset } from "../store/counterSlice";
export default function CounterReset() {
  const re = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        리셋
      </button>
    </div>
  );
}
