import { useState } from 'react';

import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';


function Examples() {
    let tabContent = <p>Please select a topic.</p>;
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    // Replace onSelect={() => handleSelect('props')}
    // With onClick={() => handleSelect('props')}
    // When using Forwarded Props
    // No need for the custom handler name, 
    // just use the standard event handler name
    //
    // Dynamic HTML elements
    // When passing custom components as an attribute, 
    // simply use the name (no quotes) enclosed in curly brackets
    // Built in elements should be passed enclosed in quotes (no curly brackets)
    return (
        <Section id="examples" title="Examples">
            <Tabs 
                ButtonsContainer="menu"
                buttons={<>
                    <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => handleSelect('components')}
                    >
                    Components
                    </TabButton>
                    <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleSelect('jsx')}
                    >
                    JSX
                    </TabButton>
                    <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleSelect('props')}
                    >
                    Props
                    </TabButton>
                    <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleSelect('state')}
                    >
                    State
                    </TabButton>
                </>}
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}


export default Examples;
