import { Formik, Form, Field } from 'formik';
import TimeAvailabilityPills from './TimeAvailabilityPills';
import CollectionOfEvents from './CalendarAvailability.json';
import './MeetingForm.css';

const INITIAL_VALUES = {
  MeetingDate: '2017-02-21',
  MeetingStartTime: '',
  MeetingDuration: '',
}

function MeetingForm() {
  const isFormValid = ({ MeetingDate, MeetingDuration }) => {
    const date = new Date(`${MeetingDate} 9:00:00`);
    const duration = +MeetingDuration;
    const isValidDate = date instanceof Date && !Number.isNaN(date);
    const isValidDuration = !Number.isNaN(duration) && duration > 0;
    return isValidDate && isValidDuration;
  }

  const getStartDate = (date) => new Date(`${date} 8:00:00`);
  const getEndDate = (date) => new Date(`${date} 13:00:00`);

  return (
    <div className="MeetingForm">
      <Formik initialValues={{ ...INITIAL_VALUES }} >
        {({ values }) => (
          <Form>
            <div className="FormRow">
              <Field
                id="MeetingDate"
                name="MeetingDate"
                type="date"
              />
              <Field
                id="MeetingStartTime"
                name="MeetingStartTime"
                as="select"
              >
                <option value="">Start Time</option>
              </Field>
              <Field
                id="MeetingDuration"
                name="MeetingDuration"
                as="select"
              >
                <option value="">Duration</option>
                <option value="30">30 Minutes</option>
                <option value="60">1 Hour</option>
              </Field>
            </div>
            {isFormValid(values) &&
              <TimeAvailabilityPills
                start={getStartDate(values.MeetingDate)}
                end={getEndDate(values.MeetingDate)}
                duration={+values.MeetingDuration}
                events={CollectionOfEvents}
              />
            }
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MeetingForm;
