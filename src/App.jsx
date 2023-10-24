import { MultiStepForm } from "./components/MultiStepForm/MultiStepForm";
import formData from "./data.json";

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
