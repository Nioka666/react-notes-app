import NoteCards from "./components/NoteCards";

export default function Index() {
  return (
    <>
      <section className="header">
        <h1 className="text-2xl max-sm:text-xl text-gray-500 font-bold">My Notes</h1>
        <h2 className="text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe!</h2>
      </section>
      <NoteCards />
    </>
  );
}