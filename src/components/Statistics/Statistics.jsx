import PropTypes from "prop-types";
import { StatisticsList, CounterItem} from "./Statistics.styled"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticsList>
                <CounterItem><span>Good:</span><span>{good}</span></CounterItem>
            <CounterItem><span>Neutral:</span> {neutral}</CounterItem>
                <CounterItem><span>Bad:</span> {bad}</CounterItem>
            <CounterItem><span>Total:</span> {total}</CounterItem>
            <CounterItem><span>Positive feedback:</span><span>{positivePercentage}%</span></CounterItem>
        </StatisticsList>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number
}