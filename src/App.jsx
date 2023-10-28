import { MultiStepForm } from "./components/Form/MultiStepForm";
import formData from "./icebreaker-questions.json";

/**
 * Need to send this data to form
 * - id
 * - question info
 * - question body
 *
 */

export const App = () => {
  const questions = formData.questions;

  return <div className="form">{<MultiStepForm questions={questions} />}</div>;
};
