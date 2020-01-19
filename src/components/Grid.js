import React from 'react'
import Section from './Section';
import Todoit from './Todoit.png';
import Block from './Block-Bolt.png';

const Grid = () => {
    return (
        <div class="grid">
            <Section 
                title={'Todoit'} 
                text={'A full stack todo list. Features user authentification and the ability to create, edit, or delete todos'}
                img={Todoit}
                link={'http://todoisttodolist.herokuapp.com/'}
                />
            <Section 
                title={'Block Bolt'}
                text={'A Front-end two player game where players battle eachother for points while avoiding eachothers (and their own) destructive trails'}
                img={Block}
                link={'https://davidk1999.github.io/block-bolt/'}
                />
            <Section />
            <Section />
            <Section />
            <Section />
        </div>
    );
}
 
export default Grid;