import PropTypes from "prop-types";
import { ButtonList, Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const label = str => str.charAt(0).toUpperCase() + str.slice(1)
  return (
		<ButtonList>
			{options.map((option) => (
				<Button key={option}  type="button" onClick={onLeaveFeedback} name={option}>
					{label(option)}
				</Button>
            ))}
          
		</ButtonList>
	);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

