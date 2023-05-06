import PropTypes from 'prop-types';
import style from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, clickFeedback }) => (
  <div className={style.feedback}>
    <p className={style.feedbackTitle}>Please leave feedback</p>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={style.feedbackItem}
        value={option}
        onClick={clickFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  clickFeedback: PropTypes.func.isRequired,
};

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     totalFeedback: 0,
//   };

//   handleClickGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   handleClickNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   handleClickBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };
// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   const totalFeedback = good + neutral + bad;
//   return totalFeedback;
// };

// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const totalFeedback = this.countTotalFeedback();
//   const percentage =
//     totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
//   return percentage;
// };

//   render() {
//     return (
//       <div className={style.feedback}>
//         <p>Please leave feedback</p>
//         <ul className={style.feedbackList}>
//           <li className={style.feedbackItem}>
//             <button onClick={this.handleClickGood}>good</button>
//           </li>
//           <li className={style.feedbackItem}>
//             <button onClick={this.handleClickNeutral}>neutral</button>
//           </li>
//           <li className={style.feedbackItem}>
//             <button onClick={this.handleClickBad}>bad</button>
//           </li>
//         </ul>

//         {this.state.good !== 0 ||
//         this.state.neutral !== 0 ||
//         this.state.bad !== 0 ? (
//           <>
//             <p>Statistics</p>
//             <ul className={style.statisticsList}>
//               <li className={style.statisticsItem}>good: {this.state.good}</li>
//               <li className={style.statisticsItem}>
//                 neutral: {this.state.neutral}
//               </li>
//               <li className={style.statisticsItem}>bad: {this.state.bad}</li>
//               <li className={style.statisticsItem}>
//                 total: {this.countTotalFeedback()}
//               </li>
//             </ul>
//             <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
//           </>
//         ) : (
//           <p>No feedback given</p>
//         )}
//       </div>
//     );
//   }
// }
// export default Feedback;
export default FeedbackOptions;
