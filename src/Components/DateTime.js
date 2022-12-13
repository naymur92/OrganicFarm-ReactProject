/* eslint-disable no-nested-ternary */
// convert MySQL DATETIME into javascript time
export default function DateTime(time) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date(time.time);

  return (
    <>
      <span>
        {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}
      </span>
      {` `}-{' '}
      <span>
        {date.getHours() > 12 ? date.getHours() - 12 : date.getHours() === 0 ? 12 : date.getHours()}
      </span>
      :<span>{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}</span>
      <span>{date.getHours() > 12 ? `PM` : `AM`}</span>
    </>
  );

  // const [hour, setHour] = useState('');
  // const [min, setMin] = useState('');
  // const [amPm, setAmPm] = useState('');

  // // Check Hour
  // if (date.getHours() > 12) {
  //   setHour(date.getHours() - 12);
  // } else if (date.getHours() === 0) {
  //   setHour(12);
  // } else {
  //   setHour(date.getHours());
  // }

  // // Check Minutes
  // if (date.getMinutes() < 10) {
  //   setMin(`0${date.getMinutes()}`);
  // } else {
  //   setMin(date.getMinutes());
  // }

  // // Check am/pm
  // if (date.getHours() > 12) {
  //   setAmPm('AM');
  // } else {
  //   setAmPm('PM');
  // }

  // // Date
  // const DATE = date.getDate();

  // // Month
  // const MONTH = months[date.getMonth()];

  // // Year
  // const YEAR = date.getFullYear();

  // return (
  //   <span>
  //     {DATE} {MONTH}, {YEAR} - {hour}:{min} {amPm}
  //   </span>
  // );
}
