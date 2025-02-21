import Markdown from 'react-markdown'


function ClaudeRecipe(prop) {

    // const [isOn, setIsOn] = React.useState(prop.on)

const markdown = prop.recipe

  return (
    <section className='suggested-recipe-container' aria-live='polite'>
      <h2>Chef Claude Recommends:</h2>
    <Markdown>{markdown}</Markdown>
    </section>
  );
}

export default ClaudeRecipe;