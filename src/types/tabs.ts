import { Dispatch, SetStateAction } from "react";


export type TabProps = {
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
    next: () => void;
}