type KomponentProps = {
  name: string;
  dateOfBirth?: string;
};

function Komponent(props: KomponentProps) {
  return <h1>Hello {props.name} {props.dateOfBirth}</h1>;
}

function App() {
  return (
      <div>
        <Komponent name={"John"}/>
        <Komponent name={"Jane"} dateOfBirth={"01.01.1996"}/>
        <Komponent name={"Blake"} dateOfBirth={"01.06.1995"}/>
      </div>
  );
}

export default App
