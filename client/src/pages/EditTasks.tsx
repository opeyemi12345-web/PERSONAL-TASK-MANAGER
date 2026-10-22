import PageHeader from "../component/PageHeader";
import TaskForm from "../component/TaskForm";
const EditTasks = () => {
  return (
    <main className="max-w-360 mx-auto px-5 md:px-42.5 py-10 md:py-16.25 flex flex-col items-start gap-10.75">
      <PageHeader />
      <TaskForm />
    </main>
  );
};

export default EditTasks;
