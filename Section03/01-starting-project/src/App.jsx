import { useState } from 'react';

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';


function App() {
  console.log('[App] Rendered')

  const [ selectedTopic, setSelectedTopic ] = useState();
  //let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    //tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    //console.log('Pressed - ' + tabContent);

    // This will show the old value
    console.log('Pressed - ' + selectedButton);
  }

  // This is the syntax for the splitting of data elements into the fields.
  // <CoreConcept {... CORE_CONCEPTS[1]}
  
  // This 
            // <CoreConcept 
            //   title={CORE_CONCEPTS[0].title}
            //   description={CORE_CONCEPTS[0].description}
            //   image={CORE_CONCEPTS[0].image}
            // />
            // <CoreConcept {...CORE_CONCEPTS[1]} />
            // <CoreConcept {...CORE_CONCEPTS[2]} />
            // <CoreConcept {...CORE_CONCEPTS[3]} />
// was replaced by 
            // {CORE_CONCEPTS.map((conceptItem) => (
            //   <CoreConcept {...conceptItem} />
            // ))}


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              onSelect={() => handleSelect('components')} 
              isSelected={selectedTopic === 'components'}
            >
              Component
            </TabButton>
            <TabButton 
              onSelect={() => handleSelect('jsx')}
              isSelected={selectedTopic === 'jsx'}
            >
              JSX
            </TabButton>
            <TabButton 
              onSelect={() => handleSelect('props')}
              isSelected={selectedTopic === 'props'}
            >
              Props
            </TabButton>
            <TabButton 
              onSelect={() => handleSelect('state')}
              isSelected={selectedTopic === 'state'}
            >
              State
            </TabButton>
          </menu>
            {!selectedTopic ? (
              <p>Please select a topic</p>
            ) : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
            )}
        </section>
      </main>
    </div>
  );
}

export default App;

