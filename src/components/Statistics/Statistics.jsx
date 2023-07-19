import PropTypes from 'prop-types'
import {StatisticsList, StatisticsItem} from 'components/Statistics/Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positive }) => {
    return (
        <StatisticsList>
            <StatisticsItem>Good: { good }</StatisticsItem>
            <StatisticsItem>Neutral: { neutral }</StatisticsItem>
            <StatisticsItem>Bad: {bad}</StatisticsItem>
            <StatisticsItem>Total: {total}</StatisticsItem>
            <StatisticsItem>Positive feedback: { positive }%</StatisticsItem>
        </StatisticsList>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
}

