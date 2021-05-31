import "./CheckIcon.css";

export const CheckIcon = ({ checked }) => {
    return (
        <span 
            className={!checked ? "checkbox__symbol" : "checkbox__symbol--checked"}
        >
        </span>
    );
};