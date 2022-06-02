import tw from 'twin.macro';

function App() {
  const Wrapper = tw.section`flex w-full`;
  const Column = tw.div`w-1/2`;

  return (
    <div className="App">
      <Wrapper>
        <Column>Hi</Column>
      </Wrapper>
    </div>
  );
}

export default App;
