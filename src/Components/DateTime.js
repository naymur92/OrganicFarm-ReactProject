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
      :<span>{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}</span> {` `}
      <span>{date.getHours() > 12 ? `PM` : `AM`}</span>
    </>
  );
}
