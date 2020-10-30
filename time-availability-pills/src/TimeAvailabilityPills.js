import PropTypes from 'prop-types';
import './TimeAvailabilityPills.css';

function TimeAvailabilityPills({ start, end, duration, events }) {

  console.log(start, end, duration);
  return (
    <div className="TimeAvailabilityPills">

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