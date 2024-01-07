import NewProject from "./components/NewProject";
import NoPojectSelected from "./components/NoPojectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NoPojectSelected />
    </main>
  );
}

export default App;
