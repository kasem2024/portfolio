import Info from "./component/Info";
import Projects from "./component/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-5 md:px-24">
     <Info/>
     <Projects/>
    </main>
  );
}
