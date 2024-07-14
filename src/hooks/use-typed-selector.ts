import { useSelector } from "react-redux";
import { RootState } from "../services/store/store";

export const useTypedSelector = useSelector.withTypes<RootState>()