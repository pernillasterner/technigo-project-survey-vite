import { MultiStepForm } from "./components/Form/MultiStepForm";
import IceBreakerData from "./icebreaker-questions.json";

/**
 * Need to send this data to form
 * - id
 * - question info
 * - question body
 *
 */

export const App = () => {
  const questions = IceBreakerData.questions;

  return <div className="form">{<MultiStepForm questions={questions} />}</div>;
};
