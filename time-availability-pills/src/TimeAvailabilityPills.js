import PropTypes from 'prop-types';
import { formatTime, getIntervalsMap, getAvailabilityMap } from './helpers';
import './TimeAvailabilityPills.css';

function TimeAvailabilityPills({ start, end, duration, events }) {
  const intervals = getIntervalsMap(start, end, duration);
  const availability = getAvailabilityMap(intervals, duration, events);

  return (
    <div className="TimeAvailabilityPills">
      {intervals.map((interval, current) => (
        <div key={interval} className={`pill ${availability[current]}`} >
          {formatTime(interval)}
        </div>
      ))
      }
    </div>
  );
}

TimeAvailabilityPills.propTypes = {
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  duration: PropTypes.number,
  events: PropTypes.array,
};

export default TimeAvailabilityPills;